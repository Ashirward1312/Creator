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
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="min-h-[calc(100vh-64px)]">
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

            {/* (Optional) agar inke routes bhi chahiye to */}
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