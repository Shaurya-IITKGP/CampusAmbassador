import Head from "next/head";
import MainPage from "@/components/MainPage";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
    </>
  );
}
