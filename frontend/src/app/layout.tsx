import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "./contexts/transition-context";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Rodrigues — Desenvolvedor Full Stack & UX Engineer",
  description:
    "Portfólio de John Rodrigues, desenvolvedor especializado em interfaces modernas, animações, experiência do usuário e aplicações web de alta performance. Projetos que unem design, tecnologia e estratégia para entregar soluções digitais completas.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
