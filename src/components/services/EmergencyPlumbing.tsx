"use client";

import { Wrench, Droplet, Search, ShowerHead } from "lucide-react";
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

export default function EmergencyPlumbing() {
  return (
    <section id="emergency" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
            <Wrench className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-primary text-center">
            Emergency Plumbing
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Available 24/7, 365 days a year
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <ServiceItem
            icon={<Droplet className="w-6 h-6" />}
            title="Burst Pipes"
            description="Rapid response to burst pipes with emergency water shutoff and complete repair services. We'll minimize water damage and restore your plumbing system quickly."
          />

          <ServiceItem
            icon={<Wrench className="w-6 h-6" />}
            title="Blocked Drains"
            description="Professional drain unblocking using the latest equipment including high-pressure water jetting and CCTV drain surveys to identify and resolve blockages."
          />

          <ServiceItem
            icon={<Search className="w-6 h-6" />}
            title="Leak Detection"
            description="Advanced leak detection services using thermal imaging and acoustic equipment to locate hidden leaks without unnecessary damage to your property."
          />

          <ServiceItem
            icon={<ShowerHead className="w-6 h-6" />}
            title="Water Heater Repairs"
            description="Emergency repairs for all types of water heaters, including conventional, tankless, and combi boilers. Restore your hot water quickly and efficiently."
          />
        </div>

        <div className="text-center">
          <Link
            href="tel:01234567890"
            className="btn-primary text-lg py-3 px-8"
          >
            Call Now for Emergency Service
          </Link>
        </div>
      </div>
    </section>
  );
}
