// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Hero from "./Pages/Hero/Hero.jsx";
import Header from "./Pages/Header/Header.jsx";
import Services from "./Pages/Services/Services.jsx";
import Why from "./Pages/Why/Why.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Client from "./Pages/Client/Client.jsx";
import Faq from "./Pages/Faq/Faq.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import Mission from "./Pages/Mission/Mission.jsx";
import Testimonials from "./Pages/Testimonials/Test.jsx";
import Portfolio from "./Pages/Port/Port.jsx";
import Whatsapp from "./Pages/Whatsapp/Whatsapp.jsx";
import Ads from "./Pages/Port/Ads.jsx";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // ✅ FIX: Route change hote hi page top se start hoga
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const PageWrap = ({ children }) => (
    <div className="bg-gradient-to-b from-sky-50 via-white to-white">
      {children}
    </div>
  );

  return (
    // ✅ Mobile viewport issue fix:
    // min-h-screen (100vh) mobile me address bar ki wajah se jump/move karta hai
    // isliye 100svh use kiya (stable height)
    <div className="min-h-[100svh] bg-white text-slate-900 flex flex-col overflow-x-hidden">
      <Header />

      {/* ✅ main ko flex-1 de diya => footer always bottom + layout stable */}
      <main className="flex-1 min-h-0">
        {/* ✅ HOME: without route */}
        {isHome ? (
          <PageWrap>
            <Hero />
            <Ads />
            <Whatsapp />
            <Portfolio />
            <Why />
            <Mission />
            <Testimonials />
            <Faq />
          </PageWrap>
        ) : (
          /* ✅ Other pages: routed */
          <Routes>
            <Route
              path="/services"
              element={
                <PageWrap>
                  <Services />
                </PageWrap>
              }
            />

            <Route
              path="/why"
              element={
                <PageWrap>
                  <Why />
                </PageWrap>
              }
            />

            <Route
              path="/about"
              element={
                <PageWrap>
                  <About />
                </PageWrap>
              }
            />

            <Route
              path="/clients"
              element={
                <PageWrap>
                  <Client />
                </PageWrap>
              }
            />

            <Route
              path="/contact"
              element={
                <PageWrap>
                  <Contact />
                </PageWrap>
              }
            />

            <Route
              path="/faq"
              element={
                <PageWrap>
                  <Faq />
                </PageWrap>
              }
            />

            <Route
              path="/portfolio"
              element={
                <PageWrap>
                  <Portfolio />
                </PageWrap>
              }
            />
            <Route
              path="/mission"
              element={
                <PageWrap>
                  <Mission />
                </PageWrap>
              }
            />
            <Route
              path="/testimonials"
              element={
                <PageWrap>
                  <Testimonials />
                </PageWrap>
              }
            />

            {/* ✅ unknown route => home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;