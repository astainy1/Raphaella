import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import {DotLoader} from "react-spinners/DotLoader";
import {BounceLoader} from "react-spinners"

import Banner from "./banner";
import Section from "./section";
import Content from "./content";
import SectionContent from "./content-section";
import Gallery from "./gallery";
import Footer from "./footer";
import CopyRight from "./copyright";

import About from "./pages/about";
import Services from "./pages/services";
import CoreValues from "./pages/core_values";
import GetInvolve from "./pages/get_involved";

import "./App.css";

// Our Spinner component
function Loader({ fadeOut }) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-[100] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <BounceLoader
        color="#024a71"
        size={70}
        loading={true}
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "024a71",
        }}
      />
    </div>
  );
}


function Layout() {
  const location = useLocation(); // to detect route change
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initial Start loader on route change
    setLoading(true);
    setFadeOut(false);

    const timer = setTimeout(() => setFadeOut(true), 2000);
    const removeLoader = setTimeout(() => setLoading(false), 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeLoader);
    };
  }, [location]); // Re-run spinner on every route that will change

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      <Banner />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cores" element={<CoreValues />} />
        <Route path="/involve" element={<GetInvolve />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  );
}

function Home() {
  return (
    <>
      <Section />
      <Content />
      <SectionContent />
      <Gallery />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Raphaella">
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);
