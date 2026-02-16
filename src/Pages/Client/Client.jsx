// src/components/Clients.jsx
import React from "react";
import Client from "../../images/b1.png";
import Client2 from "../../images/b2.jpeg";
import Client3 from "../../images/b3.png";
import Client4 from "../../images/b4.jpeg";
import Client5 from "../../images/b5.jpeg";
import Client6 from "../../images/b6.jpeg";
import Client7 from "../../images/b7.png";
import Client8 from "../../images/b8.png";
import Client9 from "../../images/cc1.png";
import Client10 from "../../images/cc2.png";
import Client11 from "../../images/cc3.png";
import Client12 from "../../images/cc4.jpg";

const clients = [
  // 1 - 8 (Builders)
  { name: "Client Logo", logo: Client },
  { name: "Client Logo", logo: Client2 },
  { name: "Client Logo", logo: Client3 },
  { name: "Client Logo", logo: Client4 },
  { name: "Client Logo", logo: Client5 },
  { name: "Client Logo", logo: Client6 },
  { name: "Client Logo", logo: Client7 },
  { name: "Client Logo", logo: Client8 },

  // 9 onwards (Co-operatives)
  { name: "Client Logo", logo: Client9 },
  { name: "Client Logo", logo: Client10 },
  { name: "Client Logo", logo: Client11 },
  { name: "Client Logo", logo: Client12 },
];

const LogoGrid = ({ items }) => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((c, idx) => (
        <div
          key={`${c.name}-${idx}`}
          className={[
            "group relative overflow-hidden rounded-2xl",
            "bg-white ring-1 ring-slate-200 shadow-sm",
            "transition duration-300",
            "hover:-translate-y-0.5 hover:shadow-md hover:ring-sky-200",
          ].join(" ")}
        >
          {/* subtle top shine */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-slate-50 to-transparent opacity-70"
          />

          {/* Fixed-height tile */}
          <div className="relative flex h-28 sm:h-32 items-center justify-center p-4">
            {c.logo ? (
              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                decoding="async"
                draggable={false}
                className={[
                  "max-h-16 sm:max-h-20 w-auto max-w-[170px] object-contain",
                  "mix-blend-multiply",
                  "opacity-80 grayscale",
                  "transition duration-300",
                  "group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-[1.03]",
                ].join(" ")}
              />
            ) : (
              <div className="text-center">
                <div className="h-10 w-28 rounded-xl bg-slate-100 ring-1 ring-slate-200" />
                <p className="mt-2 text-xs font-semibold text-slate-500">{c.name}</p>
              </div>
            )}
          </div>

          {/* bottom line accent */}
          <div className="h-1 w-full bg-gradient-to-r from-sky-200 via-violet-200 to-emerald-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
};

const Clients = () => {
  const builders = clients.slice(0, 8); // Client 1 to Client 8
  const cooperatives = clients.slice(8); // Client 9 onwards

  return (
    <section id="clients" className="relative overflow-hidden bg-white">
      {/* premium soft background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute -top-44 left-1/2 h-96 w-[62rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200/35 via-violet-200/20 to-emerald-200/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-sky-700 uppercase">
            CLIENTS
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Trusted by Businesses Across Industries
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Clean work, durable materials, and on-time execution — that’s why clients stick with us.
          </p>
        </div>

        {/* Logo wall (grouped) */}
        <div className="mt-10 rounded-3xl bg-white/85 backdrop-blur-xl ring-1 ring-sky-100 shadow-sm">
          <div className="p-5 sm:p-8">
            {/* ✅ Builders (CENTER HEADING) */}
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.24em] text-sky-700 uppercase">
                Category
              </p>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">
                Builders
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Construction & real-estate partners • {builders.length} brands
              </p>
            </div>
            <LogoGrid items={builders} />

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* ✅ Co-operatives (CENTER HEADING) */}
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.24em] text-sky-700 uppercase">
                Category
              </p>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">
                Co‑operatives
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Societies, co‑operative groups & institutions • {cooperatives.length} brands
              </p>
            </div>
            <LogoGrid items={cooperatives} />

            {/* trust cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-sky-50 ring-1 ring-sky-100 p-4">
                <p className="text-sm font-semibold text-slate-900">Design Excellence</p>
                <p className="mt-1 text-sm text-slate-600">
                  Strong layouts, premium finishing and clean brand presence.
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 ring-1 ring-emerald-100 p-4">
                <p className="text-sm font-semibold text-slate-900">Durable Materials</p>
                <p className="mt-1 text-sm text-slate-600">
                  Built for visibility and long-term outdoor performance.
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 ring-1 ring-violet-100 p-4">
                <p className="text-sm font-semibold text-slate-900">Professional Execution</p>
                <p className="mt-1 text-sm text-slate-600">
                  Site measurement, installation planning and on-time delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* optional CTA */}
        {/* <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Work With Us
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Clients;