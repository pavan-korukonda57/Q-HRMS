

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// 🌀 Import your loader component
import PageLoader from "./components/PageLoader";

// 🏠 Home Page
import HomePage from "./pages/HomePage";

// 🌐 Main Pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

// 🧭 Dropdown Pages
import EventsPage from "./pages/EventsPage";
import FaqsPage from "./pages/FaqsPage";
import OurTeamPage from "./pages/OurTeamPage";
import PricingPlansPage from "./pages/PricingPlansPage";
import CareersPage from "./pages/CareersPage";

export default function App() {
  return (
    <Router>
      {/* 🌀 Global Loader Component */}
      <PageLoader />

      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* 🏠 Home Page */}
        <Route path="/home" element={<HomePage />} />

        {/* 🌐 Main Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 🧭 Dropdown Pages */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/pricing-plans" element={<PricingPlansPage />} />
        <Route path="/careers" element={<CareersPage />} />

        {/* Catch-all: redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}
