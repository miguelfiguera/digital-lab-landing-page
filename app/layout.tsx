'use client';
import { useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/generalUse/Navbar";
import Footer from "@/components/generalUse/Footer";
const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Digital Lab",
  description: "Agencia de Marketing Digital, Diseño y Desarrollo Web.",
};
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const [theme,setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <html lang="en" className={`${theme}`} >
      <body className={inter.className}>
        <Toaster />

        <Navbar setTheme={toggleTheme} theme={theme} />

        {children}

        <Footer />
      </body>
    </html>
  );
}
