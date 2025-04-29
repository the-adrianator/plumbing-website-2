"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-secondary text-white py-2 sticky top-0 z-[1000]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 animate-pulse" />
          <span className="font-semibold">
            We're Here 24/7—No Callout Fees!
          </span>
        </div>
        <Link
          href="tel:01234567890"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded transition-colors"
        >
          Call Now: 07878 531920
        </Link>
      </div>
    </div>
  );
}
