
import Footer from '../components/Footer.tsx';
import NewHome from '../components/NewHome.tsx'
import React from 'react'
import Incentives from '../app/incentives/page.tsx';
import About from '@/components/About.tsx';

export default function Home() {
  return (
    <div>

    <div>
      <NewHome/>
      <div >
      <Incentives/>
      </div>
      <About/>
      <Footer/>
    </div> 
   
    </div>
  
  
  );
}

