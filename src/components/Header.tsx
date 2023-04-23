// components/Header.js
import React from "react";
import { Link as Link } from "react-scroll";

const listItemStyle =
  "transition duration-200 ease-in-out text-white cursor-pointer active:text-blue-500 hover:bg-blue-500 py-2 px-4 rounded inline-block";

const Header = () => {
  return (
    <header className="bg-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={listItemStyle}
                >
                  Startup Logo
                </Link>
          </div>
          <nav className="">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={listItemStyle}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={listItemStyle}
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={listItemStyle}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={listItemStyle}
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={listItemStyle}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
