// src/Pages/Testimonials/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Showroom Owner",
    company: "Retail",
    rating: 5,
    text:
      "Excellent finishing and very professional work. The LED signage looks premium and the installation was done neatly on time. Highly recommended for branding work.",
  },
  {
    name: "Neha Sharma",
    role: "Marketing Manager",
    company: "Healthcare",
    rating: 5,
    text:
      "Great coordination and clear communication. They shared design options, helped us choose the right finish, and delivered exactly as promised. Quality is top-notch.",
  },
  {
    name: "Amit Khan",
    role: "Project Coordinator",
    company: "Construction",
    rating: 5,
    text:
      "Reliable team for site branding and outdoor work. Strong structure, clean output, and timely execution. Support after installation was also quick and helpful.",
  },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        className={[
          "h-4 w-4",
          i < count ? "text-sky-600" : "text-slate-200",
        ].join(" ")}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L10 1.5z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white">
      {/* light blue + white background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute -top-44 left-1/2 h-96 w-[62rem] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold tracking-tight text-sky-700 uppercase">
            TESTIMONIALS
          </p>
          
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real feedback from clients across signage, branding, printing and outdoor advertising.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex h-full flex-col rounded-3xl bg-white/90 backdrop-blur-xl ring-1 ring-sky-100 shadow-sm p-6 sm:p-7"
            >
              <StarRow count={t.rating} />

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-7">
                “{t.text}”
              </p>

              <div className="mt-auto pt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 font-extrabold">
                  {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* bottom CTA */}
        <div className="mt-10 flex justify-center">
      
        </div>
      </div>
    </section>
  );
};

export default Testimonials;