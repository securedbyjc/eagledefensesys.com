// src/components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-edsCharcoal text-white py-20 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Securing Tomorrow’s Infrastructure — Today.
        </h1>
        <p className="text-lg md:text-xl text-edsLightGray mb-8">
          AI-powered GRC solutions for GovCon, driven by Zero Trust, cyber resilience, and multi-cloud security architecture.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#contact" className="bg-edsGold text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-600">
            Schedule a Demo
          </a>
          <a href="#about" className="border border-edsGold text-edsGold px-6 py-3 rounded-xl hover:bg-edsGold hover:text-black">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}