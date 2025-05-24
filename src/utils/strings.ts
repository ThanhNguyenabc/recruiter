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
  values: Record<string, string>
) => {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
};
