import "flowbite";
import "flowbite/dist/flowbite.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";

const basisGrotesquePro = localFont({
  src: [
    {
      path: "../public/fonts/basisGrotesquePro/BasisGrotesquePro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/basisGrotesquePro/BasisGrotesquePro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/basisGrotesquePro/BasisGrotesquePro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-basisGrotesquePro",
  display: "swap",
});

const americana = localFont({
  src: "../public/fonts/americana/Americana-BT.ttf",
  variable: "--font-americana",
  display: "swap",
});

export const metadata = {
  title: "Welcome • Ulaman Eco Luxury Resort",
  description:
    "An Award-Winning Eco-Luxury Resort Offering A Unique Hideaway Experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${basisGrotesquePro.variable} ${americana.variable} bg-secondary antialiased`}
      >
        <Header />
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <script src="/node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
