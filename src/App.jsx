import React from 'react';
import Banner from './banner';
import Section from './section';
import Content from './content';
import Gallery from './gallery';
import Footer from './footer';
import CopyRight from './copyright';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Section/>
        <Content/>
        <Gallery/>
        <Footer/>
        <CopyRight/>
      </div>
    );
  }
}

export default App;