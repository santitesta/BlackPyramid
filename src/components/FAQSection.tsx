// components/FAQSection.js
import React, { useState } from "react";

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold">{question}</h3>
        <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
      </div>
      {isOpen && <p className="mt-4">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Frequently Asked Question 1",
      answer: "The answer to Frequently Asked Question 1.",
    },
    {
      question: "Frequently Asked Question 2",
      answer: "The answer to Frequently Asked Question 2.",
    },
    {
      question: "Frequently Asked Question 3",
      answer: "The answer to Frequently Asked Question 3.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-lg">
            Common questions about our startup and its offerings.
          </p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
