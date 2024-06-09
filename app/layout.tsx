import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/generalUse/Navbar";
import Footer from "@/components/generalUse/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Lab",
  description: "Agencia de Marketing Digital, Diseño y Desarrollo Web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>



        <Toaster />

        <Navbar />

        {children}

        <Footer />
        </body>
    </html>
  );
}
