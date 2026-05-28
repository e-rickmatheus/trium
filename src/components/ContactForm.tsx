"use client";

import { useState } from "react";

interface ContactFormProps {
  t: {
    tag: string;
    title: string;
    sub: string;
    step1: string;
    step2: string;
    step3: string;
    labelName: string;
    labelRole: string;
    labelCompany: string;
    labelEmail: string;
    labelPhone: string;
    labelWebsite: string;
    labelRevenue: string;
    labelBottleneck: string;
    optionsRevenue: string[];
    optionsBottleneck: string[];
    btnBack: string;
    btnNext: string;
    btnSubmit: string;
    submitting: string;
    submittingDesc1: string;
    submittingDesc2: string;
    successTitle: string;
    successBody: string;
    successNext: string;
    successNextDesc: string;
  };
}

export default function ContactForm({ t }: ContactFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    revenue: "",
    bottleneck: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionSelect = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    const startTime = Date.now();
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      // Garante que as micro-animações rodem por pelo menos 1800ms para alta percepção de valor
      const elapsedTime = Date.now() - startTime;
      const minAnimationTime = 1800;
      if (elapsedTime < minAnimationTime) {
        await new Promise((resolve) => setTimeout(resolve, minAnimationTime - elapsedTime));
      }
      
      if (!response.ok) {
        throw new Error("Erro no envio do formulário");
      }
      
      setSubmitted(true);
    } catch (error) {
      console.error("Erro na API de contato:", error);
      
      // Fallback: garante que a experiência do usuário não quebre caso haja falha de conexão
      const elapsedTime = Date.now() - startTime;
      const minAnimationTime = 1800;
      if (elapsedTime < minAnimationTime) {
        await new Promise((resolve) => setTimeout(resolve, minAnimationTime - elapsedTime));
      }
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const totalSteps = 3;
  const progressPercent = (step / totalSteps) * 100;

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-offwhite-pure dark:bg-chumbo-dark transition-colors duration-300">
      {/* Decorative connection nodes representing logo */}
      <div className="absolute left-[5%] top-[10%] w-[200px] h-[200px] rounded-full bg-royal-blue/[0.03] dark:bg-royal-blue-light/[0.03] blur-2xl pointer-events-none" />
      <div className="absolute right-[5%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-chumbo/[0.02] dark:bg-royal-blue/3 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-3xl mx-auto px-6 md:px-8 z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-space text-xs font-bold tracking-widest text-royal-blue dark:text-royal-blue-light uppercase block mb-4">
            {t.tag}
          </span>
          <h2 className="font-space font-bold text-3xl sm:text-4xl lg:text-5xl text-chumbo dark:text-offwhite tracking-tight mb-6">
            {t.title}
          </h2>
          <p className="font-sans text-base sm:text-lg text-chumbo-light/85 dark:text-offwhite-darker/85 max-w-xl mx-auto">
            {t.sub}
          </p>
        </div>

        {/* Application Card Container */}
        <div className="rounded-3xl bg-white dark:bg-chumbo border border-chumbo/5 dark:border-white/10 shadow-xl shadow-chumbo/3 dark:shadow-chumbo-dark/40 overflow-hidden">
          
          {/* Progress Indicator Bar */}
          {!submitted && (
            <div className="w-full h-1.5 bg-offwhite relative">
              <div
                className="absolute top-0 left-0 h-full bg-royal-blue transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}

          {/* Form Content */}
          <div className="p-8 sm:p-12">
            
            {submitted ? (
              /* Success Message (High Value Perception) */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-royal-blue/10 dark:bg-royal-blue-light/10 flex items-center justify-center text-royal-blue dark:text-royal-blue-light mx-auto mb-8 animate-bounce">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-space font-bold text-2xl sm:text-3xl text-chumbo dark:text-offwhite mb-4">
                  {t.successTitle}
                </h3>
                <p className="font-sans text-base text-chumbo-light/80 dark:text-offwhite-darker/80 leading-relaxed mb-6 max-w-md mx-auto">
                  {t.successBody.replace("!", `, ${formData.name.split(" ")[0]}!`)}
                </p>
                <div className="inline-block p-4 rounded-xl bg-offwhite dark:bg-chumbo-dark border border-chumbo/5 dark:border-white/10 text-sm font-sans font-medium text-chumbo-light dark:text-offwhite-darker max-w-lg">
                  <p className="font-bold text-chumbo dark:text-offwhite mb-1">{t.successNext}</p>
                  {t.successNextDesc
                    .replace("da sua empresa", formData.website || "da sua empresa")
                    .split("**")
                    .map((text, idx) => 
                      idx % 2 === 1 ? (
                        <strong key={idx} className="font-bold text-chumbo dark:text-offwhite">
                          {text}
                        </strong>
                      ) : (
                        text
                      )
                    )}
                </div>
              </div>
            ) : submitting ? (
              /* Submitting State Animation */
              <div className="text-center py-16 flex flex-col items-center justify-center animate-fade-in">
                <div className="relative w-16 h-16 mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-royal-blue/20 dark:border-royal-blue-light/20 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-4 border-royal-blue dark:border-royal-blue-light border-t-transparent animate-spin" />
                </div>
                <h3 className="font-space font-bold text-xl text-chumbo dark:text-offwhite mb-2">
                  {t.submitting}
                </h3>
                <div className="font-sans text-sm text-chumbo-muted dark:text-chumbo-muted uppercase tracking-widest flex flex-col gap-1.5 mt-2">
                  <span className="animate-pulse">{t.submittingDesc1}</span>
                  <span className="text-royal-blue dark:text-royal-blue-light font-bold">{t.submittingDesc2}</span>
                </div>
              </div>
            ) : (
              /* Form Steps Wizard */
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                {/* STEP 1: Basic Information */}
                {step === 1 && (
                  <div className="flex flex-col gap-6 animate-fade-in">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-1.5 h-5 bg-royal-blue dark:bg-royal-blue-light rounded-full" />
                      <h3 className="font-space font-bold text-xl text-chumbo dark:text-offwhite">
                        {t.step1}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                          {t.labelName}
                        </label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Carlos Silva"
                          className="px-4 py-3.5 rounded-xl bg-offwhite dark:bg-chumbo-dark border border-chumbo/10 dark:border-white/10 focus:border-royal-blue dark:focus:border-royal-blue-light focus:bg-white dark:focus:bg-chumbo focus:ring-2 focus:ring-royal-blue-glow outline-none font-sans text-sm text-chumbo dark:text-offwhite transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="role" className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                          {t.labelRole}
                        </label>
                        <input
                          required
                          type="text"
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Ex: Diretor de Marketing, CEO"
                          className="px-4 py-3.5 rounded-xl bg-offwhite dark:bg-chumbo-dark border border-chumbo/10 dark:border-white/10 focus:border-royal-blue dark:focus:border-royal-blue-light focus:bg-white dark:focus:bg-chumbo focus:ring-2 focus:ring-royal-blue-glow outline-none font-sans text-sm text-chumbo dark:text-offwhite transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                        {t.labelCompany}
                      </label>
                      <input
                        required
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Ex: TRIUM Lab S/A"
                        className="px-4 py-3.5 rounded-xl bg-offwhite dark:bg-chumbo-dark border border-chumbo/10 dark:border-white/10 focus:border-royal-blue dark:focus:border-royal-blue-light focus:bg-white dark:focus:bg-chumbo focus:ring-2 focus:ring-royal-blue-glow outline-none font-sans text-sm text-chumbo dark:text-offwhite transition-all duration-300"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                          {t.labelEmail}
                        </label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: carlos@empresa.com"
                          className="px-4 py-3.5 rounded-xl bg-offwhite dark:bg-chumbo-dark border border-chumbo/10 dark:border-white/10 focus:border-royal-blue dark:focus:border-royal-blue-light focus:bg-white dark:focus:bg-chumbo focus:ring-2 focus:ring-royal-blue-glow outline-none font-sans text-sm text-chumbo dark:text-offwhite transition-all duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                          {t.labelPhone}
                        </label>
                        <input
                          required
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ex: (11) 99999-9999"
                          className="px-4 py-3.5 rounded-xl bg-offwhite dark:bg-chumbo-dark border border-chumbo/10 dark:border-white/10 focus:border-royal-blue dark:focus:border-royal-blue-light focus:bg-white dark:focus:bg-chumbo focus:ring-2 focus:ring-royal-blue-glow outline-none font-sans text-sm text-chumbo dark:text-offwhite transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Company Profile */}
                {step === 2 && (
                  <div className="flex flex-col gap-6 animate-fade-in">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-1.5 h-5 bg-royal-blue dark:bg-royal-blue-light rounded-full" />
                      <h3 className="font-space font-bold text-xl text-chumbo dark:text-offwhite">
                        {t.step2}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="website" className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                        {t.labelWebsite}
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="Ex: Suas redes sociais ou site"
                        className="px-4 py-3.5 rounded-xl bg-offwhite dark:bg-chumbo-dark border border-chumbo/10 dark:border-white/10 focus:border-royal-blue dark:focus:border-royal-blue-light focus:bg-white dark:focus:bg-chumbo focus:ring-2 focus:ring-royal-blue-glow outline-none font-sans text-sm text-chumbo dark:text-offwhite transition-all duration-300"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                        {t.labelRevenue}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {t.optionsRevenue.map((revOption) => {
                          const isSelected = formData.revenue === revOption;
                          return (
                            <div
                              key={revOption}
                              onClick={() => handleOptionSelect("revenue", revOption)}
                              className={`cursor-pointer px-5 py-4 rounded-xl border text-sm font-sans font-medium text-chumbo dark:text-offwhite transition-all duration-200 ${
                                isSelected
                                  ? "border-royal-blue dark:border-royal-blue-light bg-royal-blue/5 dark:bg-royal-blue-light/5 shadow-sm shadow-royal-blue/5 dark:shadow-royal-blue-light/5"
                                  : "border-chumbo/10 dark:border-white/10 bg-offwhite dark:bg-chumbo-dark hover:bg-chumbo/5 dark:hover:bg-chumbo-dark/70"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{revOption}</span>
                                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-royal-blue dark:bg-royal-blue-light" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Commercial Bottleneck */}
                {step === 3 && (
                  <div className="flex flex-col gap-6 animate-fade-in">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-1.5 h-5 bg-royal-blue dark:bg-royal-blue-light rounded-full" />
                      <h3 className="font-space font-bold text-xl text-chumbo dark:text-offwhite">
                        {t.step3}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-bold text-chumbo-muted dark:text-chumbo-muted uppercase tracking-wider font-space">
                        {t.labelBottleneck}
                      </span>
                      <div className="grid grid-cols-1 gap-3">
                        {t.optionsBottleneck.map((btlOption) => {
                          const isSelected = formData.bottleneck === btlOption;
                          return (
                            <div
                              key={btlOption}
                              onClick={() => handleOptionSelect("bottleneck", btlOption)}
                              className={`cursor-pointer px-5 py-4 rounded-xl border text-sm font-sans font-medium text-chumbo dark:text-offwhite transition-all duration-200 ${
                                isSelected
                                  ? "border-royal-blue dark:border-royal-blue-light bg-royal-blue/5 dark:bg-royal-blue-light/5"
                                  : "border-chumbo/10 dark:border-white/10 bg-offwhite dark:bg-chumbo-dark hover:bg-chumbo/5 dark:hover:bg-chumbo-dark/70"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-4">
                                <span>{btlOption}</span>
                                {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-royal-blue dark:bg-royal-blue-light shrink-0" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Wizard Controls Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-chumbo/5 dark:border-white/10 mt-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 rounded-xl border border-chumbo/10 dark:border-white/15 text-sm font-bold hover:bg-offwhite dark:hover:bg-chumbo-dark text-chumbo dark:text-offwhite transition-colors font-space"
                    >
                      {t.btnBack}
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        step === 1 &&
                        (!formData.name || !formData.role || !formData.company || !formData.email || !formData.phone)
                      }
                      className="px-6 py-3.5 rounded-xl bg-chumbo dark:bg-white hover:bg-royal-blue dark:hover:bg-royal-blue-light text-white dark:text-chumbo dark:hover:text-white text-sm font-bold transition-colors disabled:opacity-40 disabled:hover:bg-chumbo dark:disabled:hover:bg-white font-space"
                    >
                      {t.btnNext}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!formData.revenue || !formData.bottleneck}
                      className="px-8 py-3.5 rounded-xl bg-royal-blue dark:bg-royal-blue-light hover:bg-royal-blue-hover dark:hover:bg-royal-blue text-white text-sm font-extrabold transition-colors shadow-md shadow-royal-blue/20 dark:shadow-royal-blue-light/10 disabled:opacity-40 disabled:hover:bg-royal-blue dark:disabled:hover:bg-royal-blue-light font-space"
                    >
                      {t.btnSubmit}
                    </button>
                  )}
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
