import React from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import About from "../About";
import Dishes from '../Dishes';
import Menu from "../Menu";
import Footer from "../Footer";
import Services from '../Services';
import Cart from "../Cart";
import Gallery from '../Gallery';
import QuerySection from '../QuerySection';
import { CartProvider } from '../../contexts/CartContext';

const Home = () => {
    return (
        <CartProvider>
            <Navbar />
            <main>
                <div id="hero">
                    <Hero />
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
                <div id="gallery">
                    <Gallery />
                </div>

                <QuerySection /> {}

                <Footer />
            </main>
            <Cart /> {}
        </CartProvider>
    )
}

export default Home