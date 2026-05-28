"use client";

import { useState } from "react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  desc: string;
}

interface MethodologyProps {
  t: {
    tag: string;
    title: string;
    sub: string;
    steps: Step[];
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
  };
}

export default function Methodology({ t }: MethodologyProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [card1Flipped, setCard1Flipped] = useState(false);
  const [card2Flipped, setCard2Flipped] = useState(false);

  return (
    <section id="methodology" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-chumbo-dark transition-colors duration-300">
      {/* Decorative Blur Accent */}
      <div className="absolute left-[-100px] bottom-[-100px] w-96 h-96 rounded-full bg-chumbo/5 dark:bg-royal-blue/3 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-6">
            <span className="font-space text-xs font-bold tracking-widest text-royal-blue dark:text-royal-blue-light uppercase block mb-4">
              {t.tag}
            </span>
            <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-chumbo dark:text-offwhite tracking-tight leading-[1.1]">
              {t.title}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-base sm:text-lg text-chumbo-light/85 dark:text-offwhite-darker/85 max-w-xl">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Timeline Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-start">
          
          {/* Connecting Line (Only visible on large screens) */}
          <div className="hidden lg:block absolute top-[32px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-royal-blue/20 via-royal-blue to-royal-blue/20 dark:from-royal-blue-light/20 dark:via-royal-blue-light dark:to-royal-blue-light/20 -z-10" />

          {t.steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center cursor-pointer group w-full"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Step circle indicator */}
                <div
                  className={`w-16 h-16 rounded-2xl border flex items-center justify-center font-space font-extrabold text-lg transition-all duration-300 ${
                    isActive
                      ? "bg-royal-blue dark:bg-royal-blue-light text-white border-royal-blue dark:border-royal-blue-light shadow-lg shadow-royal-blue/20 dark:shadow-royal-blue-light/20 scale-[1.03]"
                      : "bg-offwhite dark:bg-chumbo text-chumbo dark:text-offwhite border-chumbo/5 dark:border-white/10 group-hover:bg-chumbo/5 dark:group-hover:bg-chumbo-light/20"
                  }`}
                >
                  {step.number}
                </div>

                {/* Animated content expansion container */}
                <div
                  className={`transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) overflow-hidden w-full ${
                    isActive
                      ? "max-h-[220px] opacity-100 mt-5 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {/* Title & Subtitle */}
                  <h3 className="font-space font-bold text-lg sm:text-xl text-chumbo dark:text-offwhite">
                    {step.title}
                  </h3>
                  <span className="font-space text-xs font-semibold text-royal-blue dark:text-royal-blue-light uppercase tracking-wider block mt-1.5 mb-3">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-chumbo-light/80 dark:text-offwhite-darker/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Two 3D Flipping Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24">
          
          {/* User Journey Card */}
          <div
            className="lg:col-span-6 h-[260px] w-full cursor-pointer group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border border-chumbo/5 dark:border-white/10 hover:border-chumbo/10 dark:hover:border-white/20"
            onClick={() => setCard1Flipped(!card1Flipped)}
          >
            {/* Smooth Background Transition */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                card1Flipped
                  ? "bg-chumbo dark:bg-chumbo-dark border border-white/5 dark:border-white/10"
                  : "bg-offwhite dark:bg-chumbo group-hover:bg-chumbo dark:group-hover:bg-chumbo-dark border border-chumbo/5 dark:border-white/10 group-hover:border-white/5"
              }`}
            />

            {/* Front Side - Fades & Scales Down */}
            <div
              className={`absolute inset-0 p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                card1Flipped
                  ? "opacity-0 scale-95 pointer-events-none"
                  : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none"
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-royal-blue/10 dark:bg-royal-blue-light/10 flex items-center justify-center text-royal-blue dark:text-royal-blue-light mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="font-space font-bold text-xl sm:text-2xl text-chumbo dark:text-offwhite">
                {t.card1Title}
              </h4>
              <span className="text-xs font-semibold text-royal-blue dark:text-royal-blue-light uppercase tracking-widest mt-4 font-space flex items-center gap-1.5 transition-transform group-hover:translate-x-1 duration-300">
                Ver Detalhes <span className="text-sm font-sans">→</span>
              </span>
            </div>

            {/* Back Side - Fades & Scales Up */}
            <div
              className={`absolute inset-0 p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                card1Flipped
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
              }`}
            >
              <h4 className="font-space font-bold text-lg text-royal-blue dark:text-royal-blue-light mb-3 uppercase tracking-wider">
                {t.card1Title}
              </h4>
              <p className="font-sans text-sm sm:text-base text-offwhite-darker/90 leading-relaxed">
                {t.card1Desc}
              </p>
            </div>
          </div>

          {/* Analytics Reports Card */}
          <div
            className="lg:col-span-6 h-[260px] w-full cursor-pointer group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border border-chumbo/5 dark:border-white/10 hover:border-chumbo/10 dark:hover:border-white/20"
            onClick={() => setCard2Flipped(!card2Flipped)}
          >
            {/* Smooth Background Transition */}
            <div
              className={`absolute inset-0 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                card2Flipped
                  ? "bg-chumbo dark:bg-chumbo-dark border border-white/5 dark:border-white/10"
                  : "bg-offwhite dark:bg-chumbo group-hover:bg-chumbo dark:group-hover:bg-chumbo-dark border border-chumbo/5 dark:border-white/10 group-hover:border-white/5"
              }`}
            />

            {/* Front Side - Fades & Scales Down */}
            <div
              className={`absolute inset-0 p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                card2Flipped
                  ? "opacity-0 scale-95 pointer-events-none"
                  : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none"
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-royal-blue/10 dark:bg-royal-blue-light/10 flex items-center justify-center text-royal-blue dark:text-royal-blue-light mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="13" width="4" height="7" rx="1" />
                  <rect x="10" y="4" width="4" height="16" rx="1" />
                  <rect x="17" y="9" width="4" height="11" rx="1" />
                </svg>
              </div>
              <h4 className="font-space font-bold text-xl sm:text-2xl text-chumbo dark:text-offwhite">
                {t.card2Title}
              </h4>
              <span className="text-xs font-semibold text-royal-blue dark:text-royal-blue-light uppercase tracking-widest mt-4 font-space flex items-center gap-1.5 transition-transform group-hover:translate-x-1 duration-300">
                Ver Detalhes <span className="text-sm font-sans">→</span>
              </span>
            </div>

            {/* Back Side - Fades & Scales Up */}
            <div
              className={`absolute inset-0 p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                card2Flipped
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
              }`}
            >
              <h4 className="font-space font-bold text-lg text-royal-blue dark:text-royal-blue-light mb-3 uppercase tracking-wider">
                {t.card2Title}
              </h4>
              <p className="font-sans text-sm sm:text-base text-offwhite-darker/90 leading-relaxed">
                {t.card2Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
