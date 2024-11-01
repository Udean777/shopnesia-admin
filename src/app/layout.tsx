import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopnesia - ADMIN",
  description: "This is the admin side of Shopnesia Mobile App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
