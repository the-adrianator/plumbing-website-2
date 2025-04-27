"use client";

import { Clock, Award, PoundSterling, ThumbsUp } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="text-center">
      <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description:
        "Emergency response any time of day or night, weekends and holidays included.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Fully Certified",
      description:
        "Gas Safe registered engineers with extensive qualifications and training.",
    },
    {
      icon: <PoundSterling className="w-6 h-6" />,
      title: "No Hidden Fees",
      description:
        "Transparent pricing with no surprise charges or callout fees.",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Satisfaction Guaranteed",
      description:
        "Our work is backed by our satisfaction guarantee and workmanship warranty.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">
          Why Choose Us?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-10">
          Trusted by homeowners and businesses for over 10 years
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="max-w-[120px]">
            <img
              src="/images/gas-safe.png"
              alt="Gas Safe Registered"
              className="w-full"
            />
          </div>
          <div className="max-w-[120px]">
            <img
              src="/images/10-years-experience.png"
              alt="10+ Years Experience"
              className="w-full"
            />
          </div>
          <div className="max-w-[120px]">
            <img
              src="/images/5-yr-workmanship.png"
              alt="Workmanship Warranty"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
