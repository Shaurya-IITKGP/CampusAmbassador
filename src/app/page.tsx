import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically imported components
const Footer = dynamic(() => import('../components/Footer.tsx'));
const NewHome = dynamic(() => import('../components/NewHome.tsx'));
const IncentivesOfCa = dynamic(() => import('../components/Incentives.tsx'));
const About = dynamic(() => import('@/components/About.tsx'));
const WhyCa = dynamic(() => import('@/components/WhyCa.tsx'));
const ResponsibilitiesOfCa = dynamic(() => import('../components/Responsibilities.tsx'));
const FAQAccordion = dynamic(() => import('@/components/FAQccodion.tsx'));

export default function Home() {
  return (
    <div>
      <div>
        <NewHome /> {/* Dynamically loaded */}
        <About /> {/* Dynamically loaded */}
        <WhyCa /> {/* Dynamically loaded */}
        <ResponsibilitiesOfCa /> {/* Dynamically loaded */}
        <div>
          <IncentivesOfCa /> {/* Dynamically loaded */}
        </div>
        <FAQAccordion /> {/* Dynamically loaded */}
        <Footer /> {/* Dynamically loaded */}
      </div>
    </div>
  );
}
