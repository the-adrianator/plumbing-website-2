'use client'

import { ClipboardList, CalendarCheck, Home, Shield } from 'lucide-react'
import Link from 'next/link'

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="shrink-0">
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default function MaintenanceServices() {
  return (
    <section id="certificates" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4">
            <ClipboardList className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-primary text-center">Maintenance & Certification</h2>
          <p className="text-xl text-gray-600 text-center">Regular maintenance and legal compliance</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ServiceItem 
            icon={<ClipboardList className="w-6 h-6" />}
            title="Landlord Safety Certificates"
            description="Comprehensive landlord gas safety certificates (CP12) to meet legal requirements. Our thorough inspections ensure your rental properties are safe and compliant with current regulations."
          />
          
          <ServiceItem 
            icon={<CalendarCheck className="w-6 h-6" />}
            title="Annual Boiler Servicing"
            description="Regular boiler maintenance to ensure optimal performance, efficiency, and safety. Our annual servicing helps prevent breakdowns, extend equipment life, and maintain manufacturer warranties."
          />
          
          <ServiceItem 
            icon={<Home className="w-6 h-6" />}
            title="Property Maintenance Contracts"
            description="Tailored maintenance packages for landlords and property managers. Our contracts include regular inspections, priority emergency response, and discounted rates on repairs and parts."
          />
          
          <ServiceItem 
            icon={<Shield className="w-6 h-6" />}
            title="Preventative Maintenance"
            description="Proactive maintenance services to identify and address potential issues before they become major problems. Regular system checks help avoid costly emergency repairs and disruption."
          />
        </div>
        
        <div className="text-center">
          <Link 
            href="/contact" 
            className="btn-secondary text-lg py-3 px-8"
          >
            Schedule Maintenance Service
          </Link>
        </div>
      </div>
    </section>
  )
}
