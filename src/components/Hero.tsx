"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  t: {
    tag: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    subheadline: string;
    cta1: string;
    cta2: string;
    metric1: string;
    metric2: string;
    metric3: string;
  };
}

export default function Hero({ t }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-offwhite-pure via-offwhite to-white">
      {/* Background Decorative Mesh / Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,34,41,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,34,41,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Blur Accents */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-royal-blue/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-chumbo/5 blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-chumbo/5 shadow-sm shadow-chumbo/2 mb-6">
              <span className="w-2 h-2 rounded-full bg-royal-blue animate-pulse" />
              <span className="font-space text-xs font-bold tracking-wider text-chumbo/80 uppercase">
                {t.tag}
              </span>
            </div>

            {/* Headline with Space Grotesk and Multi-Language Highlights */}
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-chumbo leading-[1.08] mb-6">
              {t.headlinePart1}
              <span className="text-royal-blue relative inline-block font-bold">
                {t.headlineHighlight}
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-royal-blue/10 -z-10 rounded-full" />
              </span>
              {t.headlinePart2}
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg sm:text-xl text-chumbo-light/80 font-normal leading-relaxed mb-8 max-w-2xl">
              {t.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-chumbo text-white font-space text-base font-bold border border-transparent hover:bg-royal-blue transition-all duration-300 shadow-md shadow-chumbo/10 hover:shadow-royal-blue/20 hover:-translate-y-0.5"
              >
                {t.cta1}
                <svg className="w-5 h-5 ml-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-chumbo font-space text-base font-bold border border-chumbo/10 hover:border-chumbo hover:bg-offwhite-pure transition-all duration-300"
              >
                {t.cta2}
              </a>
            </div>

            {/* Micro proof points */}
            <div className="mt-12 pt-8 border-t border-chumbo/5 flex items-center gap-8 w-full">
              <div>
                <p className="text-2xl font-bold font-space text-chumbo">{t.metric1.split(" ")[0]}</p>
                <p className="text-xs font-bold font-space text-chumbo-muted uppercase tracking-wider">{t.metric1.split(" ").slice(1).join(" ")}</p>
              </div>
              <div className="w-px h-8 bg-chumbo/10" />
              <div>
                <p className="text-2xl font-bold font-space text-chumbo">{t.metric2.split(" ")[0]}</p>
                <p className="text-xs font-bold font-space text-chumbo-muted uppercase tracking-wider">{t.metric2.split(" ").slice(1).join(" ")}</p>
              </div>
              <div className="w-px h-8 bg-chumbo/10" />
              <div>
                <p className="text-2xl font-bold font-space text-royal-blue">{t.metric3.split(" ")[0]}</p>
                <p className="text-xs font-bold font-space text-chumbo-muted uppercase tracking-wider">{t.metric3.split(" ").slice(1).join(" ")}</p>
              </div>
            </div>

          </div>

          {/* PNG Symbol Integration on Right */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className={`w-full max-w-[560px] transition-all duration-1000 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
              <img
                src="/symbol.png"
                alt="TRIUM Lab Symbol"
                className="w-full h-auto animate-float drop-shadow-[0_20px_50px_rgba(10,59,194,0.08)] rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
