import { Link } from "react-router-dom";
import { FaGoogle, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-black via-[#140406] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-dashed border-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[2.2fr_1fr_1fr] gap-24">
        <div>
          <div className="flex items-center gap-2 select-none">
            <span className="text-white font-bold tracking-wide text-3xl">
              PURO
            </span>
            <span className="text-red-600 font-bold tracking-wide text-2xl">
              TECH.
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-[420px]">
            PURO TECH provides web development, AI automation, software
            solutions, and tech consultancy with a focus on performance,
            clarity, and long-term reliability.
          </p>

          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p>Business Name: PURO TECH</p>
            <p>Location: Kolkata, West Bengal, India</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+918889287261"
                className="hover:text-red-500 transition-colors"
              >
                +91 8889287261
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:puro.tech.ofcl@gmail.com"
                className="hover:text-red-500 transition-colors"
              >
                puro.tech.ofcl@gmail.com
              </a>
            </p>
          </div>

          <div className="inline-flex items-center gap-4 mt-8 px-5 py-2 rounded-full border border-white/20 backdrop-blur-md">
            <a
              href="https://www.instagram.com/_puro.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 hover:scale-110 hover:shadow-pink-500/40 transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/swarnav-das-6929542bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 hover:scale-110 hover:shadow-blue-600/40 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>

            <a
              href="https://youtube.com/@puro_tech?si=JYx2z-HO-KRhST_Q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 hover:scale-110 hover:shadow-gray-800/40 transition-all duration-300"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white text-lg" />
            </a>

            <a
              href="https://puro-tech.vercel.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 hover:scale-110 hover:shadow-red-600/40 transition-all duration-300"
              aria-label="Google Business"
            >
              <FaGoogle className="text-white text-lg" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm text-white mb-6">Services</h2>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link className="hover:text-white" to="/services">
                Web Development
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/services">
                Software Solutions
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/services">
                AI Automation
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/services">
                Digital Solutions
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/services">
                Tech Consultancy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm text-white mb-6">Company</h2>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link className="hover:text-white" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/disclaimer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-dashed border-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <span>
          <Link to="/blog">Blog</Link> ·{" "}
          <Link to="/privacy-policy">Privacy Policy</Link> ·{" "}
          <Link to="/disclaimer">Disclaimer</Link> ·{" "}
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </span>
        <span>&copy; {new Date().getFullYear()} PURO TECH. All rights reserved.</span>
      </div>
    </footer>
  );
}
