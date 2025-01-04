import { Job } from "@/models/job";
import AxiosClient from "./axios-client";
import { AxiosError } from "axios";

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
    console.log("request::::", response.request);
    console.log("response:::", response.data);
    if (response.data["data"]) {
      return true;
    }
  } catch (error) {
    console.log(error);

    const err = error as AxiosError;
    console.log(err.response?.data);
  }
  return false;
};
