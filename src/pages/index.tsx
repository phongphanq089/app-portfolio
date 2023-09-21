import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import About from "@/views/About";
import Banner from "@/views/Banner";
import SpeedDialWithTextOutside from "@/views/SpeedDial";
import WhatWeDo from "@/views/WhatWeDo";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <WhatWeDo />
      <SpeedDialWithTextOutside />
    </Layout>
  );
}
