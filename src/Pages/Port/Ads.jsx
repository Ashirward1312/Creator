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
    <path
      d="M18 14l2-2M46 14l-2-2M18 46l2 2M46 46l-2 2"
      opacity="0.9"
    />
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
const GoogleG = () => (
  <D>
    <circle cx="32" cy="32" r="22" fill="currentColor" />
    <path
      d="M44 32.2c0 7.8-5.3 13.3-13 13.3A13.5 13.5 0 0 1 31 18c3.2 0 6 1.2 8 3.1l-3.2 3.1c-3.9-3.8-10.8-1-10.8 5.8 0 3.7 3 6.7 6.9 6.7 4.2 0 5.7-3 5.9-4.6H31v-4h13c.1.7 0 2 0 4.1Z"
      fill="white"
    />
  </D>
);
const YouTube = () => (
  <D>
    <rect x="12" y="18" width="40" height="28" rx="8" fill="currentColor" />
    <path d="M30 26v12l12-6-12-6Z" fill="white" />
  </D>
);

/* ---------------- UI (3D hover + click navigate) ---------------- */
const MediaItem = ({ icon, label, onGo }) => (
  <li>
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onGo();
      }}
      className={[
        "group/item w-full text-left",
        "flex items-center gap-4 rounded-2xl p-2",
        "transition duration-200 touch-manipulation",
        "hover:bg-slate-50 active:scale-[0.99]",
        "focus:outline-none focus:ring-2 focus:ring-sky-300",
      ].join(" ")}
      aria-label={`Open services for ${label}`}
    >
      <div
        className={[
          "grid place-items-center h-12 w-12 rounded-2xl bg-slate-50 ring-1 ring-slate-200",
          "transition duration-300 transform-gpu",
          "group-hover/item:bg-white group-hover/item:ring-sky-200",
          // subtle 3D-ish pop on icon tile
          "group-hover/item:[transform:perspective(900px)_translateY(-2px)_rotateX(10deg)_rotateY(-10deg)]",
        ].join(" ")}
      >
        {icon}
      </div>

      <p className="text-sm sm:text-base font-medium text-slate-900">{label}</p>

      <span
        className={[
          "ml-auto text-xs font-semibold text-slate-500",
          "opacity-0 translate-x-1 transition duration-200",
          "group-hover/item:opacity-100 group-hover/item:translate-x-0",
        ].join(" ")}
      >
        View →
      </span>
    </button>
  </li>
);

const MediaCard = ({ title, accent, items, onGo }) => (
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
      "group relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200",
      "shadow-xl shadow-slate-200/60",
      "cursor-pointer touch-manipulation",
      "transition duration-300 transform-gpu",
      // ✅ 3D hover (tilt + lift)
      "hover:[transform:perspective(1200px)_translateY(-8px)_rotateX(4deg)_rotateY(-4deg)]",
      "active:scale-[0.99]",
      "focus:outline-none focus:ring-2 focus:ring-sky-300",
    ].join(" ")}
  >
    {/* glow */}
    <div
      aria-hidden="true"
      className={[
        "absolute -top-20 left-1/2 h-40 w-[520px] -translate-x-1/2 blur-3xl opacity-30",
        `bg-gradient-to-r ${accent}`,
      ].join(" ")}
    />

    {/* sheen/highlight on hover */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <div className="absolute -inset-24 bg-[radial-gradient(40rem_20rem_at_30%_10%,rgba(255,255,255,0.65),transparent_55%)]" />
    </div>

    <div className="relative p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
          {title}
        </h3>

        {/* ✅ removed "Click" badge */}
        <span className="text-xs font-semibold text-slate-500">
          View services →
        </span>
      </div>

      <ul className="mt-6 grid gap-2">
        {items.map((it) => (
          <MediaItem key={it.label} icon={it.icon} label={it.label} onGo={onGo} />
        ))}
      </ul>
    </div>

    {/* bottom accent line */}
    <div
      aria-hidden="true"
      className="h-1 w-full bg-gradient-to-r from-sky-200 via-violet-200 to-emerald-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
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
        className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-72 w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200 via-violet-200 to-emerald-200 blur-3xl opacity-40"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sky-600 font-semibold tracking-[0.25em] uppercase text-xs sm:text-sm">
            Our Media
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Branding & Advertising Services
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2">
          <MediaCard
            title="Outdoor Advertising"
            accent="from-sky-500 to-indigo-600"
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
            accent="from-emerald-500 to-teal-600"
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
            accent="from-amber-500 to-rose-600"
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
            accent="from-violet-500 to-fuchsia-600"
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