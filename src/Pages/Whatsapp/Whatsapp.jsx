import React, { useMemo } from "react";

const FloatingActions = () => {
  // ✅ Updated details
  const WHATSAPP_NUMBER = "917828346051"; // countrycode + number (no +)
  const WHATSAPP_MESSAGE =
    "Hi, I want a quote. Please share details (size, pricing & timeline).";

  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent(WHATSAPP_MESSAGE);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }, [WHATSAPP_MESSAGE, WHATSAPP_NUMBER]);

  const phoneLink = "tel:+917828346051";
  const instagramLink =
    "https://www.instagram.com/creator.rpr?igsh=MWdobnE5azRqM3Jtaw%3D%3D";

  // ✅ Removed YouTube + Facebook, kept Instagram + Call
  const socials = [
    {
      name: "INSTAGRAM",
      href: instagramLink,
      bg: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]",
      Icon: InstagramIcon,
      iconClass: "text-white",
      external: true,
    },
    {
      name: "CALL",
      href: phoneLink,
      bg: "bg-slate-900",
      Icon: PhoneIcon,
      iconClass: "text-white",
      external: false,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {/* ✅ Social icons (top stack) */}
      <div className="flex flex-col items-end gap-2">
        {socials.map(({ name, href, bg, Icon, iconClass, external }) => (
          <a
            key={name}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            aria-label={name}
            className={[
              "group relative grid h-11 w-11 place-items-center rounded-2xl",
              bg,
              "shadow-lg ring-1 ring-black/5",
              "transition hover:-translate-y-0.5 hover:shadow-xl",
              "focus:outline-none focus:ring-4 focus:ring-sky-200",
            ].join(" ")}
          >
            <Icon className={`h-5 w-5 ${iconClass}`} />

            {/* Tooltip (desktop) */}
            <span
              className={[
                "pointer-events-none absolute right-14 hidden md:block",
                "whitespace-nowrap rounded-xl bg-slate-900 px-3 py-1.5",
                "text-[11px] font-semibold tracking-[0.16em] text-white",
                "opacity-0 translate-x-1 transition",
                "group-hover:opacity-100 group-hover:translate-x-0",
              ].join(" ")}
            >
              {name}
            </span>
          </a>
        ))}
      </div>

      {/* ✅ WhatsApp main button (bottom, highlighted) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WHATSAPP"
        className={[
          "group relative inline-flex items-center gap-3 rounded-2xl px-4 py-3",
          "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white",
          "shadow-xl ring-1 ring-black/5",
          "transition hover:-translate-y-0.5 hover:shadow-2xl",
          "focus:outline-none focus:ring-4 focus:ring-emerald-200",
        ].join(" ")}
      >
        <WhatsappIcon className="h-5 w-5 text-white" />
        <span className="text-[12px] font-semibold tracking-[0.18em]">
          WHATSAPP
        </span>

        {/* Tooltip */}
        <span className="pointer-events-none absolute -top-10 right-0 hidden md:block rounded-xl bg-slate-900 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 transition group-hover:opacity-100">
          QUICK QUOTE
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;

/* ================= ICONS ================= */

function WhatsappIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2a9.7 9.7 0 0 0-8.5 14.4L2 22l5.8-1.5A9.7 9.7 0 1 0 12 2Zm0 17.6c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.3A7.8 7.8 0 1 1 12 19.6Zm4.5-5.8c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.9c-.1.2-.2.2-.4.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5c.1-.1.2-.2.2-.4 0-.1 0-.3-.1-.4s-.5-1.2-.7-1.7c-.2-.4-.3-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.8 2.3.9 2.5.1.2 1.6 2.6 4 3.6.6.3 1 .4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.5 3.5h9A4 4 0 0 1 20.5 7.5v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M17.4 6.6h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 4h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3c0 1-1 2-2 2-9 0-16-7-16-16 0-1 1-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}