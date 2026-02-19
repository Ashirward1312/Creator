// src/components/Hero.jsx
import React from "react";
import p14 from "../../images/hero22.png";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] sm:min-h-screen">
      {/* ✅ Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={p14}
          alt="Digital LED Display Board"
          className="h-full w-full object-cover object-[56%_center] sm:object-center"
          draggable={false}
          decoding="async"
        />
      </div>

      {/* ✅ Main content (spacing) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[100svh] sm:min-h-screen flex items-center justify-center lg:justify-start pt-14 sm:pt-16 pb-10 sm:pb-16">
        <div className="w-full max-w-[560px] lg:max-w-[620px]">
          {/* content */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

// src/components/Hero.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import p14 from "../../images/hero1.png";
// import mobile from "../../images/hero2.png";

// const Hero = () => {
//   return (
//     <section className="relative isolate overflow-hidden min-h-[100svh] sm:min-h-screen">
//       <div className="absolute inset-0 -z-10">
//         <picture>
//           <source media="(max-width: 639px)" srcSet={mobile} />
//           <img
//             src={p14}
//             alt="Digital LED Display Board"
// className="h-full w-full object-cover object-[55%_center] sm:object-center"            draggable={false}
//             decoding="async"
//           />
//         </picture>
//       </div>

//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-[100svh] sm:min-h-screen flex items-center justify-center lg:justify-start pt-14 sm:pt-16 pb-32 sm:pb-40">
//         <div className="w-full max-w-[560px] lg:max-w-[620px]"></div>
//       </div>

//       <div className="absolute inset-x-0 bottom-4 sm:bottom-10 flex justify-center px-4 pb-[env(safe-area-inset-bottom)]">
//         <div className="pointer-events-auto flex flex-col items-center gap-3 text-center">
//           <div className="flex w-full flex-col sm:w-auto sm:flex-row items-stretch sm:items-center gap-3">
//             <Link
//               to="/portfolio"
//               className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-white/40 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
//             >
//               View Portfolio <span className="ml-2 font-bold">→</span>
//             </Link>

//             <Link
//               to="/contact"
//               className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
//             >
//               Contact Us
//             </Link>
//           </div>

//           <p className="max-w-[28rem] text-xs text-white/80">
//             Need urgent work? Share location & size — we’ll guide you quickly.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;