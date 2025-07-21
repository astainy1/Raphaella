import React from 'react';
import Banner from '../banner';
import Section from '../section';
import Content from '../content'; // ✅ corrected the import name
import SectionContent from '../content-section';
import Gallery from '../gallery';
import Footer from '../footer';
import CopyRight from '../copyright';

class Home extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <Section />
        <Content />
        <SectionContent />
        <Gallery />
        <Footer />
        <CopyRight />
      </>
    );
  }
}

export default Home;
