import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { poppins } from "@/Utils";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Astral Paint",
  description: "Astral Pain website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
