"use client";

import { useState, useEffect } from "react";
import { Language } from "@/app/page";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: {
    manifesto: string;
    ecosystem: string;
    methodology: string;
    cta: string;
  };
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: "pt" as Language, label: "PT", flag: "🇧🇷" },
    { code: "en" as Language, label: "EN", flag: "🇺🇸" },
    { code: "es" as Language, label: "ES", flag: "🇪🇸" },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-300 rounded-2xl bg-white border border-chumbo/5 ${
        scrolled
          ? "py-2.5 shadow-lg shadow-chumbo/5"
          : "py-4 shadow-sm"
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo - PNG Image integrated */}
        <a href="#" className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]">
          <img
            src="/logo.png"
            alt="TRIUM LAB Logo"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#manifesto"
            className="text-sm font-semibold text-chumbo/70 hover:text-royal-blue transition-colors duration-200 font-space"
          >
            {t.manifesto}
          </a>
          <a
            href="#ecosystem"
            className="text-sm font-semibold text-chumbo/70 hover:text-royal-blue transition-colors duration-200 font-space"
          >
            {t.ecosystem}
          </a>
          <a
            href="#methodology"
            className="text-sm font-semibold text-chumbo/70 hover:text-royal-blue transition-colors duration-200 font-space"
          >
            {t.methodology}
          </a>
        </div>

        {/* Language dropdown and CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Language Selector Dropdown (Premium) */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-chumbo/5 hover:bg-chumbo/10 text-chumbo text-xs font-bold font-space transition-colors outline-none focus:ring-1 focus:ring-royal-blue/30"
              aria-label="Select language"
            >
              <svg className="w-4.5 h-4.5 text-chumbo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20M12 2v20" />
              </svg>
              <span>{currentLangObj.label}</span>
              <svg className={`w-3 h-3 text-chumbo transition-transform duration-200 ${langMenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-xl bg-white border border-chumbo/5 shadow-xl p-1.5 flex flex-col gap-1 z-[100] animate-fade-in">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold font-space transition-colors flex items-center justify-between ${
                      lang === l.code
                        ? "bg-royal-blue text-white"
                        : "hover:bg-chumbo/5 text-chumbo"
                    }`}
                  >
                    <span>{l.label}</span>
                    <span>{l.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Link (Premium Accent) */}
          <a
            href="https://wa.me/553131931393"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-green-600/10 hover:bg-green-600/15 text-green-600 text-sm font-bold font-space transition-colors outline-none"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-chumbo text-offwhite font-space text-sm font-bold border border-transparent hover:bg-royal-blue transition-all duration-300 shadow-sm"
          >
            {t.cta}
          </a>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-chumbo/5 hover:bg-chumbo/10 text-chumbo text-xs font-bold font-space transition-colors outline-none"
              aria-label="Select language"
            >
              <svg className="w-4.5 h-4.5 text-chumbo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a14.5 14.5 0 000 20M12 2a14.5 14.5 0 010 20M2 12h20M12 2v20" />
              </svg>
              <span>{currentLangObj.label}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-xl bg-white border border-chumbo/5 shadow-xl p-1 flex flex-col gap-0.5 z-[100]">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold font-space transition-colors ${
                      lang === l.code
                        ? "bg-royal-blue text-white"
                        : "hover:bg-chumbo/5 text-chumbo"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-chumbo hover:bg-chumbo/5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[350px] opacity-100 mt-4 px-6 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 py-3 border-t border-chumbo/5">
          <a
            href="#manifesto"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-chumbo/75 hover:text-royal-blue transition-colors font-space"
          >
            {t.manifesto}
          </a>
          <a
            href="#ecosystem"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-chumbo/75 hover:text-royal-blue transition-colors font-space"
          >
            {t.ecosystem}
          </a>
          <a
            href="#methodology"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-chumbo/75 hover:text-royal-blue transition-colors font-space"
          >
            {t.methodology}
          </a>
          <a
            href="https://wa.me/553131931393"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-center inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-green-600/10 hover:bg-green-600/15 text-green-600 font-bold text-sm transition-colors font-space"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center inline-block px-5 py-3 rounded-xl bg-royal-blue text-white font-bold text-sm hover:bg-royal-blue-hover transition-colors shadow-sm font-space"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
