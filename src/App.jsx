import React from 'react';
import $ from 'jquery'
import NavBar from './nav'
import Banner from './banner'
import Section from './section'
import Content from './content'
import SectionContent from './content-section'
import './App.css'

class App  extends React.Component{

  render(){

    return(

      <>
      <NavBar/>
      <Banner/>
      <Section/>
      <Content/>
      <SectionContent/>
      </>

      )
  }
}

export default App
