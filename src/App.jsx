import React, { useEffect } from "react";
import Banner from "./banner";
import Section from "./section";
import Content from "./content";
import Gallery from "./gallery";
import Footer from "./footer";
import CopyRight from "./copyright";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <Banner />
      <Section />
      <Content />
      <Gallery />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
