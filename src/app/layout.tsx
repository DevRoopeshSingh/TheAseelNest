import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://theaseelnest.com"),
  title: {
    template: "%s | The Aseel Nest",
    default: "The Aseel Nest | Premium Parrot Beak Aseel Breeding Farm",
  },
  description: "Elite Parrot Beak Aseel chicks bred for pure genetic traits, striking aesthetics, and perfection. Based in Maharashtra, India.",
  openGraph: {
    title: "The Aseel Nest | Premium Parrot Beak Aseel",
    description: "Elite Parrot Beak Aseel chicks bred for pure genetic traits.",
    url: "https://theaseelnest.com",
    siteName: "The Aseel Nest",
    images: [{ url: "/images/aseel_home_hero_1774342580167.png", width: 1200, height: 630, alt: "The Aseel Nest — Premium Parrot Beak Aseel Breeding Farm Maharashtra" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aseel Nest | Premium Parrot Beak Aseel",
    description: "Elite Parrot Beak Aseel chicks. Pure bloodlines from Maharashtra.",
    images: ["/images/aseel_home_hero_1774342580167.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-brand-sand text-brand-text`}>
        <Navbar />
        <main className="flex-grow pt-8">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { background: '#2D5016', color: '#fff', borderRadius: '4px', fontSize: '14px' },
            success: { iconTheme: { primary: '#C9A55C', secondary: '#fff' } },
          }}
        />
      </body>
    </html>
  );
}
