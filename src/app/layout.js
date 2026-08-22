import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import FloatingWhatsapp from "@/ui/components/FloatingWhatsapp";
import SocialStack from "@/ui/components/SocialStack";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
});

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || process.env.VERCEL_PROJECT_PRODUCTION_URL
  || process.env.VERCEL_URL
  || 'http://localhost:3000';
const siteUrl = configuredSiteUrl.startsWith('http')
  ? configuredSiteUrl
  : `https://${configuredSiteUrl}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LACQ Feynman | Liga Nacional de Computação Quântica",
    template: "%s | LACQ Feynman",
  },
  description: "A Liga Nacional de Computação Quântica promove educação, pesquisa e comunidade em computação quântica no Brasil.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'LACQ Feynman',
    title: 'LACQ Feynman | Liga Nacional de Computação Quântica',
    description: 'Educação, pesquisa e comunidade em computação quântica no Brasil.',
    images: [
      {
        url: '/images/lacqf/logo.webp',
        width: 512,
        height: 512,
        alt: 'Logo da LACQ Feynman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LACQ Feynman | Liga Nacional de Computação Quântica',
    description: 'Educação, pesquisa e comunidade em computação quântica no Brasil.',
    images: ['/images/lacqf/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} bg-background text-foreground transition-colors duration-300`}>
        {/* App-wide providers; Language wraps Theme so UI strings load before theming effects. */}
        <LanguageProvider>
          <ThemeProvider>
            <div id="mobile-preview-container">
              {/* Page content lives here; global overlays appear after. */}
              <main>
                {children}
              </main>
            </div>

            {/* Global UI helpers and telemetry */}
            <FloatingWhatsapp />
            <SocialStack />
            {process.env.VERCEL && (
              <>
                <Analytics />
                <SpeedInsights />
              </>
            )}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
