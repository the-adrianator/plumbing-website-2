"use client";

import { Thermometer, Bath, Droplet, Wrench } from "lucide-react";
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

export default function InstallationServices() {
  return (
    <section id="boiler" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4">
            <Wrench className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-primary text-center">
            Installation Services
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Quality installations with manufacturer warranties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ServiceItem
            icon={<Thermometer className="w-6 h-6" />}
            title="Boiler Installation"
            description="Complete boiler installation services from trusted brands including Worcester Bosch, Vaillant, and Ideal. We provide expert advice on the most efficient system for your property and budget."
          />

          <ServiceItem
            icon={<Bath className="w-6 h-6" />}
            title="Bathroom Fitting"
            description="Full bathroom installation services from design to completion. Our skilled plumbers ensure perfect installation of all bathroom fixtures, including specialized requirements like wet rooms and disabled access."
          />

          <ServiceItem
            icon={<Droplet className="w-6 h-6" />}
            title="Kitchen Plumbing"
            description="Expert installation of kitchen plumbing including sinks, taps, dishwashers, and water filters. We work alongside kitchen fitters to ensure seamless integration of all plumbing elements."
          />

          <ServiceItem
            icon={<Thermometer className="w-6 h-6" />}
            title="Heating Systems"
            description="Installation of complete heating systems including radiators, underfloor heating, and smart controls. We design energy-efficient solutions tailored to your property and heating requirements."
          />
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-secondary text-lg py-3 px-8">
            Request Installation Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
