import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ scroll, ref }) => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const Menu = ["Home", "About", "Skill", "Projects", "Contact"];

  // Function to handle menu item clicks
  const handleMenuItemClick = (item) => {
    setActive(item); // Update active state
    setShowMenu(false); // Close mobile menu

    // Scroll to the corresponding section
    switch (item) {
      case "Home":
        scroll(ref.homeRef);
        break;
      case "About":
        scroll(ref.aboutRef);
        break;
      case "Skill":
        scroll(ref.skillRef);
        break;
      case "Projects":
        scroll(ref.projectsRef);
        break;
      case "Contact":
        scroll(ref.contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="container rounded-xl fixed top-3 w-full z-1 backdrop-blur-lg bg-white/20 text-white text-[20px] font-medium p-4">
        <div className="main flex items-center justify-between px-4 md:px-10">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-[25px]">
              <a href="/">Zia Sial.</a>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex gap-[40px] cursor-pointer nav-item">
            {Menu.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${active === item ? "active" : ""}`}
                onClick={() => handleMenuItemClick(item)} // Call handleMenuItemClick
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden cursor-pointer text-3xl" onClick={() => setShowMenu(!showMenu)}>
            <GiHamburgerMenu />
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <ul className="flex flex-col md:hidden gap-4 cursor-pointer nav-item p-5">
            {Menu.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${active === item ? "active" : ""}`}
                onClick={() => handleMenuItemClick(item)} // Call handleMenuItemClick
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;