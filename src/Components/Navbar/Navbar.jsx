import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="p-4 md:py-6 md:p-4 container mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/" className="w-44 h-12 sm:w-72 sm:h-24 ">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="hidden lg:flex items-center text-base text-center gap-6">
          <Link className="hover:text-[#ff6730] transition" to="/">
            Inicio
          </Link>
          <Link className="hover:text-[#ff6730] transition" to="/Vision">
            Nuestra Visión
          </Link>
          <Link className="hover:text-[#ff6730] transition" to="/Blogs">
            Relatos
          </Link>
          <div className="relative group z-10">
            <button
              className="hover:text-[#ff6730] transition focus:outline-none"
              onMouseEnter={handleSubMenuToggle}
            >
              Recursos
            </button>
            {isSubMenuOpen && (
              <motion.div
                className="absolute right-0 left-0  p-2 bg-white rounded-lg shadow-lg  w-[7rem]"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                onMouseLeave={handleSubMenuToggle}
              >
                <Link
                  className="block hover:text-[#ff6730] transition "
                  to="/Infografia"
                >
                  Infografía 1
                </Link>
              </motion.div>
            )}
          </div>
          <Link className="hover:text-[#ff6730] transition" to="/TuVision">
            Tu visión
          </Link>
        </div>
        <div className="lg:hidden ">
          <button
            className="text-[#ff6730] p-2 focus:outline-none"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden mt-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link className="block hover:text-[#ff6730] transition" to="/" >
              Inicio
            </Link>
            <Link
              className="block hover:text-[#ff6730] transition"
              to="/Vision"
            >
              Nuestra Visión
            </Link>
            <Link className="block hover:text-[#ff6730] transition" to="/Blogs">
              Relatos
            </Link>
            <div
              className="relative group z-10"
              onMouseEnter={handleSubMenuToggle}
              onMouseLeave={handleSubMenuToggle}
            >
              <button className="hover:text-[#ff6730] transition focus:outline-none ">
                Recursos
              </button>
              {isSubMenuOpen && (
                <motion.div
                  className="absolute right-0 left-0 mt-2 p-2 bg-white rounded-lg shadow-lg w-32"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={handleSubMenuToggle}
                  onMouseLeave={handleSubMenuToggle}
                >
                  <Link
                    className="block hover:text-[#ff6730] transition"
                    to="/Infografia"
                  >
                    Infografía 1
                  </Link>
                </motion.div>
              )}
            </div>
            <Link className="block hover:text-[#ff6730] transition" to="/TuVision">
              Tu visión
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
