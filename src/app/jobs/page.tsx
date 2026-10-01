import { getSEOTag } from "@/api/config.api";
import { getJobs } from "@/api/job.api";
import JobBanner from "@/components/jobs/JobBanner";
import OpeningJobs from "@/components/jobs/OpeningJobs";
import { Metadata } from "next";

import React from "react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return getSEOTag("jobs"); // Pass a key or slug if needed
}

const JobsPage = async () => {
  const jobs = await getJobs();
  return (
    <>
      <JobBanner />
      <OpeningJobs jobs={jobs || []} />
    </>
  );
};

export default JobsPage;
