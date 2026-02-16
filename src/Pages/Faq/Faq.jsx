// src/components/FAQ.jsx
import React from "react";

const faqs = [
  {
    q: "What details do you need to share a quote?",
    a: "Please share your location (city/area), required size (approx. width × height), service type, and a front/site photo if possible. This helps us give accurate pricing and the right suggestion.",
  },
  {
    q: "Do you provide on-site measurement and installation?",
    a: "Yes, we provide on-site measurement and professional installation so the final output looks clean, aligned, and safe.",
  },
  {
    q: "How much time does a typical project take?",
    a: "Timelines depend on size and design complexity. After design approval, most standard work is completed within a few working days. We confirm the exact timeline in the quotation.",
  },
  {
    q: "Do you make custom designs and premium finishes?",
    a: "Yes. We create custom designs and can provide premium finishes like Silver, Gold, and Rose Gold (as per material and availability).",
  },
  {
    q: "Do you offer after-support?",
    a: "Yes, we provide after-support and guidance. If any adjustment is needed, you can contact us and we will assist accordingly.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* Heading */}
        <div className="text-center">
          <p className="text-2xl font-bold tracking-tight text-sky-700 uppercase">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Quick answers about quotes, timelines, and installation.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-white ring-1 ring-sky-100 p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm sm:text-base font-semibold text-slate-900">
                  {item.q}
                </span>

                <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition group-open:bg-sky-600 group-open:text-white group-open:ring-sky-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-7">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;