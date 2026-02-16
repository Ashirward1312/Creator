// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const phoneDisplay = "+91 78283 46051";
  const phoneTel = "+917828346051";
  const whatsappLink = "https://wa.me/917828346051";
  const instagramLink =
    "https://www.instagram.com/creator.rpr?igsh=MWdobnE5azRqM3Jtaw%3D%3D";

  // ✅ Google Maps link (simple)
  const mapLink = "https://maps.app.goo.gl/"; // optional short link
  // If you want exact place link (recommended), use this:
  const mapPlaceLink =
    "https://www.google.com/maps?q=Creator%20The%20Advertising%20behind%20Vishal%20Mega%20Mart%20near%20Taaza%20Idli%20Raipur%20CG";

  // ✅ Mind Bridge Tech WhatsApp
  const mbtWa = "https://wa.me/917470958844";

  return (
    <footer className="bg-gradient-to-b from-sky-50 via-white to-white ring-1 ring-sky-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand (logo removed) */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <div>
                <p className="text-sm font-semibold text-slate-900">CREATOR AGENCY</p>
              </div>
            </Link>

            <p className="mt-4 text-sm text-slate-600 leading-7">
              Premium signage and branding solutions with clean finishing, durable materials,
              and professional installation support.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Pages</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-sky-700" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-sky-700" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-sky-700" to="/clients">
                  Clients
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-sky-700" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>LED Sign Boards & Letters</li>
              <li>Hoardings / Outdoor Advertising</li>
              <li>Flex, Vinyl & UV Printing</li>
              <li>ACP Elevation & Cladding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-slate-900">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                Phone:{" "}
                <a className="font-semibold text-sky-700 hover:text-sky-800" href={`tel:${phoneTel}`}>
                  {phoneDisplay}
                </a>
              </li>

              <li>
                WhatsApp:{" "}
                <a
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {phoneDisplay}
                </a>
              </li>

              <li>
                Instagram:{" "}
                <a
                  className="font-semibold text-sky-700 hover:text-sky-800"
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  creator.rpr
                </a>
              </li>

              {/* ✅ Map link added */}
              <li>
                Map:{" "}
                <a
                  className="font-semibold text-sky-700 hover:text-sky-800"
                  href={mapPlaceLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Location
                </a>
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                WhatsApp
              </a>

              {/* ✅ Optional small map button */}
              <a
                href={mapPlaceLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
              >
                Map
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-sky-100 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {year}{" "}
            <a
              href={mbtWa}
              target="_blank"
              rel="noreferrer"
              className="font-semibold bg-gradient-to-r from-sky-700 via-indigo-700 to-emerald-700 bg-clip-text text-transparent hover:opacity-90"
            >
              Mind Bridge Tech
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;