import React from 'react'
import Header from "./Header"
import Slide from "./Slide"
import Section from "./Section"
import Footer from "./Footer"
import News from "./News"
import '../styles/global.css';

function App() {
  return (
    <div>
        <Header/>
        <Slide/>
        <Section/>
        <News/>
        <Footer/>
    </div>
  );
}

export default App;
