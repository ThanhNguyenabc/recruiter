"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import JobDetailTemplate from "./JobDetailTemplate";
import { getJobBySlug } from "@/api/job.api";
import { Job } from "@/models/job";

const JobDetailPage = () => {
  let { slug = "" } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  slug = slug.toString();

  useEffect(() => {
    getJobBySlug(slug).then((job) => {
      if (job) setJob(job);
    });
  }, [slug]);

  return (
    <Suspense fallback={<>Loading</>}>
      {job && <JobDetailTemplate {...job} />}
    </Suspense>
  );
};

export default JobDetailPage;
