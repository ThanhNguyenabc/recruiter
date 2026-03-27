import { Job } from "@/models/job";
import AxiosClient from "./axios-client";

export const getJobs = async (): Promise<Job[] | null> => {
  try {
    const response = await AxiosClient.get("/jobs");
    return response.data?.["data"];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getJobBySlug = async (slug: string): Promise<Job | null> => {
  try {
    const response = await AxiosClient.get(`/jobs?filters[Slug][$eq]=${slug}`);
    return response.data?.["data"]?.[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const submitJobContact = async (data: {
  [key: string]: unknown;
}): Promise<boolean> => {
  try {
    const response = await AxiosClient.post(`/job-applications`, {
      data: data,
    });
    if (response.data["data"]) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const submitContact = async (data: {
  [key: string]: unknown;
}): Promise<boolean> => {
  try {
    const response = await AxiosClient.post(`/contacts`, {
      data: data,
    });

    if (response.data["data"]) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};

export const isDuplicateJobApplication = async (
  email: string,
  phone: string,
): Promise<boolean> => {
  try {
    const response = await AxiosClient.get(
      `/job-applications?filters[$or][0][Email][$eq]=${email}&filters[$or][1][Phone][$eq]=${phone}`,
    );
    return (response.data?.["data"]?.length || 0) > 0;
  } catch (error) {
    console.error("Duplicate check failed:", error);
    return false;
  }
};

export const isDuplicateContact = async (
  email: string,
  phone: string,
  type: string,
): Promise<boolean> => {
  try {
    const response = await AxiosClient.get(
      `/contacts?filters[$and][0][$or][0][Email][$eq]=${email}&filters[$and][0][$or][1][Phone][$eq]=${phone}&filters[$and][1][Type][$eq]=${type}`,
    );
    return (response.data?.["data"]?.length || 0) > 0;
  } catch (error) {
    console.error("Duplicate contact check failed:", error);
    return false;
  }
};
