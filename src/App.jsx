import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './banner';
import Section from './section';
import Content from './content';
import SectionContent from './content-section';
import Gallery from './gallery';
import Footer from './footer';
import CopyRight from './copyright';
import About from './pages/about';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section />
                <Content />
                <SectionContent />
                <Gallery/>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <CopyRight />
      </>
    );
  }
}

export default App;