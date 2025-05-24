import { Metadata } from "next";
import JobDetailTemplate from "./JobDetailTemplate";
import { getSEOTag } from "@/api/config.api";
import { getJobBySlug } from "@/api/job.api";
import { replaceTemplate } from "@/utils/strings";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  console.log(params.slug);
  const [seotag, jobDetail] = await Promise.all([
    getSEOTag("job-detail"),
    getJobBySlug(params.slug),
  ]);

  seotag.title = replaceTemplate(seotag.title, {
    jobtitle: jobDetail?.JobTitle || "",
    jobtype: jobDetail?.JobType || "",
    location: jobDetail?.Location || "",
  });

  seotag.description = replaceTemplate(seotag.description, {
    companyname: jobDetail?.CompanyName || "",
    jobtitle: jobDetail?.JobTitle || "",
    salary: jobDetail?.Salary || "",
  });

  seotag.keywords = replaceTemplate(seotag.keywords, {
    jobtitle: jobDetail?.JobTitle || "",
    jobtype: jobDetail?.JobType || "",

    companyname: jobDetail?.CompanyName || "",
    location: jobDetail?.Location || "",
  });

  seotag.openGraph.title = seotag.title;
  seotag.openGraph.description = seotag.description;

  return seotag;
}

export default function JobDetail() {
  return <JobDetailTemplate />;
}
