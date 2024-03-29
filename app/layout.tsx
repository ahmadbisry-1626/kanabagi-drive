import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',

});

export const metadata: Metadata = {
  title: "Kanabagi Drive",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
