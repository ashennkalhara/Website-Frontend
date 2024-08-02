import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Dishes from './components/Dishes';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Services from './components/Services';


const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="dishes">
          <Dishes />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="services">
          <Services />
        </div>
        
        <Footer />

      </main>
    </div>
  );
}

export default App;
