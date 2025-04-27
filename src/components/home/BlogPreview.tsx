"use client";

import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";

export default function BlogPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Plumbing & Gas Tips
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Expert advice to keep your home safe and efficient
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <article className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/blog-gas-leak.jpg"
                alt="How to Spot a Gas Leak"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">
                How to Spot a Gas Leak
              </h3>
              <p className="text-gray-700 mb-4">
                Learn the warning signs of a gas leak in your home and the
                immediate steps you should take to ensure your safety.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
              >
                <span>Read More</span>
                <BookOpen className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </article>

          <article className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/blog-boiler.jpg"
                alt="Why Regular Boiler Maintenance Saves Money"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">
                Why Regular Boiler Maintenance Saves Money
              </h3>
              <p className="text-gray-700 mb-4">
                Discover how annual boiler servicing can prevent costly
                breakdowns and extend the life of your heating system.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
              >
                <span>Read More</span>
                <BookOpen className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
