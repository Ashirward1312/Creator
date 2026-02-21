// src/Pages/Portfolio/Portfolio.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

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

const categories = [
  "All",
  "ACP Elevation",
  "3D LED Signages",
  "Outdoor Media",
  "Store Branding",
  "Media Branding",
  "Corporate Gifting",
];

// ✅ All filter chips = EXTRA LIGHT BLUE theme
const categoryStyles = {
  All: { grad: "from-sky-300 to-sky-200", dot: "bg-sky-300" },
  "ACP Elevation": { grad: "from-sky-300 to-sky-200", dot: "bg-sky-300" },
  "3D LED Signages": { grad: "from-sky-300 to-sky-200", dot: "bg-sky-300" },
  "Outdoor Media": { grad: "from-sky-300 to-sky-200", dot: "bg-sky-300" },
  "Store Branding": { grad: "from-sky-300 to-sky-200", dot: "bg-sky-300" },
  "Media Branding": { grad: "from-sky-300 to-sky-200", dot: "bg-sky-300" },
  "Corporate Gifting": { grad: "from-sky-300 to-sky-200", dot: "bg-sky-300" },
};

const Arrow = ({ dir = "left" }) => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    {dir === "left" ? (
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const Portfolio = () => {
  const images = useMemo(
    () => [
      { id: "p1", src: p1, title: "Shop Sign", tags: ["All", "Store Branding"] },
      { id: "p2", src: p2, title: "LED / Glow Sign Board", tags: ["All", "3D LED Signages"] },
      {
        id: "p3",
        src: p3,
        title: "3D Letter Sign Board / Dimensional Signage",
        tags: ["All", "3D LED Signages"],
      },
      { id: "p4", src: p4, title: "Backlit Acrylic Sign Board", tags: ["All", "3D LED Signages"] },
      { id: "p5", src: p5, title: "Backlit Acrylic Sign Board", tags: ["All", "3D LED Signages"] },
      { id: "p6", src: p6, title: "LED Acrylic / Glow Sign Board", tags: ["All", "3D LED Signages"] },
      { id: "p7", src: p7, title: "Pylon / Monolith Sign Board", tags: ["All", "Outdoor Media"] },
      { id: "p8", src: p8, title: "3D Acrylic Letter Sign Board", tags: ["All", "3D LED Signages"] },
      { id: "p9", src: p9, title: "Pylon / Monolith Sign Board", tags: ["All", "Outdoor Media"] },
      { id: "p10", src: p10, title: "LED Acrylic 3D Sign Board", tags: ["All", "3D LED Signages"] },
      { id: "p11", src: p11, title: "LED Acrylic 3D Sign Board", tags: ["All", "3D LED Signages"] },
      {
        id: "p12",
        src: p12,
        title: "SS Titanium Gold Sign Board / 3D Titanium Metal Signage",
        tags: ["All", "Media Branding"],
      },
      { id: "p13", src: p13, title: "Wayfinding Signage / Directional Sign Post", tags: ["All", "Outdoor Media"] },
      { id: "p14", src: p14, title: "Digital LED Display Board", tags: ["All", "Outdoor Media"] },

      { id: "c5", src: c5, title: "Pylon Sign Board", tags: ["All", "Outdoor Media"] },
      { id: "c6", src: c6, title: "LED Backlit Acrylic Sign Board", tags: ["All", "3D LED Signages"] },
      { id: "c8", src: c8, title: "3D Acrylic Cut-out Sign", tags: ["All", "3D LED Signages"] },
      { id: "c10", src: c10, title: "Non‑Illuminated 3D Acrylic Sign Board", tags: ["All", "3D LED Signages"] },
      { id: "c11", src: c11, title: "Fabric Light Box", tags: ["All", "Store Branding"] },
    ],
    []
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((img) => img.tags.includes(activeCategory));
  }, [images, activeCategory]);

  // Slider ref
  const trackRef = useRef(null);

  const scrollTrack = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]");
    const gap = 16; // gap-4
    const step = card ? card.clientWidth + gap : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Modal
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = filteredImages.length;

  const openAt = (idx) => {
    setActiveIndex(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);
  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  useEffect(() => {
    setOpen(false);
    setActiveIndex(0);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [activeCategory]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, total]);

  const chip = (cat) => categoryStyles[cat] || categoryStyles.All;

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white">
      {/* background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute -top-48 left-1/2 h-96 w-[68rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200/35 via-violet-200/25 to-rose-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.30em] text-sky-700 uppercase">PORTFOLIO</p>
          <h2 className="mt-3 text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            VIEW OUR WORK
          </h2>
        </div>

        {/* ✅ Filter Bar (mobile scroll, tablet/desktop wrap) */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div
            className={[
              "flex max-w-full items-center justify-start sm:justify-center gap-2",
              "rounded-3xl bg-white/80 backdrop-blur-xl p-2 ring-1 ring-slate-200 shadow-sm",
              "overflow-x-auto sm:overflow-visible",
              "flex-nowrap sm:flex-wrap",
              "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            ].join(" ")}
          >
            {categories.map((cat) => {
              const active = cat === activeCategory;
              const s = chip(cat);

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    "shrink-0 rounded-2xl px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold transition",
                    "focus:outline-none focus:ring-2 focus:ring-sky-300",
                    active
                      ? `text-slate-900 shadow-sm bg-gradient-to-r ${s.grad} ring-1 ring-sky-200/70`
                      : "bg-white/90 text-slate-700 ring-1 ring-slate-200 hover:bg-sky-50 hover:ring-sky-200/60",
                  ].join(" ")}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className={["h-2 w-2 rounded-full", active ? "bg-slate-900/70" : s.dot].join(" ")} />
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ✅ Slider Wrapper */}
        <div className="mt-8 sm:mt-10 rounded-3xl bg-white/80 backdrop-blur-xl ring-1 ring-sky-100 shadow-sm p-3 sm:p-6">
          <div className="relative mt-4 sm:mt-6">
            {/* left arrow (show from md) */}
            <button
              type="button"
              onClick={() => scrollTrack(-1)}
              aria-label="Scroll left"
              className="hidden md:grid absolute left-2 top-1/2 -translate-y-1/2 z-10
                         h-11 w-11 place-items-center rounded-2xl bg-white/95
                         ring-1 ring-slate-200 shadow-sm hover:bg-white transition"
            >
              <Arrow dir="left" />
            </button>

            {/* right arrow (show from md) */}
            <button
              type="button"
              onClick={() => scrollTrack(1)}
              aria-label="Scroll right"
              className="hidden md:grid absolute right-2 top-1/2 -translate-y-1/2 z-10
                         h-11 w-11 place-items-center rounded-2xl bg-white/95
                         ring-1 ring-slate-200 shadow-sm hover:bg-white transition"
            >
              <Arrow dir="right" />
            </button>

            {/* side fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-10 bg-gradient-to-r from-white/90 to-transparent rounded-l-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-10 bg-gradient-to-l from-white/90 to-transparent rounded-r-3xl" />

            {/* slider track */}
            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-auto pb-3 scroll-smooth
                         snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]
                         [&::-webkit-scrollbar]:hidden"
            >
              {filteredImages.map((img, idx) => (
                <button
                  key={img.id}
                  data-card
                  type="button"
                  onClick={() => openAt(idx)}
                  className={[
                    "snap-center shrink-0 text-left",
                    "w-[78vw] max-w-[320px] sm:w-[280px] lg:w-[300px]",
                    "rounded-3xl p-3 bg-white ring-1 ring-slate-200/80 shadow-sm",
                    "transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-sky-200",
                  ].join(" ")}
                >
                  <div className="overflow-hidden rounded-2xl bg-slate-100">
                    <div className="aspect-square">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                  </div>

                  <div className="mt-3 rounded-2xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200/70">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-5 h-10 overflow-hidden">
                      {img.title}
                    </p>
                  </div>
                </button>
              ))}

              {filteredImages.length === 0 && (
                <div className="w-full py-10 text-center text-slate-600">
                  No items found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal preview */}
      {open && total > 0 && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio Image Preview"
          onClick={close}
        >
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

          <div className="relative mx-auto flex min-h-full max-w-6xl items-center justify-center px-3 sm:px-6 lg:px-8 py-5 sm:py-8">
            <div
              className="w-full overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white/90 backdrop-blur-xl ring-1 ring-white/40 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.75)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* top bar */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-200/70 px-3 sm:px-5 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {filteredImages[activeIndex]?.title}
                  </p>
                  <p className="text-xs text-slate-500">
                    {activeCategory} • {activeIndex + 1}/{total}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={close}
                  aria-label="Close preview"
                  className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-white ring-1 ring-slate-200 hover:bg-slate-50 transition"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* image */}
              <div className="relative bg-slate-50 p-3 sm:p-4">
                <div className="h-[65svh] sm:h-[72vh] min-h-[280px] sm:min-h-[380px] max-h-[780px] w-full rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
                  <img
                    src={filteredImages[activeIndex]?.src}
                    alt={filteredImages[activeIndex]?.title}
                    className="h-full w-full object-contain"
                    loading="eager"
                    decoding="async"
                    draggable={false}
                  />
                </div>

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="hidden sm:grid absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/95 ring-1 ring-slate-200 hover:bg-white transition"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M15 6l-6 6 6 6"
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
                  aria-label="Next image"
                  className="hidden sm:grid absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/95 ring-1 ring-slate-200 hover:bg-white transition"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* thumbnails */}
              <div className="bg-white/85 border-t border-slate-200/70 p-3 sm:p-4">
                <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-1">
                  {filteredImages.map((img, idx) => {
                    const active = idx === activeIndex;
                    return (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Open ${img.title}`}
                        className={[
                          "flex-shrink-0 overflow-hidden rounded-xl ring-2 transition",
                          active ? "ring-sky-500" : "ring-transparent hover:ring-slate-300",
                        ].join(" ")}
                        title={img.title}
                      >
                        <div className="h-14 w-16 sm:h-16 sm:w-24 bg-slate-100">
                          <img
                            src={img.src}
                            alt={img.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* mobile hint */}
                <p className="mt-2 text-[11px] sm:hidden text-slate-500">
                  Tip: Swipe thumbnails / Tap image cards to open
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;