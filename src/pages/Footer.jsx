import react from 'react'

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
          <div className="flex items-center gap-3 mb-6">
            <div className="text-red-600 text-3xl font-bold">P</div>
            <span className="text-3xl font-semibold text-red-600">
              PURO TECH
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-[420px]">
            Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
            pesto pesto Bianca pesto roll onions.
          </p>

          {/* Contact Row */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
            <span>• stygar@help.com</span>
            <span>• +1 (555) 123-4567</span>
            <span>• 5987 Mid Rivers Mall Dr, St. Charles</span>
          </div>

          {/* Social Capsule */}
          <div className="inline-flex items-center gap-4 mt-8 px-5 py-2 rounded-full border border-white/20">
            <span className="w-4 h-4 bg-white/40 rounded-full" />
            <span className="w-4 h-4 bg-white/40 rounded-full" />
            <span className="w-4 h-4 bg-white/40 rounded-full" />
            <span className="w-4 h-4 bg-white/40 rounded-full" />
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-sm text-white mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Web Development</li>
            <li>UI / UX Design</li>
            <li>Digital Marketing</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM DASHED LINE */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-dashed border-white/20" />
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <span>Privacy Policy • Disclaimer</span>
        <span>Copyright © Stygar All right Reserved 2025</span>
      </div>
    </footer>
  );
}
