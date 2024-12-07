
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { metadata } from "./metadata";
import CursorComponent from "@/components/CursorComponent";
import {Toaster} from "react-hot-toast"
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
    <html lang="en">
      <body className="bg-neutral-950 text-white min-h-screen">
        <SmoothScroll>
          {/* <CursorComponent/> */}
          <Header />
          {children}
          <Footer />
          <div className="absolute inset-0 -z-50 max-h-screen bg-[radial-gradient(circle_at_top_center,hsla(222,80%,60%,0.655)_0%,hsla(222,0%,0%,0)_50%,hsla(222,0%,0%,0)_100%)]"></div>
        </SmoothScroll>
        <Toaster/>
      </body>
    </html>
  );
}
