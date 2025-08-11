import React from "react";
import Banner from "../banner";
import Section from "../section";
import Content from "../content"; // ✅ corrected the import name
import SectionContent from "../content-section";
import Gallery from "../gallery";
import Support from "./components/Support";
import Footer from "../footer";
import CopyRight from "../copyright";


const Home = () => {
 
    return (
      <>
        <Banner />
        <Section />
        <Content />
        <SectionContent />
        <Gallery />
        <Support />
        <Footer />
        <CopyRight />
      </>
    );
  }
}

export default Home;
