import { Inter } from "next/font/google";
import "@/styles/globals.css";
import LayoutProvider from "@/layouts/LayoutProvider";
import { cn } from "@nextui-org/react";
import Script from "next/script";
import { MAIN_DOMAIN } from "@/utils/constants";
import { headers } from "next/headers";

const GTM_ID = "GTM-KTF5V7C5";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export async function generateMetadata() {
  const header = await headers();
  return {
    title: "The ArKham Talent",
    icons: {
      icon: { url: "/favicon.png", type: "image/png" },
    },
    description:
      "Discover top recruiter services with Arkham Talent. We help job seekers find their dream jobs and employers recruit the best talent. Get in touch with us today!",
    keywords:
      "recruiter, job search, recruitment services, job seekers, hiring, talent acquisition, employment, career",
    alternates: {
      canonical: `${MAIN_DOMAIN}${header.get("x-pathname") || ""}`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className={cn(inter.className, "bg-grey")}>
        <LayoutProvider>{children}</LayoutProvider>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
