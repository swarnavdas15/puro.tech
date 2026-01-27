import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AboutHeroSection from "./pages/AboutHeroSection";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      {/* Global */}
      <Navbar />
      <ScrollToTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutHeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />


        {/* Optional 404 */}
        <Route
          path="*"
          element={
           <NotFound />
          }
        />
      </Routes>

      {/* Global */}
      <Footer />
    </>
  );
}

export default App;
