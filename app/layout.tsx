import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/layout/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claude Code & Open Code 教程",
  description: "全面介绍 Claude Code 和 Open Code 工具及 Skills 系统的教程网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="border-t py-8 mt-12">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>© 2026 Claude Code & Open Code 教程. 保留所有权利.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
