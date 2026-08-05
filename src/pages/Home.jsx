import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import DashboardSection from "../components/DashboardSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* HOME SECTIONS */}

      <div className="home-section section-1">
        <TrustedCompanies />
      </div>

      <div className="home-section section-2">
        <Features />
      </div>

      <div className="home-section section-3">
        <DashboardSection />
      </div>

      <div className="home-section section-4">
        <WhyChooseUs />
      </div>

      <div className="home-section section-5">
        <Testimonials />
      </div>

      <div className="home-section section-6">
        <Pricing />
      </div>

      <div className="home-section section-7">
        <FAQ />
      </div>

      <div className="home-section section-8">
        <CTA />
      </div>

      <Footer />

    </div>
  );
};

export default Home;