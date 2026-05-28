"use client";

import { useState } from "react";

interface PillarData {
  title: string;
  subtitle: string;
  desc: string;
  details: string[];
  nextStep: string;
}

interface EcosystemProps {
  t: {
    tag: string;
    title: string;
    sub: string;
    nextStep: string;
    cta: string;
    included: string;
    pillars: {
      infra: PillarData;
      ads: PillarData;
      automation: PillarData;
      content: PillarData;
    };
  };
}

export default function Ecosystem({ t }: EcosystemProps) {
  const [activePillar, setActivePillar] = useState<"infra" | "ads" | "automation" | "content">("infra");

  const icons = {
    infra: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    ads: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    automation: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    content: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  };

  const pillarKeys: Array<"infra" | "ads" | "automation" | "content"> = ["infra", "ads", "automation", "content"];
  const activePillarData = t.pillars[activePillar];

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32 bg-offwhite">
      {/* Background visual connections */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-royal-blue/10 via-transparent to-royal-blue/10 -translate-x-1/2 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-space text-xs font-bold tracking-widest text-royal-blue uppercase block mb-4">
            {t.tag}
          </span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-chumbo tracking-tight mb-6">
            {t.title}
          </h2>
          <p className="font-sans text-lg text-chumbo-light/85">
            {t.sub}
          </p>
        </div>

        {/* Dynamic Interactive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* List of Pillars (Interactive Cards on Left) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {pillarKeys.map((key) => {
              const isActive = activePillar === key;
              const pillar = t.pillars[key];
              return (
                <div
                  key={key}
                  onClick={() => setActivePillar(key)}
                  className={`cursor-pointer text-left p-6 rounded-2xl glass-card transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "border-royal-blue bg-white shadow-md shadow-royal-blue/5 scale-[1.01]"
                      : "border-transparent bg-white/40 hover:bg-white/70 hover:border-chumbo/10"
                  }`}
                >
                  {/* Decorative connection bar on left for active state */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-royal-blue transition-transform duration-300 ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  
                  <div className="flex gap-5 items-start">
                    <div
                      className={`p-3.5 rounded-xl transition-colors duration-300 ${
                        isActive
                          ? "bg-royal-blue text-white"
                          : "bg-chumbo/5 text-chumbo"
                      }`}
                    >
                      {icons[key]}
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-lg sm:text-xl text-chumbo">
                        {pillar.title}
                      </h3>
                      <p className="font-space text-xs font-semibold text-royal-blue uppercase tracking-wider mt-1.5">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Pillar Details Dashboard (On Right) */}
          <div className="lg:col-span-6 flex">
            <div className="w-full p-8 rounded-3xl bg-white border border-chumbo/5 shadow-xl shadow-chumbo/3 flex flex-col justify-between animate-fade-in relative overflow-hidden">
              {/* Visual Connection Overlay representing TRIUM logo links */}
              <div className="absolute right-[-40px] top-[-40px] w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-1.5 h-6 bg-royal-blue rounded-full" />
                  <h4 className="font-space font-bold text-2xl text-chumbo">
                    {activePillarData.title}
                  </h4>
                </div>

                {/* Main Description */}
                <p className="font-sans text-base sm:text-lg text-chumbo-light leading-relaxed mb-8">
                  {activePillarData.desc}
                </p>

                {/* Features List */}
                <h5 className="font-space font-bold text-xs text-chumbo-muted uppercase tracking-widest mb-4">
                  {t.included}
                </h5>
                <ul className="flex flex-col gap-3">
                  {activePillarData.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm font-sans font-medium text-chumbo-light/90">
                      <svg
                        className="w-5 h-5 text-royal-blue shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic CTA trigger link */}
              <div className="mt-10 pt-6 border-t border-chumbo/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-chumbo-muted uppercase tracking-wider animate-fade-in" key={activePillar}>
                  {activePillarData.nextStep}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-bold text-royal-blue hover:text-royal-blue-hover transition-colors group font-space"
                >
                  {t.cta}
                  <svg
                    className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
