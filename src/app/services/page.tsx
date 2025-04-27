'use client'

import { Wrench } from 'lucide-react'
import EmergencyPlumbing from '@/components/services/EmergencyPlumbing'
import GasServices from '@/components/services/GasServices'
import InstallationServices from '@/components/services/InstallationServices'
import MaintenanceServices from '@/components/services/MaintenanceServices'
import PricingInfo from '@/components/services/PricingInfo'
import ContactForm from '@/components/home/ContactForm'

export default function ServicesPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional plumbing and gas services for every need
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Expert Plumbing & Gas Services
            </h2>
            <p className="text-gray-700 mb-6">
              At Nela Plumbing & Gas Services, we provide comprehensive plumbing and gas solutions for homeowners, 
              landlords, and businesses throughout [City/Region]. Our team of Gas Safe registered engineers are 
              available 24/7 for emergency callouts and scheduled appointments.
            </p>
            <p className="text-gray-700 mb-8">
              We pride ourselves on our rapid response times, with most emergency calls attended within 60 minutes. 
              All our work is fully guaranteed and completed to the highest industry standards.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 flex gap-6 shadow-md">
              <div className="shrink-0">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center">
                  <Wrench className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Our Service Guarantee</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-success text-white rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                    <span>Fast response within 60 minutes for emergencies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-success text-white rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                    <span>No callout fees, ever</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-success text-white rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-success text-white rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                    <span>Fully qualified and Gas Safe registered engineers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-success text-white rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
                    <span>Workmanship warranty on all services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <EmergencyPlumbing />
      <GasServices />
      <InstallationServices />
      <MaintenanceServices />
      <PricingInfo />
      <ContactForm />
    </>
  )
}
