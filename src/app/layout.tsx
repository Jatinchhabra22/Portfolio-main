import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jatinchhabra.dev"),
  title: {
    default: "Jatin Chhabra | AI Engineer · Data Scientist · Data Engineer",
    template: "%s | Jatin Chhabra",
  },
  description:
    "Jatin Chhabra — AI Engineer, Data Scientist & Data Engineer building intelligent systems and scalable AI products. Specializing in LLMs, Deep Learning, Generative AI, Data Engineering, and end-to-end ML pipelines.",
  keywords: [
    "Jatin Chhabra",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Data Engineer",
    "Deep Learning",
    "LLMs",
    "Generative AI",
    "NLP",
    "Computer Vision",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Data Science Portfolio",
    "MLOps",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Jatin Chhabra", url: "https://jatinchhabra.dev" }],
  creator: "Jatin Chhabra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jatinchhabra.dev",
    siteName: "Jatin Chhabra Portfolio",
    title: "Jatin Chhabra | AI Engineer · Data Scientist · Data Engineer",
    description:
      "Building intelligent systems with Data Science, AI, Machine Learning & Data Engineering. Transforming data into scalable AI products.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jatin Chhabra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jatin Chhabra | AI Engineer · Data Scientist · Data Engineer",
    description: "Building intelligent systems with AI, Machine Learning & Data Engineering.",
    images: ["/og-image.png"],
    creator: "@jatinchhabra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jatin Chhabra",
              url: "https://jatinchhabra.dev",
              jobTitle: "AI Engineer & Data Engineer",
              description: "AI Engineer, Data Scientist & Data Engineer building intelligent systems.",
              sameAs: [
                "https://www.linkedin.com/in/jatin-chhabra-2b0455289/",
                "https://github.com/Jatinchhabra22",
              ],
              knowsAbout: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Data Science", "Data Engineering", "Generative AI", "Large Language Models", "NLP", "Computer Vision", "Python", "TensorFlow", "PyTorch"],
            }),
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
