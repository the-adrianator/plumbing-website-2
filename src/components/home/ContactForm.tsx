"use client";

import { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9\s\(\)\+\-]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid phone number.",
      });
      return;
    }

    // In a real implementation, this would submit to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your request! We will contact you shortly.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="contact-info">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-700 mb-8">
              Have a plumbing emergency or need to schedule a service? Contact
              us today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-700">
                    Emergency:{" "}
                    <a
                      href="tel:01234567890"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      07878 531920
                    </a>
                  </p>
                  <p className="text-gray-700">
                    Office:{" "}
                    <a
                      href="tel:01234567891"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      01234 567 891
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:info@nelaplumbing.com"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      info@nelaplumbing.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    Business Hours
                  </h3>
                  <p className="text-gray-700">Monday-Friday: 8am-6pm</p>
                  <p className="text-gray-700">Emergency Service: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Request a Quote
            </h3>

            {formStatus.submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {formStatus.message}
              </div>
            ) : formStatus.error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {formStatus.message}
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                >
                  <option value="">Select a Service</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="boiler">Boiler Installation</option>
                  <option value="gas">Gas Safety Certificate</option>
                  <option value="plumbing">General Plumbing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded transition-colors w-full"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
