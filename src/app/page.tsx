
import Footer from '../components/Footer.tsx';
import NewHome from '../components/NewHome.tsx'
import React from 'react'
import Incentives from '../components/Incentives.tsx';
import About from '@/components/About.tsx';
import WhyCa from '@/components/WhyCa.tsx';
import Responsibilities from '../components/Responsibilities.tsx';
import FAQAccordion from '@/components/FAQccodion.tsx';

export default function Home() {
  return (
    <div>

    <div>
      <NewHome/>
      <About/>
      <WhyCa/>
      <Responsibilities/>
      <div >
      <Incentives/>
      </div>
     
     <FAQAccordion/>
     
      <Footer/>
    </div> 
   
    </div>
  
  
  );
}

