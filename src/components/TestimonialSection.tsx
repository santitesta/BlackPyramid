// components/TestimonialSection.js
import React from "react";

const TestimonialCard = ({ image, name, title, quote }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 object-cover rounded-full mr-4"
      />
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{title}</p>
      </div>
    </div>
    <blockquote>
      <p className="italic text-lg">{quote}</p>
    </blockquote>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      name: "Jane Doe",
      title: "CEO, Company 1",
      quote: "A brief testimonial quote from Jane Doe.",
    },
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      name: "John Smith",
      title: "CTO, Company 2",
      quote: "A brief testimonial quote from John Smith.",
    },
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      name: "Mary Johnson",
      title: "COO, Company 3",
      quote: "A brief testimonial quote from Mary Johnson.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg">
            Hear what our clients have to say about our startup.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
