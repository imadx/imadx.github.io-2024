import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishan Madhusanka",
  description: "Full-stack developer and UI/UX enthusiast",
  category: "technology",
  keywords: [
    "ishan madhusanka",
    "ishan",
    "madhusanka",
    "full-stack developer",
    "ui/ux enthusiast",
    "web developer",
    "software engineer",
    "sri lanka",
    "colombo",
    "react",
    "next.js",
    "tailwind css",
    "node.js",
    "express",
    "mongodb",
    "firebase",
    "graphql",
    "apollo",
    "prisma",
    "postgresql",
    "mysql",
    "sqlite",
    "docker",
    "kubernetes",
    "aws",
    "gcp",
    "azure",
    "vercel",
    "netlify",
    "heroku",
    "github",
    "gitlab",
    "bitbucket",
    "jira",
    "confluence",
    "figma",
  ],
  authors: [{ name: "Ishan Madhusanka" }],
  creator: "Ishan Madhusanka",
  metadataBase: new URL("http://imadhusanka.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://imadhusanka.me",
    siteName: "Ishan Madhusanka",
    title: "Ishan Madhusanka",
    description: "Full-stack developer and UI/UX enthusiast",
    images: [
      {
        url: new URL("/assets/promo-2024.png", "http://imadhusanka.me").href,
        width: 1105,
        height: 556,
        alt: "Ishan Madhusanka",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png" },
      { url: "/assets/favicon-32x32.png" },
      { url: "/assets/favicon-96x96.png" },
    ],
    apple: "/assets/apple-icon.png",
  },
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
          "bg-shark-50 text-shark-950",
          "dark:bg-shark-950 dark:text-shark-100",
          "selection:bg-lime-400 selection:text-black",
        )}
      >
        {children}
      </body>
    </html>
  );
}
