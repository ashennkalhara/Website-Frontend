import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BiRestaurant } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../layouts/Button';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';
import AuthPopup from './AuthPopup';

const Navbar = () => {
  const { toggleCartVisibility } = useContext(CartContext);
  const [menu, setMenu] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is already logged in by checking localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleOpenAuthPopup = () => {
    setIsAuthPopupOpen(true);
  };

  const handleCloseAuthPopup = () => {
    setIsAuthPopupOpen(false);
  };

  const handleLogout = () => {
    // Clear user state and remove from localStorage
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="fixed w-full">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <span>
            <BiRestaurant size={32} />
          </span>
          <h1 className="text-xl font-semibold">The Heritage Grill</h1>
        </div>

        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </Link>

          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Menu
          </Link>

          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Offers
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Services
          </Link>

          <Link
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Gallery
          </Link>

          <button
            onClick={toggleCartVisibility}
            className="flex items-center gap-2 text-lg font-medium hover:text-brightColor transition-all cursor-pointer"
          >
            <FaShoppingCart size={24} />
          </button>

          {user ? (
            <>
              <span className="text-lg font-medium text-orange-500">Hi, {user.name}</span>
              <Button title="Logout" onClick={handleLogout} />
            </>
          ) : (
            <Button title="Login" onClick={handleOpenAuthPopup} />
          )}
        </nav>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      <div
        className={`${
          menu ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={handleChange}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={handleChange}
        >
          About
        </Link>
        <Link
          to="dishes"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={handleChange}
        >
          Dishes
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={handleChange}
        >
          Menu
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={handleChange}
        >
          Services
        </Link>
        <Link
          to="gallery"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={handleChange}
        >
          Gallery
        </Link>
        <button
          onClick={toggleCartVisibility}
          className="text-lg font-medium hover:text-brightColor transition-all cursor-pointer"
        >
          <FaShoppingCart size={24} />
        </button>
        {user ? (
          <>
            <span className="text-lg font-medium text-orange-500">Hi, {user.name}</span>
            <Button title="Logout" onClick={handleLogout} />
          </>
        ) : (
          <Button title="Login" onClick={handleOpenAuthPopup} />
        )}
      </div>

      <AuthPopup isOpen={isAuthPopupOpen} onClose={handleCloseAuthPopup} setUser={setUser} />
    </div>
  );
};

export default Navbar;
