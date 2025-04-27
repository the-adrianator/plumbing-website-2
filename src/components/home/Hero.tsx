"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative py-20 md:py-32 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/technician.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            24/7 Emergency Plumbing—Fast, Reliable & Fully Certified
          </h1>
          <p className="text-lg md:text-xl mb-8">
            When plumbing disasters strike, you need a trusted local expert who
            responds quickly. Nela Plumbing & Gas Services is here for you day
            or night.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="tel:01234567890"
              className="btn-emergency text-lg py-3 px-6 flex items-center justify-center gap-2"
            >
              Call Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg py-3 px-6">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
