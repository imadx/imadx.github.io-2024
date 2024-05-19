import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishan Madhusanka",
  description: "Full-stack developer and UI/UX enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "dark",
          "bg-gray-100 text-gray-900",
          "dark:bg-gray-900 dark:text-gray-100",
        )}
      >
        {children}
      </body>
    </html>
  );
}
