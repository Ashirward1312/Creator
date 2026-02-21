// src/components/Hero.jsx
import React from "react";
import p14 from "../../images/hero22.png";
import mobile from "../../images/hero m.png";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden h-[78svh] sm:h-[90vh] md:h-[90vh] lg:h-[96vh]">
      {/* ✅ Background */}
      <div className="absolute inset-0 -z-10">
        {/* ✅ Mobile image */}
        <img
          src={mobile}
          alt="Digital LED Display Board"
          className="block h-full w-full object-cover object-center sm:hidden pointer-events-none select-none"
          draggable={false}
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />

        {/* ✅ Desktop/Tablet image */}
        <img
          src={p14}
          alt="Digital LED Display Board"
          className="hidden sm:block h-full w-full object-cover object-[56%_center] md:object-center pointer-events-none select-none"
          draggable={false}
          decoding="async"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* ✅ Main content (spacing) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center lg:justify-start pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-14 md:pb-16">
        <div className="w-full max-w-[560px] lg:max-w-[620px]">
          {/* content */}
        </div>
      </div>
    </section>
  );
};

export default Hero;