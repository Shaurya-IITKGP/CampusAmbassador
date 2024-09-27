import React from "react";
import { ThreeDCard } from "./C"; // Ensure the correct import path for ThreeDCard component

interface SponsorsSectionProps {
  sponsors?: { id: number; name: string; logoUrl: string }[];
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ sponsors = [] }) => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold mb-8">SPONSORS</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl">
        {sponsors.length > 0 ? (
          sponsors.map((sponsor) => (
            <ThreeDCard key={sponsor.id}>
              {/* You can dynamically update content inside ThreeDCard for each sponsor */}
              <div className="group relative flex flex-col items-center justify-center transition transform duration-500 ease-in-out">
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300 ease-in-out animate-pulse group-hover:animate-none h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
                <div className="text-xl font-bold text-neutral-600 dark:text-white">
                  {sponsor.name}
                </div>
              
              </div>
            </ThreeDCard>
          ))
        ) : (
          <p>No sponsors available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default SponsorsSection;
