import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/Footer";
import SubscribeSection from "@/components/layout/subscribe/subscribe-section";

export const metadata: Metadata = {
  title: {
    default: "Agency Web",
    template: "%s | Agency Web",
  },
  description: "Agency Sphere — Modern Agency Website",
  icons: {
    icon: "/icon.ico", // Place your favicon in the public/ folder
  },
  openGraph: {
    title: "Agency Web",
    description: "A professional agency website built with Next.js",
    url: "https://yourdomain.com", // 🔹 replace with your domain
    siteName: "Agency Web",
    images: [
      {
        url: "/og-image.png", // 🔹 optional social share image
        width: 1200,
        height: 630,
        alt: "Agency Web",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agency Web",
    description: "A professional agency website built with Next.js",
    images: ["/og-image.png"], // 🔹 optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <SubscribeSection />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
