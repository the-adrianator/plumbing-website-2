"use client";

import { Flame, SearchCheck, Wrench, Thermometer } from "lucide-react";
import Link from "next/link";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
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
  );
};

export default function GasServices() {
  return (
    <section id="gas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4">
            <Flame className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-primary text-center">
            Gas Services
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Gas Safe registered engineers (Reg. No: 123456)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ServiceItem
            icon={<SearchCheck className="w-6 h-6" />}
            title="Gas Leak Detection"
            description="Immediate response to suspected gas leaks with comprehensive detection services. We use specialized equipment to locate and repair gas leaks safely and efficiently."
          />

          <ServiceItem
            icon={<Wrench className="w-6 h-6" />}
            title="Gas Appliance Installation"
            description="Professional installation of all gas appliances including cookers, hobs, fires, and water heaters. All installations meet current Gas Safety regulations."
          />

          <ServiceItem
            icon={<Flame className="w-6 h-6" />}
            title="Gas Safety Certificates"
            description="Comprehensive gas safety inspections and certification for homeowners and landlords. Our detailed checks ensure your gas appliances and installations are safe and legal."
          />

          <ServiceItem
            icon={<Thermometer className="w-6 h-6" />}
            title="Boiler Repairs & Maintenance"
            description="Expert diagnosis and repair of all boiler makes and models. Our engineers are manufacturer-trained to handle any boiler issue quickly and effectively."
          />
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-secondary text-lg py-3 px-8">
            Schedule Gas Service
          </Link>
        </div>
      </div>
    </section>
  );
}
