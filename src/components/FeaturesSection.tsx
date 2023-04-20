// components/FeaturesSection.js
import React from "react";

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-blue-500 text-white p-6 rounded-full mb-4 w-20 h-20 flex items-center justify-center">
      <i className={icon}></i> {/* Replace with the appropriate icon */}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "icon-1", // Replace with your desired icon class name
      title: "Feature 1",
      description: "A brief description of Feature 1.",
    },
    {
      icon: "icon-2", // Replace with your desired icon class name
      title: "Feature 2",
      description: "A brief description of Feature 2.",
    },
    {
      icon: "icon-3", // Replace with your desired icon class name
      title: "Feature 3",
      description: "A brief description of Feature 3.",
    },
  ];

  return (
    <section className="py-16" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg">
            A brief description of your startup's key features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
