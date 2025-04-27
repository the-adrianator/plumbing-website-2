'use client'

import { PoundSterling, Ban, Clock, CreditCard } from 'lucide-react'
import Link from 'next/link'

interface PricingFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

const PricingFeature = ({ icon, title, description }: PricingFeatureProps) => {
  return (
    <div className="text-center p-6">
      <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

export default function PricingInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">Transparent Pricing</h2>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          At Nela Plumbing & Gas Services, we believe in complete transparency with our pricing. 
          You'll always know the cost before we start any work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <PricingFeature 
            icon={<PoundSterling className="w-6 h-6" />}
            title="No Hidden Costs"
            description="We provide detailed quotes with all costs clearly explained. No surprises or hidden charges."
          />
          
          <PricingFeature 
            icon={<Ban className="w-6 h-6" />}
            title="No Callout Fees"
            description="We never charge callout fees, even for emergency services or after-hours calls."
          />
          
          <PricingFeature 
            icon={<Clock className="w-6 h-6" />}
            title="Fixed Hourly Rates"
            description="Our transparent hourly rates ensure you only pay for the time spent working on your property."
          />
          
          <PricingFeature 
            icon={<CreditCard className="w-6 h-6" />}
            title="Flexible Payment Options"
            description="We accept multiple payment methods including cash, card, and bank transfer for your convenience."
          />
        </div>
        
        <div className="text-center">
          <Link 
            href="/contact" 
            className="btn-primary text-lg py-3 px-8"
          >
            Get a Free Quote Today
          </Link>
        </div>
      </div>
    </section>
  )
}
