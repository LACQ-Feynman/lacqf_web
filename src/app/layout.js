import { Geist, Geist_Mono } from "next/font/google";
import { Exo } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";
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

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: 'swap',
});

export const metadata = {
  title: "LACQ Feynman | Liga Nacional de Computação Quântica",
  description: "A Liga Nacional de Computação Quântica é uma organização que busca promover a computação quântica no Brasil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${exo.variable} bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />

          <FloatingWhatsapp />
          <SocialStack />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
