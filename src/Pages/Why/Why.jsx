// src/components/WhyChooseUs.jsx
import React from "react";

const items = [
  {
    title: "EXPERIENCE",
    desc: "Years of hands-on work in signage, outdoor branding and fabrication—so planning right hoti hai and mistakes zero.",
    accent: {
      card: "from-sky-50 to-white",
      ring: "ring-sky-200/70",
      iconBg: "bg-sky-100",
      iconText: "text-sky-700",
      glow: "from-sky-300/40 to-indigo-300/30",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M7 7h10M7 11h10M7 15h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6.5 3.5h11A2.5 2.5 0 0 1 20 6v12a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18V6A2.5 2.5 0 0 1 6.5 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "QUALITY",
    desc: "Premium materials + clean finishing. Weather resistance, strong structure, and sharp visibility—long term value.",
    accent: {
      card: "from-emerald-50 to-white",
      ring: "ring-emerald-200/70",
      iconBg: "bg-emerald-100",
      iconText: "text-emerald-700",
      glow: "from-emerald-300/40 to-teal-300/30",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 2l3.2 6.5L22 9.7l-5 4.9 1.2 7L12 18.7 5.8 21.6l1.2-7-5-4.9 6.8-1.2L12 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "EXECUTION",
    desc: "Timely fabrication + professional installation coordination. Site visit, measurements, and safe fitting.",
    accent: {
      card: "from-amber-50 to-white",
      ring: "ring-amber-200/70",
      iconBg: "bg-amber-100",
      iconText: "text-amber-700",
      glow: "from-amber-300/45 to-orange-300/30",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M3 20h18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 20V9l5-5 5 5v11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 20v-6h4v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "SUPPORT",
    desc: "After-install support, quick revisions, and clear communication. You get peace of mind, not confusion.",
    accent: {
      card: "from-violet-50 to-white",
      ring: "ring-violet-200/70",
      iconBg: "bg-violet-100",
      iconText: "text-violet-700",
      glow: "from-violet-300/40 to-fuchsia-300/30",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 22a8 8 0 1 0-8-8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M4 14v-2a8 8 0 0 1 16 0v2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 14h2v4H6a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2Zm12 0h-2v4h2a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* soft background */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-28 -z-10 mx-auto h-64 max-w-6xl rounded-[3rem] bg-gradient-to-r from-sky-100/40 via-emerald-100/25 to-violet-100/35 blur-2xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold tracking-tight text-sky-600 uppercase">
            WHY CHOOSE US
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We focus on strong planning, premium finishing and dependable
            delivery—so your branding looks professional and lasts longer.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:auto-rows-fr">
          {items.map((it) => (
            <article
              key={it.title}
              className={[
                "group relative h-full rounded-3xl bg-gradient-to-b p-6",
                "shadow-sm ring-1 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-lg",
                it.accent.card,
                it.accent.ring,
              ].join(" ")}
            >
              {/* ICON (hover animation) */}
              <div
                className={[
                  "relative grid h-12 w-12 place-items-center rounded-2xl ring-1 ring-black/5 overflow-hidden",
                  "transition-all duration-300",
                  "group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-md",
                  it.accent.iconBg,
                  it.accent.iconText,
                ].join(" ")}
              >
                {/* glow wash on hover */}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute inset-0 opacity-0 transition-opacity duration-300",
                    "bg-gradient-to-br",
                    it.accent.glow,
                    "group-hover:opacity-100",
                  ].join(" ")}
                />
                {/* ripple */}
                <span
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-[999px] bg-white/35 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                />

                {/* icon itself */}
                <span className="relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {it.icon}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {it.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-6">{it.desc}</p>

              <div className="mt-5 h-px w-full bg-slate-900/5" />

              <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold text-slate-700">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900/40 transition-transform duration-300 group-hover:scale-125" />
                Trusted for commercial work
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            TALK TO OUR TEAM
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;