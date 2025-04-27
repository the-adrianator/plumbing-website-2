'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

interface TestimonialProps {
  content: string
  author: string
  location: string
  rating: number
}

const Testimonial = ({ content, author, location, rating }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="relative mb-4">
        <p className="italic text-gray-700 relative z-10">{content}</p>
        <span className="absolute top-0 left-0 text-6xl text-secondary opacity-20 transform -translate-y-1/2 -translate-x-1/4">"</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-primary">{author}</h4>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-secondary fill-current" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const testimonials = [
    {
      content: "Nela Plumbing responded to our emergency call within 30 minutes. The engineer was professional, courteous and fixed our burst pipe quickly. Highly recommended!",
      author: "Sarah Johnson",
      location: "Homeowner, [City]",
      rating: 5
    },
    {
      content: "As a landlord with multiple properties, I rely on Nela for all gas safety certificates. Always on time, thorough, and reasonably priced. A pleasure to work with.",
      author: "Michael Thompson",
      location: "Landlord, [City]",
      rating: 5
    },
    {
      content: "Had a new boiler installed by Nela and couldn't be happier with the service. They explained all my options, worked efficiently, and left everything spotless.",
      author: "Emma Williams",
      location: "Homeowner, [City]",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">What Our Customers Say</h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Mobile view: Single testimonial */}
          <div className="block md:hidden">
            <Testimonial 
              content={testimonials[currentTestimonial].content}
              author={testimonials[currentTestimonial].author}
              location={testimonials[currentTestimonial].location}
              rating={testimonials[currentTestimonial].rating}
            />
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-secondary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop view: All testimonials */}
          <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/why-choose-us#testimonials" className="text-primary font-semibold hover:text-secondary transition-colors inline-block relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:bottom-0 after:transition-all hover:after:w-full">
            Read More Testimonials
          </a>
        </div>
      </div>
    </section>
  )
}
