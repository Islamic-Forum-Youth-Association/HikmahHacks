// Don't worry about this file yet

import { Varela_Round } from 'next/font/google';
import "./globals.css";

const inter = Varela_Round({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Hikmah Hacks",
  description: "Hack the world today, with Hikmah!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
