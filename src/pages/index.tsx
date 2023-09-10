import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/views/About";
import Banner from "@/views/Banner";
import SpeedDialWithTextOutside from "@/views/SpeedDial";
import WhatWeDo from "@/views/WhatWeDo";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <Banner />
      <About />
      <WhatWeDo />
      <SpeedDialWithTextOutside />
      <Footer />
    </div>
  );
}
