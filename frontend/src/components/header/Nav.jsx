
// import React, { useState, useEffect } from "react";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import Logo from "./Logo";
// import { NavLink } from "react-router-dom";
// import Rotate from "./Rotate";
// const Nav = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   useEffect(() => {
//     if (toggleMenu) {
//       document.body.style.overflow = "hidden";
//       document.body.classList.add("blurred");
//     } else {
//       document.body.style.overflow = "auto";
//       document.body.classList.remove("blurred");
//     }
//   }, [toggleMenu]);
//   return (
//     <>
//       <div className="flex justify-between items-center w-full px-4 md:px-10 bg-white shadow-md">
//         <div>
//           <NavLink to="/" className="flex gap-1 items-center justify-center">
//             <Rotate />
//             <div className="w-32 h-14 md:w-40 md:h-14 flex items-center">
//               <Logo />
//             </div>
//           </NavLink>
//         </div>
//         {/* primary */}
//         <div className="hidden lg:flex gap-4 text-md font-base text-shfPurple font-inter">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-shfPurple font-semibold" : ""
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-shfPurple font-semibold" : ""
//             }
//           >
//             About us
//           </NavLink>
//           <NavLink
//             to="/events"
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-shfPurple font-semibold" : ""
//             }
//           >
//             Events
//           </NavLink>
//           <NavLink
//             to="/gallery"
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-shfPurple font-semibold" : ""
//             }
//           >
//             Gallery
//           </NavLink>
//           <NavLink
//             to="/contactus"
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-shfPurple font-semibold" : ""
//             }
//           >
//             Contact Us
//           </NavLink>
//           <NavLink
//             to="/workwithus"
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-shfPurple font-semibold" : ""
//             }
//           >
//             Work With Us
//           </NavLink>
//           <NavLink
//             to="/journey-so-far"
//             className={({ isActive }) =>
//               isActive ? "border-b-2 border-shfPurple font-semibold" : ""
//             }
//           >
//             Journey So Far
//           </NavLink>
//         </div>

//         {/* secondary */}
//         <div className="flex">
//           <div className="hidden md:flex items-center text-sm">
//             <div>
//               <NavLink to="/donate">
//                 <button className="bg-shfOrange hover:bg-shfPurple transition duration-300 text-white font-inter px-6 py-2 font-semibold rounded-full">
//                   Donate Now
//                 </button>
//               </NavLink>
//             </div>
//           </div>

//           {/* Mobile navigation toggle */}
//           <div className="lg:hidden flex items-center ml-8">
//             <button onClick={() => setToggleMenu(!toggleMenu)}>
//               <Bars3Icon className="h-8" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* mobile navigation */}
//       <div
//         className={`inset-0 top-0 fixed bg-shfPurple overflow-hidden flex flex-col items-center justify-center lg:hidden gap-12 transition-transform duration-300 ${toggleMenu ? "translate-y-0" : "-translate-y-full"
//           }`}
//       >
//         <div className="px-8 py-8 flex items-start text-xl">
//           <div className="flex flex-col gap-8 font-semi bold tracking-wider text-white text-center">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               About us
//             </NavLink>
//             <NavLink
//               to="/events"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               Events
//             </NavLink>
//             <NavLink
//               to="/gallery"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               Gallery
//             </NavLink>
//             <NavLink
//               to="/contactus"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               Contact Us
//             </NavLink>
//             <NavLink
//               to="/workwithus"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               Work With Us
//             </NavLink>
//             <NavLink
//               to="/workwithus"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               Work With Us
//             </NavLink>
//             <NavLink
//               to="/donate"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-transparent py-1 px-2 border-2 border-white rounded-full"
//                   : ""
//               }
//               onClick={() => setToggleMenu(false)}
//             >
//               Donate Us
//             </NavLink>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Nav


import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Rotate from "./Rotate";
import "./Nav.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [activeMobileItem, setActiveMobileItem] = useState(null);

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleMenu]);

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubDropdown(null);
  };

  const handleSubDropdown = (index) => {
    setActiveSubDropdown(activeSubDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      activeDropdown !== null &&
      !event.target.closest(".dropdown-container")
    ) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDropdown]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about-us",
      dropdown: [
        { name: "About Us", path: "/about-us" },
        { name: "Journey So Far", path: "/about/journey-so-far" },
      ],
    },
    {
      name: "Events",
      path: "/events",
      dropdown: [
        { name: "Events", path: "/events" },
        { name: "Awards", path: "/events/awards" },
      ],
    },
    { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contactus" },
    {
      name: "Work With Us",
      path: "/workwithus",
      dropdown: [
        {
          name: "Scottish Hindu Addendum",
          path: "/workwithus/scottish-hindu-addendum",
        },
        {
          name: "Hinduphobia And Hate Crime Legislation",
          path: "/workwithus/hinduphobia-legislation",
        },
      ],
    },
    {
      name: "Scottish Hindu Youth Foundation",
      path: "/shyf",
      dropdown: [
        {
          name: "College",
          path: "/shyf/college",
          subDropdown: [
            { name: "Yoga Clubs", path: "/shyf/college/yoga-clubs" },
            { name: "Fundraising", path: "/shyf/college/fundraising" },
            { name: "Career Workshops", path: "/shyf/college/career-workshops" },
            {
              name: "Internship With SHF",
              path: "/shyf/college/internship-with-shf",
            },
            {
              name: "University And Beyond",
              path: "/shyf/college/university-and-beyond",
            },
          ],
        },
        {
          name: "University",
          path: "/shyf/university",
          subDropdown: [
            {
              name: "National Hindu Student Forum In Scotland",
              path: "/shyf/university/national-hindu-student-forum",
            },
            {
              name: "National And International Conferences",
              path: "/shyf/university/conferences",
            },
            {
              name: "Entrepreneurship, Industry And Beyond",
              path: "/shyf/university/entrepreneurship",
            },
          ],
        },
        {
          name: "Media",
          path: "/shyf/media",
          subDropdown: [
            { name: "Blog", path: "/shyf/media/blog" },
            { name: "Publications", path: "/shyf/media/publications" },
            { name: "Visit Local Mandir", path: "/shyf/media/visit-local-mandir" },
            { name: "Press Release", path: "/shyf/media/press-release" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center w-full px-4 md:px-10 bg-white shadow-md space-x-8">
        <div>
          <NavLink to="/" className="flex gap-1 items-center justify-center">
            <Rotate />
            <div className="w-32 h-14 md:w-40 md:h-14 flex items-center">
              <Logo />
            </div>
          </NavLink>
        </div>
        <div className="hidden lg:flex justify-between items-center flex-1 ml-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group dropdown-container">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center ${isActive
                    ? "border-b-2 border-shfPurple font-semibold"
                    : ""
                  } text-shfPurple hover:text-shfOrange transition-colors duration-300`
                }
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDownIcon
                    className="h-4 w-4 ml-1 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdown(index);
                    }}
                  />
                )}
              </NavLink>
              {item.dropdown && (
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white shadow-lg rounded-md ${activeDropdown === index ? "block" : "hidden"
                    }`}
                  style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)" }}
                >
                  <div
                    className="py-2"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <div key={subIndex} className="dropdown-item">
                        {subItem.subDropdown ? (
                          <button
                            onClick={() => handleSubDropdown(subIndex)}
                            className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 ${activeSubDropdown === subIndex
                              ? "bg-shfOrange text-white"
                              : "text-black hover:text-shfOrange"
                              }`}
                          >
                            <span className="font-bold text-lg mr-2">
                              {activeSubDropdown !== subIndex ? "»" : ""}
                            </span>
                            {subItem.name}
                          </button>
                        ) : (
                          <NavLink
                            to={subItem.path}
                            className={`block w-full text-left px-4 py-2 text-sm transition-all duration-300 text-black hover:text-shfOrange`}
                            onClick={() => setToggleMenu(false)}
                          >
                            <span className="font-bold text-lg mr-2">»</span>
                            {subItem.name}
                          </NavLink>
                        )}
                        {subItem.subDropdown &&
                          activeSubDropdown === subIndex && (
                            <div className="pl-6 bg-white">
                              {subItem.subDropdown.map(
                                (subSubItem, subSubIndex) => (
                                  <NavLink
                                    key={subSubIndex}
                                    to={subSubItem.path}
                                    className="block px-4 py-2 text-sm text-black hover:text-shfOrange transition-all duration-300"
                                    onClick={() => setToggleMenu(false)}
                                  >
                                    • {subSubItem.name}
                                  </NavLink>
                                )
                              )}
                            </div>
                          )}
                        {item.name !== "Scottish Hindu Youth Foundation" && subIndex !== item.dropdown.length - 1 && (
                          <hr className="my-1 border-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Donate Now Button for Desktop */}
        <div className="ml-auto">
          <NavLink to="/donate">
            <button className="bg-shfOrange hover:bg-white hover:text-shfOrange transition duration-300 text-white font-inter px-6 py-2 font-semibold rounded-full">
              Donate Now
            </button>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center w-full px-4 md:px-10 bg-white shadow-md">
        <div>
          <NavLink to="/" className="flex gap-1 items-center justify-center">
            <Rotate />
            <div className="w-32 h-14 md:w-40 md:h-14 flex items-center">
              <Logo />
            </div>
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <XMarkIcon className="h-6 w-6 text-black" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="lg:hidden fixed inset-0 bg-shfPurple z-50 overflow-y-auto">
          <div className="flex flex-col items-center justify-center min-h-screen py-8">
            {navItems.map((item, index) => (
              <div key={index} className="w-full text-center">
                {item.dropdown ? (
                  <button
                    className={`w-4/5 mx-auto py-3 text-xl font-medium text-white flex items-center justify-center ${activeMobileItem === index
                      ? "bg-white bg-opacity-10 rounded-full"
                      : ""
                      }`}
                    onClick={() => setActiveMobileItem(activeMobileItem === index ? null : index)}
                  >
                    {item.name}
                    {activeMobileItem === index ? (
                      <ChevronUpIcon className="h-5 w-5 ml-2" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 ml-2" />
                    )}
                  </button>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block w-4/5 mx-auto py-3 text-xl font-medium text-white ${isActive ? "bg-white bg-opacity-10 rounded-full" : ""
                      }`
                    }
                    onClick={() => setToggleMenu(false)}
                  >
                    {item.name}
                  </NavLink>
                )}
                {item.dropdown && activeMobileItem === index && (
                  <div className="bg-white bg-opacity-10 mt-2 w-4/5 mx-auto rounded-lg">
                    {item.dropdown.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        {subItem.subDropdown ? (
                          <button
                            className="w-full py-2 text-lg text-white flex items-center justify-center"
                            onClick={() => handleSubDropdown(subIndex)}
                          >
                            {subItem.name}
                            {activeSubDropdown === subIndex ? (
                              <ChevronUpIcon className="h-4 w-4 ml-2" />
                            ) : (
                              <ChevronDownIcon className="h-4 w-4 ml-2" />
                            )}
                          </button>
                        ) : (
                          <NavLink
                            to={subItem.path}
                            className="block w-full py-2 text-lg text-white"
                            onClick={() => setToggleMenu(false)}
                          >
                            {subItem.name}
                          </NavLink>
                        )}
                        {subItem.subDropdown && activeSubDropdown === subIndex && (
                          <div className="bg-white bg-opacity-20">
                            {subItem.subDropdown.map((subSubItem, subSubIndex) => (
                              <NavLink
                                key={subSubIndex}
                                to={subSubItem.path}
                                className="block w-full py-2 text-base text-white"
                                onClick={() => setToggleMenu(false)}
                              >
                                {subSubItem.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <NavLink
              to="/donate"
              className="block w-4/5 mx-auto py-3 text-xl font-medium text-white text-center"
              onClick={() => setToggleMenu(false)}
            >
              Donate Us
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;