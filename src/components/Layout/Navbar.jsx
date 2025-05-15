import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import AuthNav from "../../contexts/AuthNav";
import {
  Sun,
  Moon,
  Menu,
  X,
  Bell,
  Car,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [carsDropdown, setCarsDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  // Handle scroll for mobile menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && isMenuOpen) {
        setIsMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  // Dropdown handlers with delay
  const handleDropdownEnter = (dropdownType) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    if (dropdownType === "Services") {
      setServicesDropdown(true);
    } else if (dropdownType === "Cars") {
      setCarsDropdown(true);
    }
  };

  const handleDropdownLeave = (dropdownType) => {
    const timeout = setTimeout(() => {
      if (dropdownType === "Services") {
        setServicesDropdown(false);
      } else if (dropdownType === "Cars") {
        setCarsDropdown(false);
      }
    }, 200); // 200ms delay
    setDropdownTimeout(timeout);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      items: [
        { name: "Find Mechanic", path: "/mechanics", icon: "Wrench" },
        { name: "Tow Truck", path: "/tow-truck", icon: "Truck" },
        { name: "Car Inspection", path: "/inspection", icon: "Search" },
      ],
    },
    {
      name: "Cars",
      items: [
        { name: "Spare Parts", path: "/spare-parts", icon: "Tool" },
        { name: "Used Cars", path: "/used-cars", icon: "Car" },
        { name: "Car Information", path: "/car-information", icon: "Info" },
        {
          name: "Showroom Directory",
          path: "/showroom-directory",
          icon: "Map",
        },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      } shadow-md transition-colors duration-300`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car size={24} className="text-blue-600" />
            <span className="font-bold text-xl">CarService</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
              link.items ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(link.name)}
                  onMouseLeave={() => handleDropdownLeave(link.name)}
                >
                  <button
                    className={`flex items-center space-x-1 group ${
                      isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    } transition-colors duration-200`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className="transform group-hover:rotate-180 transition-transform duration-200"
                    />
                  </button>
                  {/* Dropdown Menu */}
                  {((link.name === "Services" && servicesDropdown) ||
                    (link.name === "Cars" && carsDropdown)) && (
                    <div
                      className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      } ring-1 ring-black ring-opacity-5 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out`}
                    >
                      <div className="py-1" role="menu">
                        {link.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-4 py-3 text-sm ${
                              isDarkMode
                                ? "text-gray-300 hover:bg-gray-600"
                                : "text-gray-700 hover:bg-gray-100"
                            } hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2`}
                            role="menuitem"
                          >
                            <ChevronRight
                              size={16}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-blue-600 font-medium"
                      : `${
                          isDarkMode
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        }`
                  } transition-colors duration-200 hover:text-blue-600`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-all duration-200 hover:scale-110`}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Notifications */}
            <button
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-all duration-200 hover:scale-110`}
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>

            {/* Auth Navigation */}
            <AuthNav />

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`fixed inset-y-0 right-0 max-w-xs w-full ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-6">
                {navLinks.map((link) =>
                  link.items ? (
                    <div key={link.name} className="space-y-2">
                      <div className="text-lg font-medium">{link.name}</div>
                      <div className="ml-4 space-y-2">
                        {link.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block py-2 ${
                              location.pathname === item.path
                                ? "text-blue-600"
                                : `${
                                    isDarkMode
                                      ? "text-gray-300 hover:text-white"
                                      : "text-gray-600 hover:text-gray-900"
                                  }`
                            } transition-colors duration-200 hover:translate-x-2 transform`}
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block text-lg ${
                        location.pathname === link.path
                          ? "text-blue-600 font-medium"
                          : `${
                              isDarkMode
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            }`
                      } transition-colors duration-200`}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile Auth Navigation */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="py-3">
                  <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-3">Account</h3>
                  <AuthNav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;