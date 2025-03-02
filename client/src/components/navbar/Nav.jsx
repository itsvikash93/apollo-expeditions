import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";


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
        const [countriesRes, offersRes] = await Promise.all([
          axios.get(`/api/countries`),
          axios.get(`/api/offers`),
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
                <GiHamburgerMenu />
              ) : (

                <ImCross />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-md font-semibold justify-between gap-6 px-6">
            <Link to="/" className=" hover:text-gray-500">
              Home
            </Link>

            {/* Offers Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("offers")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className=" flex items-center cursor-pointer hover:text-gray-500">
                Packages & Offers
                <MdKeyboardArrowDown className="text-xl mt-1" />
              </span>

              {activeDropdown === "offers" && (
                <div className="absolute bg_Third shadow-md -translate-x-20 rounded-md left-0 w-64">
                  {offers.length > 0 ? (
                    offers.map((offer) => (
                      <Link
                        key={offer._id}
                        to={`/offers/${offer.slug}`}
                        className="block px-4 py-1 mt-1 text-center hover:text-gray-500"
                        onClick={() =>
                          handleNavigation(`/offers/${offer.slug}`)
                        }
                      >
                        {offer.name}

                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-2  hover:text-gray-500">No Offers</p>
                  )}
                </div>
              )}
            </div>

            <Link to="/vlogs" className="hover:text-gray-500">
              Our Vlogs
            </Link>

            {/* Travel Guide Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("countries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className=" flex items-center cursor-pointer hover:text-gray-500">
                Travel Guide
                <MdKeyboardArrowDown className="text-xl mt-1" />
              </span>

              {activeDropdown === "countries" && (
                <div className="absolute bg_Third shadow-md -translate-x-5 rounded-md w-52 left-0">
                  {countries.length > 0 ? (
                    countries.map((country) => (
                      <Link
                        key={country.slug}
                        to={`/encyclopedia/${country.slug}`}
                        className="block px-4 py-1  text-center hover:text-gray-500"
                        onClick={() =>
                          handleNavigation(`/encyclopedia/${country.slug}`)
                        }
                      >
                        {country.name}
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 py-2 hover:text-gray-500">No Countries</p>
                  )}
                </div>
              )}
            </div>

            <Link to="/contact" className="hover:text-gray-600">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
