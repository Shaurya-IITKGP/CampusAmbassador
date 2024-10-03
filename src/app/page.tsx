
import Footer from '../components/Footer.tsx';
import NewHome from '../components/NewHome.tsx'
import React from 'react'
import Incentives from '../app/incentives/page.tsx';
import About from '@/components/About.tsx';
import WhyCa from '@/components/WhyCa.tsx';
import FAQAccordion from '@/components/FAQccodion.tsx';

export default function Home() {
  return (
    <div>

    <div>
      <NewHome/>
      <About/>
      <WhyCa/>
      <div >
      <Incentives/>
      </div>
     
      <FAQAccordion/> 
      <Footer/>
    </div> 
   
    </div>
  
  
  );
}

