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

export const metadata = {
  title: "LACQ Feynman | Liga Nacional de Computação Quântica",
  description: "A Liga Nacional de Computação Quântica é uma organização que busca promover a computação quântica no Brasil.",
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
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </LanguageProvider>
      </body>
    </html>
  );
}
