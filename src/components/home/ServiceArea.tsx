"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function ServiceArea() {
  const neighborhoods = [
    "Reading",
    "Bracknell",
    "Wokingham",
    "Maidenhead",
    "Windsor",
    "Slough",
    "Newbury",
    "Basingstoke",
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Our Service Area
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Serving homeowners and businesses throughout [City/Region]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Placeholder for map image */}
            <img
              src="/images/service-area.png"
              alt="Service Area Map"
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              Areas We Cover:
            </h3>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {neighborhoods.map((neighborhood, index) => (
                <li key={index} className="flex items-center">
                  <MapPin className="w-5 h-5 text-success mr-2" />
                  <span>{neighborhood}</span>
                </li>
              ))}
            </ul>
            <Link href="/service-area" className="btn-secondary inline-block">
              View Full Service Area
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
