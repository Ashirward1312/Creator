// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import p14 from "../../images/hero1.png";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden min-h-screen">
      {/* ✅ Background (ONLY p14) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={p14}
          alt="Digital LED Display Board"
          className="h-full w-full object-cover"
          draggable={false}
          decoding="async"
        />
      </div>

      {/* ✅ Main content (keep space so bottom content doesn't overlap) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center lg:justify-start py-16 pb-40">
        <div className="w-full max-w-[560px] lg:max-w-[620px]">
          {/* ✅ Strong card so text is visible without background overlay */}
        </div>
      </div>

      {/* ✅ Bottom center CTA + text */}
      <div className="absolute inset-x-0 bottom-6 sm:bottom-10 flex justify-center px-4">
        <div className="pointer-events-auto flex flex-col items-center gap-3 text-center">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-2xl bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg ring-1 ring-white/40 hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              View Portfolio
              <span className="ml-2 font-bold">→</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              Contact Us
            </Link>
          </div>

          <p className="text-xs text-white/80">
            Need urgent work? Share location & size — we’ll guide you quickly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;