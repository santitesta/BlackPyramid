// DevelopmentBanner.tsx
import React from "react";

interface DevelopmentBannerProps {
  companyName: string;
}

const DevelopmentBanner: React.FC<DevelopmentBannerProps> = ({
  companyName,
}) => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/gears.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-md">
        <h1 className="text-white text-4xl font-bold mb-4">
          Under Development
        </h1>
        <p className="text-white text-xl">
          {companyName} is working hard to bring you the best process
          improvement solutions using state of the art technologies like AI.
        </p>
        <p className="text-white text-xl mt-4">
          Our website is currently under development, but we&apos;ll be launching
          soon. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default DevelopmentBanner;
