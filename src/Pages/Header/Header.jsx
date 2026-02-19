// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/bg.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection (ONLY shadow/border change, height change nahi hoga)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = [
    { label: "HOME", to: "/" },
    { label: "SERVICES", to: "/services" },
    { label: "ABOUT", to: "/about" },
    { label: "CLIENTS", to: "/clients" },
    { label: "CONTACT", to: "/contact", highlight: true },
  ];

  const navClass = (item) => ({ isActive }) =>
    [
      "rounded-xl px-4 py-2 text-[11px] font-bold tracking-[0.2em] transition-all duration-200",
      item.highlight
        ? [
            "bg-sky-600 text-white shadow-md shadow-sky-600/25",
            "hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/30 hover:-translate-y-0.5",
            "focus:outline-none focus:ring-4 focus:ring-sky-200",
            isActive ? "bg-sky-700" : "",
          ].join(" ")
        : [
            "hover:bg-sky-50 hover:text-sky-700",
            isActive
              ? "bg-sky-50 text-sky-700 ring-1 ring-sky-200"
              : "text-slate-600",
          ].join(" "),
    ].join(" ");

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "bg-white/95 backdrop-blur-2xl border-b transition-all duration-300",
          scrolled
            ? "border-sky-100/80 shadow-lg shadow-sky-900/5"
            : "border-transparent shadow-sm",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* ✅ Fixed height (no jumping) */}
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setOpen(false)}
            >
              {!logoError ? (
                <img
                  src={Logo}
                  alt="Creator Agency"
                  className={[
                    "w-auto max-w-[260px] sm:max-w-[300px] object-contain select-none",
                    "h-12 sm:h-16", // ✅ stable height
                    "transition-all duration-300",
                    "drop-shadow-[0_4px_12px_rgba(2,132,199,0.15)]",
                    "group-hover:drop-shadow-[0_6px_16px_rgba(2,132,199,0.25)]",
                  ].join(" ")}
                  loading="eager"
                  decoding="async"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-12 sm:h-16 px-5 grid place-items-center rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 shadow-md shadow-sky-600/25">
                  <span className="text-sm font-extrabold tracking-[0.25em] text-white">
                    CREATOR
                  </span>
                </div>
              )}
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={navClass(item)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <button
              className={[
                "lg:hidden rounded-xl p-2.5 transition-all duration-200",
                open
                  ? "bg-sky-50 text-sky-700 ring-1 ring-sky-200"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-sky-50 hover:ring-sky-200 hover:text-sky-700",
              ].join(" ")}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={[
          "fixed inset-0 top-0 z-40 lg:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* ✅ Panel always below header (matches h-16 / sm:h-20) */}
        <div
          className={[
            "absolute top-16 sm:top-20 inset-x-0 mx-4 sm:mx-6 mt-2 rounded-2xl bg-white shadow-2xl shadow-sky-900/10 ring-1 ring-slate-200/80",
            "transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          ].join(" ")}
        >
          <div className="p-3">
            <div className="grid gap-1.5">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-xl px-4 py-3.5 text-[11px] font-bold tracking-[0.2em] transition-all duration-200",
                      item.highlight
                        ? [
                            "bg-sky-600 text-white shadow-md shadow-sky-600/25",
                            "hover:bg-sky-700",
                            isActive ? "bg-sky-700" : "",
                          ].join(" ")
                        : isActive
                        ? "bg-sky-50 text-sky-700 ring-1 ring-sky-200"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-3 border-t border-slate-100 pt-3 px-4 pb-1">
              <p className="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
                Call us: +91 99509 94243
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;