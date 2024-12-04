import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import LayoutProvider from "@/layouts/LayoutProvider";
import CommingSoonPage from "@/components/commingsoon";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "The ArKham Talent",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Discover top recruiter services with Arkham Talent. We help job seekers find their dream jobs and employers recruit the best talent. Get in touch with us today!",
  keywords:
    "recruiter, job search, recruitment services, job seekers, hiring, talent acquisition, employment, career",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutProvider>{<CommingSoonPage />}</LayoutProvider>
      </body>
      <GoogleAnalytics gaId="GTM-KTF5V7C5" />
    </html>
  );
}
