import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Dishes from './components/Dishes';
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Services from './components/Services';
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
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

      <Cart /> {/* Ensure Cart is included here */}
    </CartProvider>
  );
}

export default App;
