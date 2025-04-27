"use client";

import Link from "next/link";
import { Wrench, Flame, Thermometer, ClipboardCheck } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        href={link}
        className="inline-block text-primary font-semibold hover:text-secondary transition-colors"
      >
        Learn More{" "}
        <span className="ml-1 transition-transform duration-300 inline-block group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
};

export default function ServicesOverview() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Emergency Repairs",
      description:
        "Fast response to burst pipes, leaks, and blockages. Available 24/7 with no callout fees.",
      link: "/services#emergency",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Gas Services",
      description:
        "Gas leak detection, appliance installation, and safety checks by Gas Safe registered engineers.",
      link: "/services#gas",
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Boiler Installation",
      description:
        "Expert installation of energy-efficient boilers with manufacturer warranties.",
      link: "/services#boiler",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Safety Certificates",
      description:
        "Landlord gas safety certificates and property compliance documentation.",
      link: "/services#certificates",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Our Services
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Professional plumbing and gas services for every need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
