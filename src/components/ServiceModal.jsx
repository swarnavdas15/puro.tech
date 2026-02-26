import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServiceModal = ({ selectedService, onClose }) => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    onClose();
    navigate("/contact");
  };

  return (
    <AnimatePresence>
      {selectedService && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-5000 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#0f0f0f] max-w-3xl w-full rounded-3xl p-10 border border-[#E10600]/40 shadow-[0_0_40px_rgba(225,6,0,0.4)]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-6 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h3 className="text-3xl font-bold text-[#E10600] mb-3">
              {selectedService.title}
            </h3>

            <p className="text-gray-300 mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-red-400 mb-2">What We Offer:</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-[#E10600]">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#E10600]/10 rounded-xl border border-[#E10600]/30">
              <h4 className="font-semibold text-red-200">Investment Range:</h4>
              <p className="text-[#f0e9e9] text-lg font-bold mt-1">
                {selectedService.price}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Premium quality at highly competitive pricing compared to traditional agencies.
              </p>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleStartProject}
                className="px-8 py-3 bg-[#E10600] rounded-full font-semibold shadow-[0_0_25px_rgba(225,6,0,0.6)] hover:shadow-[0_0_40px_rgba(225,6,0,0.8)] transition"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
