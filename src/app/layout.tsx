import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
 import CustomCursor from "@/components/CustomCursor";
  import ScrollProgress from "@/components/ScrollProgress";
  
  const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
 
 export const metadata: Metadata = {
   title: "Jatin Chhabra | Data Analyst & Data Scientist",
   description: "High-end interactive portfolio of Jatin Chhabra, a Data Analyst and Data Scientist specialized in turning data into clear business decisions.",
 };
 
 export default function RootLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
      <html lang="en" className={`${inter.variable}`}>
        <body className="bg-background text-foreground antialiased selection:bg-primary/30">
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </body>
      </html>
    );
 }
