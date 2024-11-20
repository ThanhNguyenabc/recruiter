import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import LayoutProvider from "@/layouts/LayoutProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "The ArKham Talent",
  description:
    "Discover top recruiter services with Arkham Talent. We help job seekers find their dream jobs and employers recruit the best talent. Get in touch with us today!",
  keywords:
    "recruiter, job search, recruitment services, job seekers, hiring, talent acquisition, employment, career",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
