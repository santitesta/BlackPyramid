// components/ContactSection.js
import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Have any questions or need support? Get in touch with us.
          </p>
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <form>
            <div className="mb-6">
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
