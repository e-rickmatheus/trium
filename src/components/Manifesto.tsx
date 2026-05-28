"use client";

interface ManifestoProps {
  t: {
    tag: string;
    title: string;
    intro: string;
    body1: string;
    body2: string;
    quote: string;
  };
}

export default function Manifesto({ t }: ManifestoProps) {
  return (
    <section id="manifesto" className="relative py-24 sm:py-32 overflow-hidden bg-white dark:bg-chumbo-dark">
      {/* Subtle lines/decorations */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-royal-blue/[0.02] dark:bg-royal-blue-light/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Header (Left) */}
          <div className="lg:col-span-5">
            <span className="font-space text-xs font-bold tracking-widest text-royal-blue dark:text-royal-blue-light uppercase block mb-4">
              {t.tag}
            </span>
            <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-chumbo dark:text-offwhite tracking-tight leading-[1.1] mb-6">
              {t.title}
            </h2>
            <div className="w-16 h-1 bg-royal-blue dark:bg-royal-blue-light rounded-full mb-6" />
          </div>

          {/* Copywriting / Manifesto Body (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-chumbo-light/95 dark:text-offwhite-darker/95">
            <p className="font-space text-lg sm:text-xl font-medium leading-relaxed text-gradient-chumbo">
              {t.intro}
            </p>

            <div className="font-sans text-base sm:text-lg leading-relaxed space-y-6 text-chumbo-light/85 dark:text-offwhite-darker/85">
              <p>{t.body1}</p>
              <p>{t.body2}</p>
            </div>

            {/* Manifesto Quote Block */}
            <div className="relative mt-4 p-8 rounded-2xl bg-offwhite dark:bg-chumbo border border-chumbo/5 dark:border-white/10 shadow-sm">
              <span className="font-space text-5xl text-royal-blue/10 dark:text-royal-blue-light/10 absolute top-4 left-4 pointer-events-none font-bold">“</span>
              <p className="font-space text-base italic font-semibold text-chumbo dark:text-offwhite relative z-10 pl-4 border-l-2 border-royal-blue dark:border-royal-blue-light">
                {t.quote}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
