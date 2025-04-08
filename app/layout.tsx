import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
// import ToggleMenu from '../components/ToggleMenu';

const lato = Lato({
  weight: ["400"],
  style: ["normal"], 
  subsets: ["latin"],
});

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
    <html lang="en" className={lato.className}>
      <body>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <div className="hidden md:block">
              <Navbar />
            </div>
            {/* <div className="block md:hidden">
              <ToggleMenu />
            </div> */}
            <main className="p-4 md:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}