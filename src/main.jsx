import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Banner from './banner';
import Section from './section';
import Content from './content';
import SectionContent from './content-section';
import Gallery from './gallery';
import Footer from './footer';
import CopyRight from './copyright';
import About from './pages/about';
import Services from './pages/services';
import CoreValues from './pages/core_values';
import GetInvolve from './pages/get_involved';
import './App.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <Section />
        <Content />
        <SectionContent />
        <Gallery />
      </>
    );
  }
}

class Layout extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/*<Route path="/home" element={<Home />} />*/}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/cores" element={<CoreValues/>} />
          <Route path="/involve" element={<GetInvolve/>} />
        </Routes>
        <Footer />
        <CopyRight />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Raphaella">
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);