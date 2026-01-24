import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-red-500 font-bold text-xl">
            <span className="w-8 h-8 rounded-md bg-red-600 flex items-center justify-center text-white">S</span>
            Stygar
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Portfolio</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-full text-white font-medium">
              Get in Touch
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Side Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-50 transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        ></div>

        {/* Side Drawer */}
        <div className="absolute right-0 top-0 h-full w-[75%] max-w-sm bg-[#0b0b0b] border-l border-white/10 backdrop-blur-xl p-6 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-10">
            <div className="text-red-500 font-bold text-lg">Stygar</div>
            <button
              className="text-white text-2xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Mobile Menu */}
          <ul className="flex flex-col gap-6 text-gray-300 text-lg">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">Services</li>
            <li className="hover:text-white">Portfolio</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Contact</li>
          </ul>

          {/* CTA */}
          <div className="mt-auto">
            <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl text-white font-semibold">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
