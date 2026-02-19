// src/components/OurMedia.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

/* ---------------- ICONS (same outline/black style like your image) ---------------- */
const I = ({ children }) => (
  <svg
    viewBox="0 0 64 64"
    className="h-10 w-10 text-slate-900"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* Outdoor */
const Hoarding = () => (
  <I>
    <rect x="10" y="14" width="44" height="20" rx="2" />
    <line x1="16" y1="50" x2="16" y2="34" />
    <line x1="48" y1="50" x2="48" y2="34" />
    <line x1="12" y1="22" x2="52" y2="22" opacity="0.35" />
    <line x1="12" y1="28" x2="40" y2="28" opacity="0.35" />
  </I>
);
const UniPole = () => (
  <I>
    <rect x="16" y="14" width="32" height="18" rx="2" />
    <line x1="32" y1="32" x2="32" y2="52" />
    <line x1="24" y1="52" x2="40" y2="52" />
  </I>
);
const Kiosk = () => (
  <I>
    <path d="M22 14h20l3 8H19l3-8Z" />
    <rect x="20" y="22" width="24" height="10" rx="2" />
    <rect x="24" y="32" width="16" height="20" rx="2" />
    <line x1="28" y1="38" x2="36" y2="38" opacity="0.35" />
  </I>
);
const SquareBranding = () => (
  <I>
    <rect x="14" y="14" width="36" height="36" rx="3" />
    <rect x="24" y="24" width="16" height="16" rx="2" opacity="0.7" />
  </I>
);
const TransitOOH = () => (
  <I>
    <path d="M10 36h30l12 8v8H10V36Z" />
    <circle cx="22" cy="52" r="3" />
    <circle cx="46" cy="52" r="3" />
    <line x1="40" y1="36" x2="40" y2="52" opacity="0.35" />
  </I>
);

/* Store */
const Flyers = () => (
  <I>
    <rect x="18" y="12" width="28" height="40" rx="2" />
    <path d="M22 24l6 6 5-5 9 9" />
    <line x1="22" y1="42" x2="42" y2="42" opacity="0.35" />
  </I>
);
const Posters = () => (
  <I>
    <rect x="16" y="14" width="32" height="38" rx="2" />
    <circle cx="32" cy="20" r="2" />
    <line x1="22" y1="28" x2="42" y2="28" opacity="0.35" />
    <line x1="22" y1="34" x2="38" y2="34" opacity="0.35" />
  </I>
);
const Flex = () => (
  <I>
    <path d="M18 18h28v24H18V18Z" />
    <line x1="22" y1="46" x2="42" y2="46" />
    <line x1="24" y1="22" x2="40" y2="22" opacity="0.35" />
  </I>
);
const VisitingCard = () => (
  <I>
    <rect x="12" y="20" width="40" height="24" rx="3" />
    <line x1="18" y1="28" x2="30" y2="28" opacity="0.35" />
    <line x1="18" y1="34" x2="42" y2="34" opacity="0.35" />
  </I>
);
const Standee = () => (
  <I>
    <rect x="22" y="14" width="20" height="30" rx="2" />
    <line x1="18" y1="50" x2="46" y2="50" />
    <line x1="32" y1="44" x2="32" y2="50" />
  </I>
);

/* Event */
const Cutouts = () => (
  <I>
    <circle cx="32" cy="22" r="6" />
    <path d="M20 52c2-12 22-12 24 0" />
  </I>
);
const AcrylicLetters = () => (
  <I>
    <path d="M32 14 18 52h6l3-8h10l3 8h6L32 14Z" />
    <path d="M29 36h6" opacity="0.35" />
  </I>
);
const Signage = () => (
  <I>
    <path d="M26 14h12l8 8v12l-8 8H26l-8-8V22l8-8Z" />
    <line x1="32" y1="42" x2="32" y2="52" />
  </I>
);
const LedLetters = () => (
  <I>
    <circle cx="32" cy="30" r="14" />
    <path d="M32 20 24 40h4l2-5h8l2 5h4L32 20Z" />
    <path d="M18 14l2-2M46 14l-2-2M18 46l2 2M46 46l-2 2" opacity="0.9" />
  </I>
);
const LedBoards = () => (
  <I>
    <rect x="14" y="18" width="36" height="20" rx="2" />
    <line x1="22" y1="50" x2="42" y2="50" />
    <line x1="32" y1="38" x2="32" y2="50" />
    <line x1="18" y1="24" x2="46" y2="24" opacity="0.35" />
  </I>
);

/* Digital */
const D = ({ children }) => (
  <svg viewBox="0 0 64 64" className="h-10 w-10 text-slate-900" aria-hidden="true">
    {children}
  </svg>
);

const Facebook = () => (
  <D>
    <circle cx="32" cy="32" r="22" fill="currentColor" />
    <path
      d="M35 23h4v6h-4c-1.5 0-2 .6-2 2v4h6l-1 6h-5v13h-6V41h-5v-6h5v-5c0-4.6 2.7-7 8-7Z"
      fill="white"
    />
  </D>
);

const Instagram = () => (
  <D>
    <circle cx="32" cy="32" r="22" fill="currentColor" />
    <rect x="22" y="22" width="20" height="20" rx="6" fill="white" />
    <circle cx="32" cy="32" r="6" fill="currentColor" />
    <circle cx="38.5" cy="25.5" r="1.6" fill="currentColor" />
  </D>
);

const LinkedIn = () => (
  <D>
    <circle cx="32" cy="32" r="22" fill="currentColor" />
    <rect x="22" y="28" width="5" height="16" fill="white" />
    <circle cx="24.5" cy="24.5" r="2.5" fill="white" />
    <path
      d="M30 28h5v2.4c1-1.6 2.6-2.8 5.6-2.8 4.6 0 6.4 3 6.4 7.6V44h-5V36c0-2.1-.5-3.7-2.5-3.7s-3 1.3-3 3.8V44h-5V28Z"
      fill="white"
    />
  </D>
);

/* ✅ FIXED: Google Ads icon (clean + centered) */
const GoogleG = () => (
  <D>
    <circle cx="32" cy="32" r="22" fill="currentColor" />
    {/* Stylized "A" (Ads) */}
    <path
      d="M26 44L32 22L38 44"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M28.8 34h6.4"
      stroke="white"
      strokeWidth="3.2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Ads dot */}
    <circle cx="42.5" cy="42" r="3.2" fill="white" />
  </D>
);

/* ✅ FIXED: YouTube icon (same circle style like others) */
const YouTube = () => (
  <D>
    <circle cx="32" cy="32" r="22" fill="currentColor" />
    <rect x="20" y="25" width="24" height="14" rx="5" fill="white" opacity="0.98" />
    <path d="M31 28.8v6.4l7-3.2-7-3.2Z" fill="currentColor" />
  </D>
);

/* ---------------- Premium UI ---------------- */

const tones = {
  outdoor: {
    grad: "from-sky-400 via-cyan-300 to-indigo-400",
    soft: "bg-sky-50",
    ring: "ring-sky-200/70",
    dot: "bg-sky-400",
  },
  store: {
    grad: "from-emerald-300 via-teal-200 to-cyan-300",
    soft: "bg-emerald-50",
    ring: "ring-emerald-200/70",
    dot: "bg-emerald-400",
  },
  event: {
    grad: "from-amber-300 via-orange-200 to-rose-300",
    soft: "bg-amber-50",
    ring: "ring-amber-200/70",
    dot: "bg-amber-400",
  },
  digital: {
    grad: "from-violet-300 via-fuchsia-200 to-sky-300",
    soft: "bg-violet-50",
    ring: "ring-violet-200/70",
    dot: "bg-violet-400",
  },
};

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MediaItem = ({ icon, label, onGo, tone }) => (
  <li>
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onGo();
      }}
      className={[
        "group/item w-full text-left",
        "flex items-center gap-4 rounded-2xl p-2.5",
        "transition duration-200",
        "hover:bg-white/70 active:scale-[0.99]",
        "focus:outline-none focus:ring-2 focus:ring-sky-300",
      ].join(" ")}
      aria-label={`Open services for ${label}`}
    >
      <div
        className={[
          "relative grid place-items-center h-12 w-12 rounded-2xl",
          "ring-1 shadow-sm",
          tone.soft,
          tone.ring,
          "transition duration-300 transform-gpu",
          "group-hover/item:-translate-y-0.5 group-hover/item:shadow-md",
        ].join(" ")}
      >
        {/* <span
          className={[
            "absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full ring-2 ring-white",
            tone.dot,
          ].join(" ")}
        /> */}
        {icon}
      </div>

      <p className="text-sm sm:text-base font-semibold text-slate-900">{label}</p>

      <span
        className={[
          "ml-auto inline-flex items-center gap-1",
          "text-xs font-semibold text-slate-500",
          "opacity-0 translate-x-1 transition duration-200",
          "group-hover/item:opacity-100 group-hover/item:translate-x-0",
        ].join(" ")}
      >
        View <Chevron />
      </span>
    </button>
  </li>
);

const MediaCard = ({ title, subtitle, tone, items, onGo }) => (
  <div
    role="link"
    tabIndex={0}
    onClick={onGo}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onGo();
      }
    }}
    className={[
      "group relative overflow-hidden rounded-3xl",
      "bg-white/70 backdrop-blur-xl",
      "ring-1 ring-slate-200/80 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)]",
      "cursor-pointer",
      "transition duration-300 transform-gpu",
      "hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-40px_rgba(15,23,42,0.45)]",
      "focus:outline-none focus:ring-2 focus:ring-sky-300",
    ].join(" ")}
  >
    <div
      aria-hidden="true"
      className={["absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r", tone.grad].join(" ")}
    />

    <div
      aria-hidden="true"
      className={[
        "absolute -top-24 left-1/2 h-56 w-[46rem] -translate-x-1/2 blur-3xl opacity-25",
        "bg-gradient-to-r",
        tone.grad,
      ].join(" ")}
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <div className="absolute -inset-24 bg-[radial-gradient(40rem_22rem_at_20%_0%,rgba(255,255,255,0.55),transparent_55%)]" />
    </div>

    <div className="relative p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h3>
          {subtitle ? <p className="mt-1 text-sm text-slate-600">{subtitle}</p> : null}
        </div>

        <span className="shrink-0 text-xs font-semibold text-slate-500">View services →</span>
      </div>

      <ul className="mt-6 grid gap-2">
        {items.map((it) => (
          <MediaItem key={it.label} icon={it.icon} label={it.label} onGo={onGo} tone={tone} />
        ))}
      </ul>
    </div>

    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/70 to-transparent" />
  </div>
);

const OurMedia = () => {
  const navigate = useNavigate();
  const goServices = () => navigate("/services");

  return (
    <section id="media" className="relative overflow-hidden py-14 sm:py-18">
      {/* premium background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-72 w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200/45 via-violet-200/35 to-emerald-200/40 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sky-600 font-semibold tracking-[0.30em] uppercase text-xs sm:text-sm">
            Our Media
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Branding &amp; Advertising Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Outdoor, Store, Event &amp; Digital — everything under one premium workflow.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2">
          <MediaCard
            title="Outdoor Advertising"
            subtitle="High-visibility formats for maximum reach."
            tone={tones.outdoor}
            onGo={goServices}
            items={[
              { label: "Hoarding (Billboards)", icon: <Hoarding /> },
              { label: "Uni pole", icon: <UniPole /> },
              { label: "Kiosk", icon: <Kiosk /> },
              { label: "Square Branding", icon: <SquareBranding /> },
              { label: "Transit OOH", icon: <TransitOOH /> },
            ]}
          />

          <MediaCard
            title="Store Branding"
            subtitle="In-store visuals that boost walk-ins & conversions."
            tone={tones.store}
            onGo={goServices}
            items={[
              { label: "Flyers", icon: <Flyers /> },
              { label: "Posters", icon: <Posters /> },
              { label: "Flex", icon: <Flex /> },
              { label: "Visiting Card", icon: <VisitingCard /> },
              { label: "Standee", icon: <Standee /> },
            ]}
          />

          <MediaCard
            title="Event Branding"
            subtitle="Stage, stall & venue branding that looks premium."
            tone={tones.event}
            onGo={goServices}
            items={[
              { label: "Cutouts", icon: <Cutouts /> },
              { label: "Acrylic Letters", icon: <AcrylicLetters /> },
              { label: "Signage", icon: <Signage /> },
              { label: "LED Letters", icon: <LedLetters /> },
              { label: "LED Boards", icon: <LedBoards /> },
            ]}
          />

          <MediaCard
            title="Digital Advertising"
            subtitle="Performance campaigns across major platforms."
            tone={tones.digital}
            onGo={goServices}
            items={[
              { label: "Facebook Ads", icon: <Facebook /> },
              { label: "Instagram Ads", icon: <Instagram /> },
              { label: "LinkedIn Ads", icon: <LinkedIn /> },
              { label: "Google Ads", icon: <GoogleG /> },
              { label: "YouTube Ads", icon: <YouTube /> },
            ]}
          />
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={goServices}
            className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurMedia;