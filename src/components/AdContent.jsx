import { useNavigate } from "react-router-dom";

const AdContent = () => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 p-5 sm:p-6 md:p-8">
      <div className="flex flex-col justify-center text-center md:text-left">
        <span className="text-red-500 text-xs font-semibold tracking-wide mx-auto md:mx-0">
          FREE WEBSITE AUDIT
        </span>

        <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-white leading-snug">
          Is your website doing its job?
        </h3>

        <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
          We'll review your site for speed, structure, and technical gaps, then
          share clear recommendations.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="
            mt-5 mx-auto md:mx-0 w-fit px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700
            text-white text-sm font-medium transition
          "
        >
          Get Free Audit
        </button>
      </div>

      <div className="relative flex justify-center items-end h-32 sm:h-36 md:h-auto">
        <img
          src="/boy-mascot.webp"
          alt="Boy mascot"
          width="480"
          height="480"
          loading="lazy"
          decoding="async"
          className="w-20 sm:w-24 md:w-32 absolute left-4 sm:left-8 md:left-6 bottom-0"
        />
        <img
          src="/girl-mascot.webp"
          alt="Girl mascot"
          width="480"
          height="480"
          loading="lazy"
          decoding="async"
          className="w-20 sm:w-24 md:w-32 absolute right-4 sm:right-8 md:right-6 bottom-0"
        />
      </div>
    </div>
  );
};

export default AdContent;
