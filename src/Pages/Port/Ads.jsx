// src/components/OurMedia.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- Simple Icons ---------------- */
const I = ({ children, className = "h-7 w-7 sm:h-8 sm:w-8 text-slate-700" }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconACPElevation = () => (
  <I>
    <path d="M14 50V26l18-12 18 12v24" />
    <rect x="24" y="32" width="16" height="18" rx="1" opacity="0.4" />
  </I>
);

const IconLed = () => (
  <I>
    <rect x="14" y="18" width="36" height="20" rx="2" />
    <path d="M22 52h20M32 38v14" />
  </I>
);

const IconOutdoor = () => (
  <I>
    <rect x="10" y="14" width="44" height="20" rx="2" />
    <line x1="16" y1="52" x2="16" y2="34" />
    <line x1="48" y1="52" x2="48" y2="34" />
  </I>
);

const IconStore = () => (
  <I>
    <path d="M18 26h28l-3-10H21l-3 10Z" />
    <rect x="18" y="26" width="28" height="24" rx="2" />
  </I>
);

const IconBranding = () => (
  <I>
    <path d="M14 30h10l18-8v24l-18-8H14v-8Z" />
    <path d="M42 28c4 4 4 8 0 12" opacity="0.5" />
  </I>
);

const IconGifting = () => (
  <I>
    <rect x="16" y="28" width="32" height="22" rx="2" />
    <path d="M16 36h32M32 28v22" />
    <path d="M26 28c-4-4-2-8 2-8s6 4 4 8M38 28c4-4 2-8-2-8s-6 4-4 8" />
  </I>
);

const ChevronIcon = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={[
      "h-5 w-5 transition-transform duration-200",
      open ? "rotate-180 text-slate-700" : "text-slate-400",
    ].join(" ")}
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ className = "text-slate-400" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={["h-4 w-4", className].join(" ")} aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

/* ---------------- Modern color tones (per card) ---------------- */
const toneMap = {
  acp: {
    top: "from-indigo-500 to-sky-400",
    iconBg: "bg-indigo-50",
    iconRing: "ring-indigo-200/70",
    badge: "bg-indigo-600",
    chip: "bg-indigo-50 text-indigo-700 ring-indigo-200/70",
    check: "text-indigo-500",
    focus: "focus:ring-indigo-200",
  },
  led: {
    top: "from-fuchsia-500 to-amber-400",
    iconBg: "bg-fuchsia-50",
    iconRing: "ring-fuchsia-200/70",
    badge: "bg-fuchsia-600",
    chip: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200/70",
    check: "text-fuchsia-500",
    focus: "focus:ring-fuchsia-200",
  },
  outdoor: {
    top: "from-sky-500 to-indigo-500",
    iconBg: "bg-sky-50",
    iconRing: "ring-sky-200/70",
    badge: "bg-sky-600",
    chip: "bg-sky-50 text-sky-700 ring-sky-200/70",
    check: "text-sky-500",
    focus: "focus:ring-sky-200",
  },
  store: {
    top: "from-emerald-500 to-cyan-500",
    iconBg: "bg-emerald-50",
    iconRing: "ring-emerald-200/70",
    badge: "bg-emerald-600",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-200/70",
    check: "text-emerald-500",
    focus: "focus:ring-emerald-200",
  },
  branding: {
    top: "from-amber-500 to-rose-500",
    iconBg: "bg-amber-50",
    iconRing: "ring-amber-200/70",
    badge: "bg-amber-600",
    chip: "bg-amber-50 text-amber-700 ring-amber-200/70",
    check: "text-amber-500",
    focus: "focus:ring-amber-200",
  },
  gifting: {
    top: "from-violet-500 to-sky-500",
    iconBg: "bg-violet-50",
    iconRing: "ring-violet-200/70",
    badge: "bg-violet-600",
    chip: "bg-violet-50 text-violet-700 ring-violet-200/70",
    check: "text-violet-500",
    focus: "focus:ring-violet-200",
  },
};

/* ---------------- Service Card ---------------- */
function ServiceCard({ service, open, onToggle }) {
  const t = toneMap[service.toneKey];

  return (
    <div
      className={[
        "self-start",
        "group relative overflow-hidden rounded-2xl",
        "bg-white/75 backdrop-blur",
        "border border-slate-200/80",
        "shadow-sm hover:shadow-lg hover:border-slate-300",
        "transition-all duration-200",
      ].join(" ")}
    >
      {/* Modern gradient top line */}
      <div className={["absolute inset-x-0 top-0 h-1 bg-gradient-to-r", t.top].join(" ")} />

      {/* Header - Clickable */}
      <button
        type="button"
        onClick={onToggle}
        className={[
          "w-full p-4 sm:p-5 flex items-center gap-3 sm:gap-4 text-left",
          "focus:outline-none focus:ring-2 rounded-2xl",
          t.focus,
        ].join(" ")}
      >
        {/* Number badge */}
        <div
          className={[
            "flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-xl",
            "grid place-items-center text-white text-xs sm:text-sm font-bold",
            t.badge,
          ].join(" ")}
        >
          {service.no}
        </div>

        {/* Icon */}
        <div
          className={[
            "flex-shrink-0 h-11 w-11 sm:h-12 sm:w-12 rounded-xl grid place-items-center",
            "ring-1 shadow-sm",
            t.iconBg,
            t.iconRing,
          ].join(" ")}
        >
          {service.icon}
        </div>

        {/* Title & Subtitle */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
            {service.title}
          </h3>

          {service.subtitle ? (
            <p className="mt-0.5 text-xs sm:text-sm text-slate-500 sm:truncate">
              {service.subtitle}
            </p>
          ) : null}
        </div>

        {/* Count & Arrow */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span
            className={[
              "text-[11px] sm:text-xs font-semibold px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg ring-1",
              t.chip,
            ].join(" ")}
          >
            {service.items.length}
          </span>
          <ChevronIcon open={open} />
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={[
          "grid transition-all duration-200 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
            <div className="border-t border-slate-100 pt-4">
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={[
                      "flex items-center gap-3 text-xs sm:text-sm text-slate-600",
                      "py-2 px-3 rounded-xl",
                      "hover:bg-slate-50 transition-colors cursor-default",
                    ].join(" ")}
                  >
                    <CheckIcon className={t.check} />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Main Component ---------------- */
const OurMedia = () => {
  const navigate = useNavigate();

  const services = useMemo(
    () => [
      {
        id: "acp",
        no: 1,
        toneKey: "acp",
        title: "ACP Elevation",
        // subtitle: "Aluminium Composite Panel ",
        icon: <IconACPElevation />,
        items: ["Shop ACP Elevation", "Corporate Building Elevation", "ACP Gate Elevation", "ACP Signages"],
      },
      {
        id: "led",
        no: 2,
        toneKey: "led",
        title: "3D LED Signages",
        // subtitle: "Illuminated display solutions",
        icon: <IconLed />,
        items: [
          "Main  Shop LED Board",
          "LED Pyron",
          "LED Direction Signages",
          "LED Clipon Board",
          "LED Fabric Board",
          "Steel LED Letters",
          "Copper & Steel LED Letters",
          "Rooftop LED Letters",
          "LED Rooftop Boards",
        ],
      },
      {
        id: "outdoor",
        no: 3,
        toneKey: "outdoor",
        title: "Outdoor Media",
        // subtitle: "Outdoor advertising formats",
        icon: <IconOutdoor />,
        items: ["Hoarding / Skyline Board", "Outdoor Vinyl", "Wooden Cases"],
      },
      {
        id: "store",
        no: 4,
        toneKey: "store",
        title: "Store Branding",
        // subtitle: "In-store branding materials",
        icon: <IconStore />,
        items: ["Flex Board", "Vinyl Sunboard", "Clipon Board", "Sandwich Board", "Flyer / Posters / Flex", "Visiting Card", "Standee", "ID Cards & Voucher"],
      },
      {
        id: "branding",
        no: 5,
        toneKey: "branding",
        title: "Media Branding",
        // subtitle: "Printing & event branding",
        icon: <IconBranding />,
        items: [
          "Flex Printing & Installation",
          "Vinyl",
          "Eco Vinyl",
          "Vinyl Sunboard",
          "Retro Clamp Board Signages",
          "Retro Pixel Board Signages",
          "Store Branding",
          "Event Branding",
          "Smiling Signage Board",
          "Outdoor Digital Media Branding",
        ],
      },
      {
        id: "gifting",
        no: 6,
        toneKey: "gifting",
        title: "Corporate Gifting",
        // subtitle: "Customized corporate gifts",
        icon: <IconGifting />,
        items: ["Key Rings", "Mug", "Memento", "Coaster", "Pen Stand", "Pens", "ID Cards", "Photo Frame", "T-Shirt", "Cap", "Mobile Stand", "Diwali Gifts", "Holi Gifts"],
      },
    ],
    []
  );

  const [openId, setOpenId] = useState(null);

  return (
    <section id="media" className="relative py-12 sm:py-16 lg:py-20">
      {/* Modern light background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-60 sm:h-72 w-[60rem] sm:w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200/45 via-violet-200/35 to-emerald-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-2xl sm:text-2xl font-bold text-slate-500 tracking-tightuppercase">
            WHAT WE OFFER
          </p>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
            Complete branding and advertising solutions for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              open={openId === s.id}
              onToggle={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            type="button"
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurMedia;