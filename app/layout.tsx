import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'Elizabeth Donoway | Physics PhD Student',
  description: 'Academic portfolio of Elizabeth Donoway, Physics PhD student researching optical techniques and quantum materials',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <div className="hidden md:block">
              <Navbar />
            </div>
            <main className="p-4 md:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
