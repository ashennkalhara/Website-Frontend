import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BiRestaurant } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';
import Button from '../layouts/Button';
import AuthPopup from './AuthPopup';

const Navbar = () => {
  const { cart, toggleCartVisibility } = useContext(CartContext);
  const [menu, setMenu] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
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
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="fixed w-full z-50">
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

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              🔍
            </button>
          </form>

          <button
            onClick={toggleCartVisibility}
            className="relative flex items-center gap-2 text-lg font-medium hover:text-brightColor transition-all cursor-pointer"
          >
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {cart.length}
              </span>
            )}
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
          className="relative text-lg font-medium hover:text-brightColor transition-all cursor-pointer"
        >
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
              {cart.length}
            </span>
          )}
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
