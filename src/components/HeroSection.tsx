// components/HeroSection.js
import React from "react";

const url = "https://wallpapercave.com/wp/wp5743912.jpg";
const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen text-white"
      style={{
        backgroundImage: `url(/gears.jpg)`,
      }}
      id="hero"
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Startup Name</h1>
          <p className="text-xl mb-6">
            Eliminar las tareas no hechas para humanos y llevar las industrias a
            su máximo potencial.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            Call to Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
