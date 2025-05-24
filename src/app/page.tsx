import { getSEOTag } from "@/api/config.api";
import HomePage from "@/components/home/HomePage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return getSEOTag("home"); // Pass a key or slug if needed
}

export default function Page() {
  return <HomePage />;
}
