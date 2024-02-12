import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Archiv",
  description: "art",
};

export const viewport = {
  width: "1280",
  initialScale: 0.2,
  maximumScale: 1,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gif = "";

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=1280, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <div className="topbar">
          <div className="marquee">
            <h1>
              selbstbewusstsein sollt von selbstliebe kommen nicht von
              gleichgültigkeit
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; vergiss
              mich sanft &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              küss mich auf die stirn wenn ich im sarg lieg
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blumen
              blumen ganz viele blumen
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; heute abend
              wird es regnen
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              idealizazion devaluation
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blau
              schimmerndes grau, moschus, beschlagenes fenster, ich find dich
              auch hübsch
            </h1>
          </div>
        </div>
        <div className="app-container">
          <div className="sidebar">
            <Navbar></Navbar>
          </div>
          <div
            style={{
              marginTop: "130px",
            }}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
