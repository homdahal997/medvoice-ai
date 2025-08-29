"use client";

import { Navigation } from "./navigation";
import { HeroSection } from "./hero-section";
import { FeaturesSection } from "./features-section";
import { BenefitsSection } from "./benefits-section";
import { Footer } from "./footer";

export function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
