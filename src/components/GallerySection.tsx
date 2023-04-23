// components/GallerySection.js
import React from "react";

const GalleryItem = ({ image, alt }: any) => (
  <div className="mb-4 md:mb-0">
    <img
      src={image}
      alt={alt}
      className="w-full h-auto object-cover rounded-md shadow-md"
    />
  </div>
);

const GallerySection = () => {
  const galleryImages = [
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      alt: "Image 1",
    },
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      alt: "Image 2",
    },
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      alt: "Image 3",
    },
    {
      image: "https://source.unsplash.com/random", // Replace with your desired image URL
      alt: "Image 4",
    },
  ];

  return (
    <section className="py-16" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg">
            A showcase of our startup&apos;s recent projects or events.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((galleryImage, index) => (
            <GalleryItem
              key={index}
              image={galleryImage.image}
              alt={galleryImage.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
