
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { metadata } from "./metadata";
import CursorComponent from "@/components/CursorComponent";
import {Toaster} from "react-hot-toast"
import { Spotlight } from "@/components/ui/Spotlight";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full bg-neutral-950">
      <body className="bg-neutral-950 text-white min-h-screen">
        <SmoothScroll>
          {/* <CursorComponent/> */}
          <Header />
          <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 "
        fill="white"
      />
          {children}
          <Footer />
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
