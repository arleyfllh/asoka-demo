import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asoka Baby Store - Belanja Langsung, Hemat Komisi",
  description: "Toko bayi online terpercaya dengan produk premium dan harga terjangkau. Hemat biaya platform 1-5%.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}

