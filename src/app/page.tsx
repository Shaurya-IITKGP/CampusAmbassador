"use client";
import MainPage from "@/components/MainPage";
import ronnyImage from "../assets/ronny.jpg";
import Image from "next/image";
import About from "@/components/About";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <MainPage />
          <About />
        </div>
      )}
    </>
  );
}
