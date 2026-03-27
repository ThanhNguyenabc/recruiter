import { FieldErrors } from "react-hook-form";

export const CheckNumberRegex = /^\d+/;

export const formatCurrency = (number = 0) => {
  const usFormatter = new Intl.NumberFormat("en-US");
  return usFormatter.format(number);
};

export const convertStringToCurrency = (text: string) => {
  const formatText = text.replace(/[^0-9.]/g, "");

  if (formatText) {
    return `${formatCurrency(Number(formatText))}`;
  }
  return "";
};

export const formatPhoneNUmber = (str: string) => {
  return str.replace(/[^0-9]/g, "");
};

export const getError = (field: string, errors: FieldErrors) => {
  if (!errors[field])
    return {
      isInvalid: false,
      errorMessage: "",
    };
  return {
    isInvalid: true,
    errorMessage: (errors[field]?.["message"] as string) || "",
  };
};

export const replaceTemplate = (
  template: string,
  values: Record<string, string>,
) => {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
};

export const getMediaTypeFromUrl = (link: string) => {
  if (!link) return null;

  try {
    const url = new URL(link);
    const host = url.hostname;
    const pathname = url.pathname.toLowerCase();

    if (pathname.endsWith(".pdf")) return "pdf";
    if (host.includes("youtube.com") || host.includes("youtu.be"))
      return "youtube";
    if (host.includes("drive.google.com")) return "googledrive";

    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".m4v"];
    if (videoExtensions.some((ext) => pathname.endsWith(ext))) return "video";
  } catch {}

  return null;
};

export const getEmbedUrl = (link: string, type: string) => {
  if (!link) return "";

  try {
    const url = new URL(link);

    // YouTube
    if (type === "youtube") {
      let id = url.searchParams.get("v");
      if (!id) {
        const parts = url.pathname.split("/");
        id = parts[parts.length - 1];
      }
      return id ? `https://www.youtube.com/embed/${id}` : link;
    }

    // Google Drive
    if (type === "googledrive") {
      let id = url.searchParams.get("id");
      if (!id) {
        const parts = url.pathname.split("/");
        const dIndex = parts.indexOf("d");
        if (dIndex !== -1 && parts[dIndex + 1]) {
          id = parts[dIndex + 1];
        }
      }
      return id ? `https://drive.google.com/file/d/${id}/preview` : link;
    }
  } catch {
    return link;
  }

  return link;
};
