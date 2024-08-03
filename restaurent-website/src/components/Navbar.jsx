// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { BiRestaurant } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import Button from '../layouts/Button';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { toggleCartVisibility } = useContext(CartContext);
  const [menu, setMenu] = React.useState(false);

  const handleChange = () => {
    setMenu(!menu);
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
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
            Home
          </Link>

          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
            About
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1">
              <Link to="dishes" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
                Meals
              </Link>
              <BiChevronDown className="cursor-pointer" size={25} />
            </div>

            <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
              <li>
                <Link to="dishes" spy={true} smooth={true} duration={500} className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="dishes" spy={true} smooth={true} duration={500} className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                  Lunch
                </Link>
              </li>
              <li>
                <Link to="dishes" spy={true} smooth={true} duration={500} className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                  Dinner
                </Link>
              </li>
            </ul>
          </div>

          <Link to="menu" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
            Menu
          </Link>

          <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">
            Services
          </Link>

          <button onClick={toggleCartVisibility} className="flex items-center gap-2 text-lg font-medium hover:text-brightColor transition-all cursor-pointer">
            <FaShoppingCart size={24} /> {/* Cart icon */}
          </button>

          <Button title="Login" />
        </nav>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      <div className={`${menu ? 'translate-x-0' : '-translate-x-full'} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={handleChange}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={handleChange}>
          About
        </Link>
        <Link to="dishes" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={handleChange}>
          Dishes
        </Link>
        <Link to="menu" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={handleChange}>
          Menu
        </Link>
        <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer" onClick={handleChange}>
          Services
        </Link>
        <button onClick={toggleCartVisibility} className="text-lg font-medium hover:text-brightColor transition-all cursor-pointer">
          <FaShoppingCart size={24} /> {/* Cart icon */}
        </button>
        <Button title="Login" />
      </div>
    </div>
  );
};

export default Navbar;
