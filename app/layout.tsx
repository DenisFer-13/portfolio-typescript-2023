"use client";
import "../styles/globals.css";
import Footer from "./about/components/footer";
import Navigation from "./about/components/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
