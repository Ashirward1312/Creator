// src/Pages/MissionVision/MissionVision.jsx
import React from "react";

const MissionVision = () => {
  const cards = [
    {
      title: "MISSION",
      subtitle: "What we deliver every day",
      desc:
        "To help brands and businesses stand out with premium design, durable execution, and consistent quality—delivered on time and backed by responsive support.",
      tone: {
        ring: "ring-sky-100",
        iconWrap: "bg-sky-50 text-sky-700 ring-sky-100",
        bar: "from-sky-500 to-sky-600",
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
          <path
            d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 12.3l1.9 1.9 3.8-4.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "VISION",
      subtitle: "Where we are heading",
      desc:
        "To become the most trusted name in signage and branding—known for modern aesthetics, premium materials, and a standard of execution that elevates every location we work on.",
      tone: {
        ring: "ring-sky-100",
        iconWrap: "bg-sky-50 text-sky-700 ring-sky-100",
        bar: "from-sky-500 to-sky-600",
      },
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
          <path
            d="M2.5 12s3.6-7 9.5-7 9.5 7 9.5 7-3.6 7-9.5 7-9.5-7-9.5-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "QUALITY FIRST",
      desc: "Premium materials and clean finishing—built to last.",
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
      title: "ON-TIME EXECUTION",
      desc: "Clear timelines, site coordination and smooth delivery.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
          <path
            d="M12 7v5l3 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "DESIGN EXCELLENCE",
      desc: "Modern layouts that improve visibility and brand recall.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
          <path
            d="M4 7h10M4 12h16M4 17h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18 5l2 2-6 6H12v-2l6-6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "RESPONSIVE SUPPORT",
      desc: "Clear communication and after-install assistance.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
          <path
            d="M4 14v-2a8 8 0 0 1 16 0v2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 14h2v5H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2Zm12 0h-2v5h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* light blue + white background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute -top-44 left-1/2 h-96 w-[62rem] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold tracking-tight text-sky-700 uppercase">
            MISSION & VISION
          </p>
         
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Our mission and vision guide every project—from design planning to
            on-site installation and long-term support.
          </p>
        </div>

        {/* Mission / Vision cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className={[
                "rounded-[28px] bg-white/90 backdrop-blur-xl p-7 sm:p-8 shadow-sm ring-1",
                c.tone.ring,
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-700 uppercase">
                    {c.subtitle}
                  </p>
                  <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
                    {c.title}
                  </h2>
                </div>

                <div
                  className={[
                    "grid h-12 w-12 place-items-center rounded-2xl ring-1",
                    c.tone.iconWrap,
                  ].join(" ")}
                >
                  {c.icon}
                </div>
              </div>

              <div className={["mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r", c.tone.bar].join(" ")} />

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-12 rounded-3xl bg-white/90 backdrop-blur-xl ring-1 ring-sky-100 shadow-sm">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.28em] text-sky-700 uppercase">
                  OUR VALUES
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">
                  The standards we never compromise on
                </h3>
              </div>
              <a
                href="/contact"
                className="mt-2 sm:mt-0 inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
              >
                CONTACT US
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl bg-sky-50 ring-1 ring-sky-100 p-5"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-sky-700 ring-1 ring-sky-100">
                    {v.icon}
                  </div>
                  <p className="mt-4 text-[12px] font-semibold tracking-[0.18em] text-slate-900">
                    {v.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 leading-6">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="/services"
            className="rounded-2xl bg-white px-7 py-3 text-sm font-semibold text-sky-700 ring-1 ring-sky-200 hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            VIEW SERVICES
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;