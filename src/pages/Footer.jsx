import react from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">

      {/* TOP DASHED LINE */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-dashed border-white/20" />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[2.2fr_1fr_1fr] gap-24">

        {/* LEFT */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            <span className="text-white font-bold tracking-wide text-3xl">
              PURO
            </span>
            <span className="text-red-600 font-bold tracking-wide text-2xl">
              TECH
            </span>
          </div>


          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-[420px]">
            PURO Tech builds secure, scalable digital solutions with a focus on clarity, performance, and long-term reliability.
          </p>

          {/* Contact Row */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
            <a
              href="mailto:puro.tech.ofcl@gmail.com"
              className="hover:text-red-500 transition-colors"
            >
              • puro.tech.ofcl@gmail.com
            </a>

            <a
              href="tel:+91-8889287261"
              className="hover:text-red-500 transition-colors"
            >
              • +91 88892-87261
            </a>

           <span className="text-gray-400 tracking-wide">
  • Tollygunj, Thakurpukur, WB-700093, India
</span>
          </div>


          {/* Social Capsule */}
          <div className="inline-flex items-center gap-4 mt-8 px-5 py-2 rounded-full border border-white/20 backdrop-blur-md">

            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 
               hover:bg-red-600 hover:scale-110 hover:shadow-pink-500/40 
               transition-all duration-300"
            >
              <FaInstagram className="text-white text-lg" />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 
               hover:bg-red-600 hover:scale-110 hover:shadow-blue-600/40 
               transition-all duration-300"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>

            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 
               hover:bg-red-600 hover:scale-110 hover:shadow-gray-800/40 
               transition-all duration-300"
            >
              <FaGithub className="text-white text-lg" />
            </a>

            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 
               hover:bg-red-600 hover:scale-110 hover:shadow-red-600/40 
               transition-all duration-300"
            >
              <FaTwitter className="text-white text-lg" />
            </a>

          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-sm text-white mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link className='hover:text-white' to="/services">Web Development</Link></li>
            <li><Link className='hover:text-white' to="/services">UI / UX Design</Link></li>
            <li><Link className='hover:text-white' to="/services">Digital Marketing</Link></li>
            <li><Link className='hover:text-white' to="/services">Brand Strategy</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link className='hover:text-white' to="/about">About Us</Link></li>
            <li><Link className='hover:text-white' to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className='hover:text-white' to="/portfolio">Portfolio</Link></li>
            <li><Link className='hover:text-white' to="/contact">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM DASHED LINE */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-dashed border-white/20" />
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <span><Link to="/privacy-policy">Privacy Policy</Link> • <Link to="/disclaimer">Disclaimer</Link></span>
        <span>© {new Date().getFullYear()} PURO TECH. All rights reserved.</span>
      </div>
    </footer>
  );
}
