// src/components/About.jsx
import React, { useEffect, useState } from "react";
import a1 from "../../images/a1.png";
import a2 from "../../images/a2.png";
import a3 from "../../images/a3.png";
import Laser from "../../images/laser.jpg";
import Eco from "../../images/eco.jpeg";

const capabilities = [
  "LED Sign Boards, Letters & Reception Signage",
  "Hoardings & Outdoor Advertising Structures",
  "ACP / Aluminium Elevation & Cladding Work",
  "Flex, Vinyl, Eco-Vinyl & UV Printing",
  "On-site Measurement, Installation & After-Support",
];

const highlights = [
  {
    title: "5+ Years of Execution Experience",
    desc: "Proven delivery across signage, outdoor media, printing and elevation work.",
    accent: {
      ring: "ring-sky-200/70",
      icon: "text-sky-700 bg-sky-50 ring-sky-100",
      bar: "from-sky-600 to-cyan-500",
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
    title: "End-to-End, In-House Workflow",
    desc: "Concept, design, fabrication, printing and installation—handled under one roof.",
    accent: {
      ring: "ring-indigo-200/70",
      icon: "text-indigo-700 bg-indigo-50 ring-indigo-100",
      bar: "from-indigo-600 to-sky-600",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M7 12h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M14 7l3 5-3 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 7l-3 5 3 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Premium Materials & Clean Finishing",
    desc: "Built for durability, visibility and a sharp premium look in real-world conditions.",
    accent: {
      ring: "ring-emerald-200/70",
      icon: "text-emerald-700 bg-emerald-50 ring-emerald-100",
      bar: "from-emerald-600 to-lime-500",
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
    title: "Professional Installation & Support",
    desc: "Accurate measurements, safe fitting and dependable after-install assistance.",
    accent: {
      ring: "ring-amber-200/70",
      icon: "text-amber-700 bg-amber-50 ring-amber-100",
      bar: "from-amber-600 to-orange-500",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 14v-2a8 8 0 0 1 16 0v2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 14h2v4H6a2 2 0 0 1-2-2 2 2 0 0 1 2-2Zm12 0h-2v4h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    no: "01",
    title: "Discover & Measure",
    desc: "We understand your goal, review the site, take measurements and plan placement for maximum visibility.",
    accent: {
      bar: "bg-sky-600",
      chip: "bg-sky-100 text-sky-700",
      ring: "ring-sky-200/70",
      soft: "from-sky-200/40 via-white to-white",
    },
  },
  {
    no: "02",
    title: "Design & Finalize",
    desc: "We share mockups and recommend finishes (Silver / Gold / Rose Gold) so the brand look stays premium.",
    accent: {
      bar: "bg-indigo-600",
      chip: "bg-indigo-100 text-indigo-700",
      ring: "ring-indigo-200/70",
      soft: "from-indigo-200/40 via-white to-white",
    },
  },
  {
    no: "03",
    title: "Build & Quality Check",
    desc: "Fabrication is done with strong structure and clean finishing—followed by a QC check before dispatch.",
    accent: {
      bar: "bg-emerald-600",
      chip: "bg-emerald-100 text-emerald-700",
      ring: "ring-emerald-200/70",
      soft: "from-emerald-200/40 via-white to-white",
    },
  },
  {
    no: "04",
    title: "Install & Support",
    desc: "We coordinate safe installation with a clean final output—and stay available for support after completion.",
    accent: {
      bar: "bg-amber-600",
      chip: "bg-amber-100 text-amber-800",
      ring: "ring-amber-200/70",
      soft: "from-amber-200/40 via-white to-white",
    },
  },
];

const certificateImages = [
  { src: a1, alt: "Registration Certificate - 1" },
  { src: a2, alt: "Registration Certificate - 2" },
  { src: a3, alt: "Registration Certificate - 3" },
];

// ✅ Simple machine blocks (normal picture + small content side)
// ✅ NO CTA button
const machineBlocks = [
  {
    key: "laser",
    title: "Laser Cutting",
    desc: "Precision cutting for letters & custom shapes.",
    img: Laser,
    ring: "ring-sky-200/70",
    tag: "bg-sky-100 text-sky-700 ring-sky-200/70",
    dot: "bg-sky-600",
    points: ["Clean edges", "Accurate shapes", "Fast production"],
  },
  {
    key: "eco",
    title: "Eco Solvent Printing",
    desc: "Premium print for flex, vinyl & outdoor branding.",
    img: Eco,
    ring: "ring-emerald-200/70",
    tag: "bg-emerald-100 text-emerald-700 ring-emerald-200/70",
    dot: "bg-emerald-600",
    points: ["Rich colors", "Outdoor durability", "Sharp output"],
  },
];

const About = () => {
  // ✅ Certificate preview modal
  const [openCertPreview, setOpenCertPreview] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const totalCerts = certificateImages.length;

  const openPreviewAt = (idx = 0) => {
    setActiveCertIndex(idx);
    setOpenCertPreview(true);
  };

  const goPrev = () => setActiveCertIndex((i) => (i - 1 + totalCerts) % totalCerts);
  const goNext = () => setActiveCertIndex((i) => (i + 1) % totalCerts);

  // ✅ ESC + arrows for certificate modal
  useEffect(() => {
    if (!openCertPreview) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenCertPreview(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCertPreview]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* premium background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-[58rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-200/45 via-indigo-200/25 to-emerald-200/35 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:52px_52px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
            ABOUT
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Premium execution for LED signage, outdoor advertising, printing and
            elevation work—built to last and designed to stand out.
          </p>
        </div>

        {/* Main about card */}
        <div className="mt-10 rounded-[28px] bg-gradient-to-br from-sky-300/30 via-indigo-300/15 to-emerald-300/20 p-[1px] shadow-[0_30px_90px_-55px_rgba(2,132,199,0.35)]">
          <div className="rounded-[27px] bg-white/85 backdrop-blur-xl ring-1 ring-white/50 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              {/* left content */}
              <div>
                <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-white">
                  ABOUT US
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-slate-900">
                  Visibility-first branding that increases trust and footfall.
                </h3>

                <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-700 leading-7">
                  <p>
                    We deliver visually powerful and durable branding solutions
                    with <span className="font-semibold text-slate-900">5+ years</span>{" "}
                    of hands-on industry experience.
                  </p>
                  <p>
                    From concept and design to fabrication, printing and on-site
                    installation, we manage the full workflow—so you get faster
                    timelines and a superior final look.
                  </p>
                </div>
              </div>

              {/* right: capabilities */}
              <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-7 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.95)] ring-1 ring-white/10">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-white/70 uppercase">
                  What we handle
                </p>
                <h4 className="mt-2 text-lg font-semibold">
                  End-to-end execution, under one roof.
                </h4>

                <ul className="mt-5 space-y-3 text-sm text-white/85">
                  {capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span className="leading-6">{c}</span>
                    </li>
                  ))}
                </ul>

                {/* simple info box (no CTA) */}
                <div className="mt-6 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <p className="text-sm font-semibold">Quick info</p>
                  <p className="mt-1 text-sm text-white/75 leading-6">
                    Share your location, size and requirement—we’ll guide you with the right option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Machines section (no crop + smaller grid) */}
        <div className="mt-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-slate-900 uppercase">
              IN‑HOUSE MACHINES
            </p>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-slate-900">
              Simple setup, clean output
            </h3>
          </div>

          <div className="mt-8 grid gap-6">
            {machineBlocks.map((m) => (
              <div
                key={m.key}
                className={[
                  "rounded-[28px] bg-white/85 backdrop-blur-xl p-4 sm:p-5",
                  "shadow-sm ring-1",
                  m.ring,
                ].join(" ")}
              >
                <div className="grid gap-4 md:grid-cols-12 md:items-center">
                  {/* ✅ picture (object-contain so it won't cut) */}
                  <div className="md:col-span-6">
                    <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200">
                      <div className="h-44 sm:h-52 w-full bg-slate-50 p-3">
                        <img
                          src={m.img}
                          alt={m.title}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* small content */}
                  <div className="md:col-span-6">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ring-1",
                        m.tag,
                      ].join(" ")}
                    >
                      <span className={["mr-2 h-2 w-2 rounded-full", m.dot].join(" ")} />
                      {m.title}
                    </span>

                    <p className="mt-3 text-sm text-slate-700 leading-6">{m.desc}</p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900/60" />
                          <span className="leading-6">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Registration Certificate card */}
        <div className="mt-8 rounded-[28px] bg-gradient-to-br from-sky-300/30 via-indigo-300/15 to-emerald-300/20 p-[1px] shadow-[0_30px_90px_-55px_rgba(2,132,199,0.35)]">
          <div className="rounded-[27px] bg-white/85 backdrop-blur-xl ring-1 ring-white/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-white uppercase">
                  Registration Certificate
                </span>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
                  Preview our registration certificate documents.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openPreviewAt(0)}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-black/10 hover:bg-slate-800 transition"
              >
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Certificate Preview Modal */}
        {openCertPreview && (
          <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Registration Certificate Preview"
            onClick={() => setOpenCertPreview(false)}
          >
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />

            <div className="relative mx-auto flex min-h-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
              <div
                className="w-full rounded-[28px] bg-white/90 backdrop-blur-xl ring-1 ring-white/40 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.75)]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-3 p-5 sm:p-6 border-b border-slate-200/60">
                  <div>
                    <p className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
                      Registration Certificate
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      {activeCertIndex + 1} / {totalCerts} • Tip: Use ← → arrows
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex items-center justify-center rounded-full bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center justify-center rounded-full bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition"
                    >
                      Next
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpenCertPreview(false)}
                      className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition ring-1 ring-black/10"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
                    <div className="relative bg-slate-50">
                      <div className="h-[62vh] min-h-[360px] max-h-[720px] w-full p-3 sm:p-4">
                        <img
                          src={certificateImages[activeCertIndex].src}
                          alt={certificateImages[activeCertIndex].alt}
                          className="h-full w-full object-contain bg-white rounded-xl"
                          loading="eager"
                          draggable={false}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={goPrev}
                        className="hidden sm:grid absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/90 ring-1 ring-slate-200 hover:bg-white transition"
                        aria-label="Previous image"
                      >
                        <span className="text-slate-900 font-bold">‹</span>
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="hidden sm:grid absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full bg-white/90 ring-1 ring-slate-200 hover:bg-white transition"
                        aria-label="Next image"
                      >
                        <span className="text-slate-900 font-bold">›</span>
                      </button>
                    </div>

                    <div className="px-4 py-3 border-t border-slate-200/70">
                      <p className="text-xs sm:text-sm text-slate-700 font-semibold">
                        {certificateImages[activeCertIndex].alt}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-900 uppercase">
                      Pages
                    </p>

                    <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
                      {certificateImages.map((img, idx) => {
                        const active = idx === activeCertIndex;
                        return (
                          <button
                            key={img.alt}
                            type="button"
                            onClick={() => setActiveCertIndex(idx)}
                            className={[
                              "flex-shrink-0 rounded-2xl bg-white ring-1 overflow-hidden shadow-sm transition",
                              active ? "ring-slate-900" : "ring-slate-200 hover:ring-slate-300",
                            ].join(" ")}
                            aria-label={`Open ${img.alt}`}
                          >
                            <div className="h-20 w-28 sm:h-24 sm:w-36 bg-slate-50 p-2">
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="h-full w-full object-contain bg-white rounded-xl"
                                loading="lazy"
                                draggable={false}
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:auto-rows-fr">
          {highlights.map((h) => (
            <div
              key={h.title}
              className={[
                "h-full rounded-3xl bg-white/85 backdrop-blur-xl p-5 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                h.accent.ring,
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className={["grid h-11 w-11 place-items-center rounded-2xl ring-1", h.accent.icon].join(" ")}>
                  {h.icon}
                </div>
                <div className={["h-1.5 w-14 rounded-full bg-gradient-to-r", h.accent.bar].join(" ")} />
              </div>

              <p className="mt-4 text-base font-semibold text-slate-900 leading-snug">
                {h.title}
              </p>
              <p className="mt-1 text-xs text-slate-600 leading-5">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* process */}
        <div className="mt-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.28em] text-slate-900 uppercase">
              PROCESS
            </p>
            <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-slate-900">
              A Clean Process That Produces Premium Results
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear steps, consistent quality checks and professional installation—no confusion, no delays.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {steps.map((s, idx) => (
              <div key={s.no} className="relative">
                {/* connector line */}
                {idx !== steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-[78px] h-[calc(100%-62px)] w-px bg-slate-200"
                  />
                )}

                <div className={["rounded-[28px] bg-gradient-to-b p-[1px]", s.accent.soft].join(" ")}>
                  <div className={["rounded-[27px] bg-white/90 backdrop-blur-xl p-6 sm:p-7 ring-1", s.accent.ring].join(" ")}>
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white text-sm font-semibold ring-1 ring-black/10">
                          {s.no}
                        </div>
                        <span
                          aria-hidden="true"
                          className={["absolute -left-2 top-1 h-10 w-1.5 rounded-full", s.accent.bar].join(" ")}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                            {s.title}
                          </h4>
                          <span
                            className={["w-fit rounded-full px-3 py-1 text-[11px] font-semibold", s.accent.chip].join(" ")}
                          >
                            Step {idx + 1}
                          </span>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-7">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;