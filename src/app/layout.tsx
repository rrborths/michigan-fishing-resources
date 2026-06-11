import type { Metadata } from "next";
import "./globals.css";
import { KidsModeProvider } from "@/context/KidsModeContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Michigan Fishing Resources",
  description:
    "Practical, real-time fishing resources for Michigan — species, locations, gear, techniques, regulations, and guides for beginners and pros, with a Kids Mode for young anglers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <KidsModeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </KidsModeProvider>
      </body>
    </html>
  );
}
