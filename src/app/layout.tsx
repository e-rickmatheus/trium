import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRIUM Lab | Presença Digital Premium & Ecossistemas High-Ticket",
  description: "Desenhamos a presença digital do seu negócio de ponta a ponta. Soluções unificadas de SEO Avançado, Sites de Alta Performance, Tráfego Pago e Automações Inteligentes.",
  metadataBase: new URL("https://www.triumlab.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TRIUM Lab | Presença Digital Premium & Ecossistemas High-Ticket",
    description: "Não construímos apenas sites. Desenhamos o ecossistema digital do seu negócio de ponta a ponta.",
    url: "https://www.triumlab.com.br",
    siteName: "TRIUM Lab",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIUM Lab | Presença Digital Premium & Ecossistemas High-Ticket",
    description: "Ecossistema de presença digital unificado e desenhado para empresas High-Ticket.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-chumbo font-sans antialiased selection:bg-royal-blue selection:text-white">
        {children}
        
        {/* JivoChat Widget Script */}
        <Script
          src="https://code.jivosite.com/widget/Mk4Ru0EDtx"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
