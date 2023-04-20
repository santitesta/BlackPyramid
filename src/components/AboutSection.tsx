// components/AboutSection.js
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            A brief description of your startup and its mission.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://source.unsplash.com/random" // Replace with your desired image URL
              alt="About us"
              className="rounded-md shadow-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="mb-6">
              Tener en cuatro años un catálogo de 10 clientes felices facturando
              más de $USD 5000 mensuales
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <img
                  src="https://source.unsplash.com/random/50x50" // Replace with the image URL for co-founder 1
                  alt="Co-founder 1"
                  className="rounded-full mb-2"
                  width={50}
                  height={50}
                />
                <p className="text-lg font-bold mb-1">Co-founder 1</p>
                <p className="text-sm text-gray-600">Role in startup</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://source.unsplash.com/random/50x50" // Replace with the image URL for co-founder 2
                  alt="Co-founder 2"
                  className="rounded-full mb-2"
                  width={50}
                  height={50}
                />
                <p className="text-lg font-bold mb-1">Co-founder 2</p>
                <p className="text-sm text-gray-600">Role in startup</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://source.unsplash.com/random/50x50" // Replace with the image URL for co-founder 3
                  alt="Co-founder 3"
                  className="rounded-full mb-2"
                  width={50}
                  height={50}
                />
                <p className="text-lg font-bold mb-1">Co-founder 3</p>
                <p className="text-sm text-gray-600">Role in startup</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://source.unsplash.com/random/50x50" // Replace with the image URL for co-founder 4
                  alt="Co-founder 4"
                  className="rounded-full mb-2"
                  width={50}
                  height={50}
                />
                <p className="text-lg font-bold mb-1">Co-founder 4</p>
                <p className="text-sm text-gray-600">Role in startup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
