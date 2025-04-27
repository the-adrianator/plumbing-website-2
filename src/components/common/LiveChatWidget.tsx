'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState<{type: 'user' | 'agent', text: string}[]>([
    {type: 'agent', text: 'Hello! How can I help you today with your plumbing or gas needs?'}
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory(prev => [...prev, {type: 'user', text: message}])
    setMessage('')

    // Simulate agent response after a short delay
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'agent', 
        text: "Thanks for your message. One of our plumbing experts will be with you shortly. For emergency services, please call us directly at 01234 567 890."
      }])
    }, 1000)
  }

  // Auto-scroll to bottom of chat when new messages arrive
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages')
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }, [chatHistory])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget Button */}
      <button 
        onClick={toggleChat}
        className="bg-primary hover:bg-secondary text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center gap-2"
        aria-label="Live Chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className={`${isOpen ? 'hidden' : 'hidden sm:inline'}`}>Live Chat</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-primary text-white p-4">
            <h3 className="font-bold">Nela Plumbing & Gas Chat</h3>
            <p className="text-sm">We're here to help!</p>
          </div>

          {/* Chat Messages */}
          <div 
            id="chat-messages"
            className="h-80 overflow-y-auto p-4 space-y-4"
          >
            {chatHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              type="submit"
              className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
