import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import './App.css';


let bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
                  };

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: bgColors.Yellow}}>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
