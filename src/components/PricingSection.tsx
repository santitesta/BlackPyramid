// components/PricingSection.js
import React from "react";

const PricingCard = ({ title, price, features }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="text-4xl font-bold mb-6">
      <span className="text-lg">$</span>
      {price}
    </div>
    <ul className="space-y-4">
      {features.map((feature: any, index: number) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "9",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro",
      price: "29",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Enterprise",
      price: "99",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-lg">
            Choose the best plan for your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
