import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [offers, setOffers] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://localhost:3000";
        const [countriesRes, offersRes] = await Promise.all([
          axios.get(`${apiUrl}/api/countries`),
          axios.get(`${apiUrl}/api/offers`),
        ]);

        setCountries(countriesRes.data);
        setOffers(offersRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCountries([]);
        setOffers([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setActiveDropdown(null);
    setTimeout(() => {
      navigate(path, { replace: true });
    }, 100);
  };

  return (
<nav className="bg-white/40 self-center backdrop-blur-lg border border-white/60 shadow-lg rounded-full top-2 absolute w-[80%] z-50">
<div className="max-w-10xl mx-auto px-0 sm:px-6">
        <div className="flex justify-between items-center h-12">
          <Link to="/" onClick={() => handleNavigation("/")}>
            <img
              src={logo}
              alt="Apollo Expeditions Logo"
              className="h-48 w-auto object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md Third"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-xl custom-font tracking-wider justify-between gap-6 px-6">
            <Link to="/" className="First1">
              Home
            </Link>

            {/* Offers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("offers")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="First1 flex items-center cursor-pointer">
                Offers & Packages
                <svg
                  className="ml-1 w-4 h-4 transform transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {activeDropdown === "offers" && (
                <div className="absolute bg_Third shadow-md -translate-x-20 rounded-md left-0 w-80">
                  {offers.length > 0 ? (
                    offers.map((offer) => (
                      <Link
                        key={offer._id}
                        to={`/offers/${offer.slug}`}
                        className="block px-4 py-1 First1 text-center"
                        onClick={() => handleNavigation(`/offers/${offer.slug}`)}
                      >
                        {offer.name}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-2 First1">No Offers</p>
                  )}
                </div>
              )}
            </div>

            <Link to="/vlogs" className="First1">
              Our Vlogs
            </Link>

            {/* Travel Guide Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("countries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="First1 flex items-center cursor-pointer">
                Travel Guide
                <svg
                  className="ml-1 w-4 h-4 transform transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {activeDropdown === "countries" && (
                <div className="absolute bg_Third shadow-md -translate-x-5 rounded-md w-52 left-0">
                  {countries.length > 0 ? (
                    countries.map((country) => (
                      <Link
                        key={country.slug}
                        to={`/encyclopedia/${country.slug}`}
                        className="block px-4 py-1 First1 text-center"
                        onClick={() =>
                          handleNavigation(`/encyclopedia/${country.slug}`)
                        }
                      >
                        {country.name}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-2 First">No Countries</p>
                  )}
                </div>
              )}
            </div>

            <Link to="/contact" className="First1">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg_Third">
            <Link
              to="/"
              className="block First px-3 py-2 hover:bg_Second"
            >
              Home
            </Link>
            <Link
              to="/offers"
              className="block First px-3 py-2 hover:bg_Second"
            >
              Offers & Packages
            </Link>
            <Link
              to="/vlogs"
              className="block First px-3 py-2 hover:bg_Second"
            >
              Our Vlogs
            </Link>
            <Link
              to="/contact"
              className="block First px-3 py-2 hover:bg_Second"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
