import { getJobs } from "@/api/job.api";
import JobBanner from "@/components/jobs/JobBanner";
import OpeningJobs from "@/components/jobs/OpeningJobs";

import React from "react";

export const dynamic = "force-dynamic";

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
