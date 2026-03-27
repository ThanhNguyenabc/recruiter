import { useState } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

const useFetch = (url: string, type: "POST" | "GET") => {
  const [data, setData] = useState<{
    data: any;
    error?: string | null;

    pRequestData?: any;
    isLoading?: boolean;
  }>({
    pRequestData: null,
    data: null,
    error: null,
    isLoading: false,
  });

  const fetchData = async (requestData: unknown) => {
    try {
      if (
        data.pRequestData &&
        JSON.stringify(data.pRequestData) === JSON.stringify(requestData)
      ) {
        return;
      }

      setData({ ...data, isLoading: true });
      const res = await fetch(url, {
        method: type,
        body:
          type === "POST"
            ? requestData instanceof FormData
              ? requestData
              : JSON.stringify(requestData)
            : null,
      });

      const responseData = await res.json();
      if (res.ok) {
        setData({
          error: null,
          pRequestData: requestData,
          data: responseData,
          isLoading: false,
        });
      } else {
        setData({
          error: responseData.error || "Something went wrong",
          data: null,
          pRequestData: null,
          isLoading: false,
        });
      }
    } catch {
      setData({
        data: null,
        pRequestData: null,
        error: "Network error",
        isLoading: false,
      });
    }
  };

  return { ...data, fetchData };
};

export default useFetch;
