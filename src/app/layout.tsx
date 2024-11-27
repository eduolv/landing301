import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "301",
  description: "301 digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      >
        {children}
      </body>
    </html>
  );
}
