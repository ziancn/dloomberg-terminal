import type { Metadata } from "next";
import { Faster_One, Geist, Geist_Mono, Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { BackendStatusProvider } from "@/components/backend-status-provider";
import { TerminalChrome } from "@/features/shell/terminal-chrome";

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const fasterOne = Faster_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-faster-one",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dloomberg Terminal",
  description: "Dloomberg Terminal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "dark", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, fasterOne.variable)}
    >
      <body className="min-h-full flex flex-col">
        <BackendStatusProvider>
          <TerminalChrome>{children}</TerminalChrome>
        </BackendStatusProvider>
      </body>
    </html>
  );
}
