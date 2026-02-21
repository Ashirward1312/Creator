// src/components/Contact.jsx
import React, { useMemo, useState } from "react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d929.5981068730482!2d81.6537494!3d21.2559284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd0048ba9cf5%3A0x446193b98282ea8b!2sCreator%20The%20Advertising!5e0!3m2!1sen!2sin!4v1771254413885!5m2!1sen!2sin";

const Contact = () => {
  const BUSINESS = {
    name: "Creator The Advertising",
    phoneDisplay: "+91 78283 46051",
    phoneTel: "+917828346051",
    email: "creator.rpr@gmail.com",
    address:
      "Creator The Advertising, behind Vishal Mega Mart, near Taaza Idli, Raipur, CG",
    whatsapp: "917828346051",
    hours: "Mon–Sat • 10:00 AM – 8:00 PM",
  };

  const services = [
    "LED Signage",
    "Hoardings / Outdoor Advertising",
    "On-Site Branding",
    "Printing (Flex/Vinyl/UV)",
    "Elevation / ACP Cladding",
    "Other",
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0],
    location: "",
    message: "",
  });

  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const waText = useMemo(() => {
    const lines = [
      `Hello ${BUSINESS.name},`,
      ``,
      `I’d like a quote for: ${form.service}`,
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Location: ${form.location || "-"}`,
      `Requirement: ${form.message || "-"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [BUSINESS.name, form]);

  const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${waText}`;

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent(`Quote Request - ${form.service}`);
    const body = encodeURIComponent(
      [
        `Hello ${BUSINESS.name},`,
        ``,
        `I’d like a quote for: ${form.service}`,
        `Name: ${form.name || "-"}`,
        `Phone: ${form.phone || "-"}`,
        `Location: ${form.location || "-"}`,
        `Requirement: ${form.message || "-"}`,
      ].join("\n")
    );
    return `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
  }, [BUSINESS.email, BUSINESS.name, form]);

  const handleWhatsAppSend = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please enter your Name and Phone number.");
      return;
    }
    setError("");
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppSend();
  };

  const IconWrap = ({ children }) => (
    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
      {children}
    </span>
  );

  return (
<section
  id="contact"
  className="relative overflow-hidden bg-white
             pt-[calc(4rem+env(safe-area-inset-top)+6px)] sm:pt-[calc(3rem+env(safe-area-inset-top)+5px)]"
>      {/* LIGHT BLUE + WHITE BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="absolute -top-44 left-1/2 h-96 w-[62rem] -translate-x-1/2 rounded-full bg-sky-200/35 blur-3xl" />
        <div className="absolute -bottom-48 right-[-10rem] h-96 w-96 rounded-full bg-sky-200/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-sky-700 uppercase">
            CONTACT US
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Request a Quote for Signage & Branding
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Share your requirement and we’ll respond with recommended size, material options,
            estimated cost, and timeline.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* LEFT: Contact Info */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl ring-1 ring-sky-100 shadow-sm">
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-700 uppercase">
                    Direct Contact
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    Speak with our team
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-6">
                    For site measurement, finishing options, installation schedule and urgent work.
                  </p>
                </div>

                <div className="hidden sm:block rounded-2xl bg-sky-600 px-4 py-2 text-[12px] font-semibold text-white">
                  {BUSINESS.hours}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="group flex items-center justify-between rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 transition hover:ring-sky-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <IconWrap>
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path
                          d="M7 4h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3c0 1-1 2-2 2-9 0-16-7-16-16 0-1 1-2 2-2Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </IconWrap>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Phone</p>
                      <p className="text-sm text-slate-600">{BUSINESS.phoneDisplay}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700">
                    Tap to call
                  </span>
                </a>

                <a
                  href={mailtoLink}
                  className="group flex items-center justify-between rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200 transition hover:ring-sky-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <IconWrap>
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path
                          d="M4 7h16v10H4V7Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 8l8 6 8-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </IconWrap>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">{BUSINESS.email}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700">
                    Compose
                  </span>
                </a>

                <div className="flex items-start justify-between rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200">
                  <div className="flex items-start gap-3">
                    <IconWrap>
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                        <path
                          d="M12 22s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </IconWrap>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Address</p>
                      <p className="text-sm text-slate-600 leading-6">{BUSINESS.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info band */}
              <div className="mt-6 rounded-3xl bg-sky-50 ring-1 ring-sky-100 p-5">
                <p className="text-sm font-semibold text-slate-900">For a faster quote, share:</p>
                <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  <div className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Size / approximate dimensions
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Location / area
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Finish preference
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Timeline / urgency
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form (submit => WhatsApp) */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl ring-1 ring-sky-100 shadow-sm">
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-700 uppercase">
                Request a Quote
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Share your requirement
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Fill the details below and submit — WhatsApp will open with your message.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Full Name <span className="text-sky-700">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 outline-none focus:ring-4 focus:ring-sky-200"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Phone Number <span className="text-sky-700">*</span>
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Your phone number"
                    className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 outline-none focus:ring-4 focus:ring-sky-200"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-800">Service</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 outline-none focus:ring-4 focus:ring-sky-200"
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-800">
                      Location (City/Area)
                    </label>
                    <input
                      name="location"
                      value={form.location}
                      onChange={onChange}
                      placeholder="e.g., Raipur"
                      className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 outline-none focus:ring-4 focus:ring-sky-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800">Requirement</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Write your requirement..."
                    className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 outline-none focus:ring-4 focus:ring-sky-200"
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm text-sky-800 ring-1 ring-sky-200">
                    {error}
                  </div>
                ) : null}

                <div className="mt-2 flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white shadow-sm
                    bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
                  >
                    Send on WhatsApp
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-sky-50 px-4 py-3 ring-1 ring-sky-100">
                  <p className="text-sm text-slate-600">Prefer a quick call?</p>
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    className="text-sm font-semibold text-sky-700 hover:text-sky-800"
                  >
                    Call now
                  </a>
                </div>
              </form>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-center text-[12px] font-semibold text-sky-700 hover:text-sky-800"
              >
                Open WhatsApp with this message →
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Google Map (added) */}
        <div className="mt-8 rounded-3xl bg-white/90 backdrop-blur-xl ring-1 ring-sky-100 shadow-sm">
          <div className="p-6 sm:p-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-[0.28em] text-sky-700 uppercase">
                LOCATION
              </p>
              <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-slate-900">
                Find us on Google Maps
              </h3>
              <p className="mt-2 text-sm text-slate-600">{BUSINESS.address}</p>
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl ring-1 ring-slate-200 bg-slate-50">
              <div className="h-72 sm:h-96 w-full">
                <iframe
                  src={MAP_SRC}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  title="Creator The Advertising - Map"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-slate-600">
          We typically respond within working hours. WhatsApp is the fastest option for estimates.
        </div>
      </div>
    </section>
  );
};

export default Contact;