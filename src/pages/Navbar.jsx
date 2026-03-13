import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const linkClass = ({ isActive }) =>
    `cursor-pointer transition ${
      isActive
        ? "text-white border-b-2 border-red-600 pb-1"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-800 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <span className="text-white font-bold tracking-wide text-3xl">
              PURO
            </span>
            <span className="text-red-600 font-bold tracking-wide text-2xl">
              TECH.
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass} onClick={handleHomeClick}>
              Home
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </ul>

          <div className="hidden md:block">
            <NavLink to="/contact">
              <button className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-full text-white font-medium">
                Get in Touch
              </button>
            </NavLink>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            &#9776;
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full z-800 transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />

        <div className="absolute right-0 top-0 h-full w-[75%] max-w-sm bg-[#0b0b0b] border-l border-white/10 backdrop-blur-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <span className="text-white flex items-center gap-1 font-bold tracking-wide text-2xl">
              PURO
              <span className="text-red-600 font-bold tracking-wide text-xl">
                TECH.
              </span>
            </span>

            <button
              className="text-white text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              &#10005;
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-lg">
            <NavLink
              to="/"
              end
              className={linkClass}
              onClick={(event) => {
                handleHomeClick(event);
                setOpen(false);
              }}
            >
              Home
            </NavLink>
            <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={linkClass} onClick={() => setOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </ul>

          <div className="mt-auto">
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl text-white font-semibold">
                Get in Touch
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
