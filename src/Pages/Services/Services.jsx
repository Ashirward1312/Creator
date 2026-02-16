// src/components/Services.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Import ALL images (.jpeg)
import p1 from "../../images/p1.jpeg";
import p2 from "../../images/p2.jpeg";
import p3 from "../../images/p3.jpeg";
import p4 from "../../images/p4.jpeg";
import p5 from "../../images/p5.jpeg";
import p6 from "../../images/p6.jpeg";
import p7 from "../../images/p7.jpeg";
import p8 from "../../images/p8.jpeg";
import p9 from "../../images/p9.jpeg";
import p10 from "../../images/p10.jpeg";
import p11 from "../../images/p11.jpeg";
import p12 from "../../images/p12.jpeg";
import p13 from "../../images/p13.jpeg";
import p14 from "../../images/p14.jpeg";

import c5 from "../../images/c5.jpeg";
import c6 from "../../images/c6.jpeg";
import c8 from "../../images/c8.jpeg";
import c10 from "../../images/c10.jpeg";
import c11 from "../../images/c11.jpeg";

// ✅ key -> src map
const serviceImages = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  c5,
  c6,
  c8,
  c10,
  c11,
};

const services = [
  {
    title: "LED SIGN BOARDS",
    subtitle: "Premium LED sign boards for maximum visibility",
    points: [
      "LED Shine Edge Letters",
      "Main LED Boards",
      "LED Pillars",
      "LED Direction & Wayfinding Signs",
      "LED Quantum / Quanta Signs",
    ],
    imageKeys: ["p1", "p2", "p3", "p4", "p5", "p6"],
    accent: {
      card: "from-sky-50 to-white",
      ring: "ring-sky-200/70",
      icon: "text-sky-600",
      btn: "bg-sky-600 hover:bg-sky-700",
      glow: "from-sky-200/45 via-white/0 to-sky-300/35",
    },
  },
  {
    title: "LED SIGN BOARDS (PREMIUM)",
    subtitle: "Specialized LED signage & custom finishes",
    points: [
      "Clip-On LED Signs",
      "LED Fibre Reception Signs",
      "Shine Edge Steel LED Letters",
      "Custom Finishes: Silver, Gold, Rose Gold",
    ],
    imageKeys: ["p12", "p10", "p11"],
    accent: {
      card: "from-indigo-50 to-white",
      ring: "ring-indigo-200/70",
      icon: "text-indigo-600",
      btn: "bg-indigo-600 hover:bg-indigo-700",
      glow: "from-indigo-200/45 via-white/0 to-violet-300/35",
    },
  },
  {
    title: "HOARDING & OUTDOOR ADVERTISING",
    subtitle: "Outdoor campaigns for high-traffic attention",
    points: ["Unipole Hoardings", "Structural Hoardings", "LED Display Boards", "Sun Back Boards"],
    imageKeys: ["p14", "c5", "p7", "p9"],
    accent: {
      card: "from-amber-50 to-white",
      ring: "ring-amber-200/70",
      icon: "text-amber-600",
      btn: "bg-amber-600 hover:bg-amber-700",
      glow: "from-amber-200/45 via-white/0 to-orange-300/35",
    },
  },
  {
    title: "OUTDOOR & ON-SITE BRANDING",
    subtitle: "Complete on-ground branding solutions",
    points: [
      "Site Branding & Site Pan",
      "Kitchen Branding",
      "Leaflet Distribution",
      "Employee Uniforms & T-Shirts",
      "ID Cards & Booklets",
      "Professional Fitting & Installation",
    ],
    imageKeys: ["p13", "p8", "p9"],
    accent: {
      card: "from-emerald-50 to-white",
      ring: "ring-emerald-200/70",
      icon: "text-emerald-600",
      btn: "bg-emerald-600 hover:bg-emerald-700",
      glow: "from-emerald-200/45 via-white/0 to-teal-300/35",
    },
  },
  {
    title: "BRANDING & PRINTING MATERIALS",
    subtitle: "Flex, vinyl & UV printing with premium materials",
    points: [
      "Flex Printing",
      "Vinyl & Eco Vinyl Printing",
      "UV Printing",
      "Sunboard Vinyl",
      "Glow Sign Boards",
      "Shine Boards",
      "Retro Glow Boards",
      "Retro Direction Signage",
    ],
    imageKeys: ["p2", "p6", "p3"],
    accent: {
      card: "from-violet-50 to-white",
      ring: "ring-violet-200/70",
      icon: "text-violet-600",
      btn: "bg-violet-600 hover:bg-violet-700",
      glow: "from-violet-200/45 via-white/0 to-fuchsia-300/35",
    },
  },
  {
    title: "ELEVATION & CLADDING WORK",
    subtitle: "Modern ACP & aluminium elevation solutions",
    points: ["Aluminium Elevation", "ACP Elevation", "ACP / Panel Cladding Work"],
    imageKeys: ["c6", "c8", "c10", "c11"],
    accent: {
      card: "from-rose-50 to-white",
      ring: "ring-rose-200/70",
      icon: "text-rose-600",
      btn: "bg-rose-600 hover:bg-rose-700",
      glow: "from-rose-200/45 via-white/0 to-pink-300/35",
    },
  },
];

const CheckIcon = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5 flex-shrink-0 ${className}`} aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.704 5.29a1 1 0 0 1 0 1.416l-7.2 7.2a1 1 0 0 1-1.416 0l-3.2-3.2a1 1 0 1 1 1.416-1.416l2.492 2.492 6.492-6.492a1 1 0 0 1 1.416 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const Services = () => {
  const navigate = useNavigate();
  const goServicesPage = () => navigate("/services");

  // ✅ Preview modal state
  const [preview, setPreview] = useState({
    open: false,
    cardIndex: 0,
    imgIndex: 0,
  });

  const activeService = services[preview.cardIndex];
  const keys = useMemo(() => activeService?.imageKeys ?? [], [activeService]);
  const total = keys.length || 1;

  const safeIndex = Math.min(preview.imgIndex, Math.max(total - 1, 0));
  const activeKey = keys[safeIndex];
  const activeSrc = activeKey ? serviceImages[activeKey] : null;

  const openPreview = (cardIndex, imgIndex = 0) => {
    setPreview({ open: true, cardIndex, imgIndex });
  };

  const closePreview = () => setPreview((p) => ({ ...p, open: false }));

  const next = () =>
    setPreview((p) => {
      const t = (services[p.cardIndex]?.imageKeys ?? []).length || 1;
      return { ...p, imgIndex: (p.imgIndex + 1) % t };
    });

  const prev = () =>
    setPreview((p) => {
      const t = (services[p.cardIndex]?.imageKeys ?? []).length || 1;
      return { ...p, imgIndex: (p.imgIndex - 1 + t) % t };
    });

  // ✅ Auto change every 5 seconds (modal open)
  useEffect(() => {
    if (!preview.open) return;
    if (keys.length <= 1) return;

    const id = setInterval(() => next(), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preview.open, preview.cardIndex, keys.length]);

  // ✅ ESC close + arrows
  useEffect(() => {
    if (!preview.open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preview.open, preview.cardIndex]);

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-64 max-w-6xl rounded-[3rem] bg-gradient-to-r from-sky-100/40 via-violet-100/30 to-rose-100/40 blur-2xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold tracking-tight text-sky-600 uppercase">OUR SERVICES</p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Premium materials, clean finishing, and professional installation—made to boost visibility & brand recall.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr">
          {services.map((s, idx) => {
            const cardKeys = s.imageKeys ?? [];
            const mainKey = cardKeys[0];
            const mainSrc = mainKey ? serviceImages[mainKey] : null;

            return (
              <article
                key={s.title}
                className={[
                  "group relative overflow-hidden rounded-3xl bg-gradient-to-b p-6",
                  "shadow-sm ring-1 transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-xl",
                  "flex h-full flex-col",
                  s.accent.card,
                  s.accent.ring,
                ].join(" ")}
              >
                {/* glow */}
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100",
                    "bg-gradient-to-tr",
                    s.accent.glow,
                  ].join(" ")}
                />

                {/* ✅ Card gallery (image inside card) */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => openPreview(idx, 0)}
                    className="w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                    aria-label={`Open ${s.title} images`}
                  >
                    <div className="aspect-[16/10] w-full">
                      {mainSrc ? (
                        <img
                          src={mainSrc}
                          alt={s.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-sm text-slate-500">
                          Image not found
                        </div>
                      )}
                    </div>
                  </button>

                  {/* thumbs */}
                  {cardKeys.length > 1 && (
                    <div className="mt-3 grid grid-cols-5 gap-2">
                      {cardKeys.slice(0, 5).map((k, i) => {
                        const src = serviceImages[k];
                        return (
                          <button
                            key={k}
                            type="button"
                            onClick={() => openPreview(idx, i)}
                            className="overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 transition focus:outline-none focus:ring-2 focus:ring-sky-300"
                            aria-label={`Open image ${i + 1} for ${s.title}`}
                            title={k}
                          >
                            <div className="aspect-square">
                              {src ? (
                                <img
                                  src={src}
                                  alt={k}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                  decoding="async"
                                  draggable={false}
                                />
                              ) : null}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="relative mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{s.subtitle}</p>
                  </div>

                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-white/80 ring-1 ring-black/5 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" className={`h-6 w-6 ${s.accent.icon}`} aria-hidden="true">
                      <path
                        d="M12 2l3 6 6 .9-4.5 4.4 1.1 6.2L12 17.9 6.4 19.5l1.1-6.2L3 8.9 9 8l3-6z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="relative mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-slate-700">
                      <CheckIcon className={s.accent.icon} />
                      <span className="leading-6">{p}</span>
                    </li>
                  ))}
                </ul>

                {/* ✅ Keep a simple preview button also (optional) */}
                <div className="relative mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => openPreview(idx, 0)}
                    className={[
                      "w-full rounded-2xl px-4 py-2.5",
                      "text-sm font-semibold text-white shadow-sm",
                      "ring-1 ring-black/5 transition",
                      "flex items-center justify-center gap-2",
                      s.accent.btn,
                    ].join(" ")}
                  >
                    Open Gallery
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* ✅ Bottom CTA (navigate to services page) */}
        
      </div>

      {/* ✅ Preview Modal (images open on click) */}
      {preview.open && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label="Close preview"
            onClick={closePreview}
          />

          <div className="relative mx-auto flex min-h-full max-w-3xl items-center justify-center px-4 py-8">
            <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10">
              {/* top bar */}
              <div className="flex items-center justify-between gap-4 px-4 py-4 border-b border-slate-200/70">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {services[preview.cardIndex]?.title}
                  </p>
                  <p className="text-xs text-slate-600">
                    {safeIndex + 1} / {keys.length || 1} • Tip: use ← → keys
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closePreview}
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Close
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* image area */}
              <div className="p-4 sm:p-5 bg-slate-50">
                <div className="relative mx-auto w-full max-w-[760px]">
                  <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
                    <div className="h-[60vh] min-h-[360px] max-h-[720px] w-full">
                      {activeSrc ? (
                        <img
                          key={`${preview.cardIndex}-${safeIndex}`}
                          src={activeSrc}
                          alt={activeKey || "preview"}
                          className="h-full w-full object-contain bg-white"
                          draggable={false}
                          decoding="async"
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center p-6 text-center text-sm text-slate-500">
                          Image not found
                        </div>
                      )}
                    </div>

                    {/* arrows */}
                    {keys.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={prev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2.5 ring-1 ring-slate-200 hover:bg-white"
                          aria-label="Previous"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-slate-800">
                            <path
                              d="M15 19L8 12L15 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>

                        <button
                          type="button"
                          onClick={next}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2.5 ring-1 ring-slate-200 hover:bg-white"
                          aria-label="Next"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-slate-800">
                            <path
                              d="M9 5L16 12L9 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* thumbnails */}
                  {keys.length > 1 && (
                    <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">
                      {keys.map((k, i) => {
                        const src = serviceImages[k];
                        const isActive = i === safeIndex;

                        return (
                          <button
                            key={k}
                            type="button"
                            onClick={() => setPreview((p) => ({ ...p, imgIndex: i }))}
                            className={[
                              "flex-shrink-0 overflow-hidden rounded-xl ring-2 transition",
                              isActive ? "ring-sky-500" : "ring-transparent hover:ring-slate-300",
                            ].join(" ")}
                            aria-label={`Select image ${i + 1}`}
                            title={k}
                          >
                            <div className="h-16 w-20 sm:h-16 sm:w-24 bg-slate-100">
                              {src ? (
                                <img
                                  src={src}
                                  alt={k}
                                  className="h-full w-full object-cover"
                                  draggable={false}
                                  loading="lazy"
                                  decoding="async"
                                />
                              ) : null}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              {/* ✅ no extra content */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;