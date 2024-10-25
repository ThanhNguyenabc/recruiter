import { Linkdln, SecondEmail, SecondPhoneIcon, Youtube } from "@/assets/icons";

export const Menu = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "ABOUT ME",
    url: "/about-me",
  },

  {
    title: "JOBS",
    url: "/jobs",
  },
  {
    title: "CLIENTS",
    url: "/clients",
  },
  {
    title: "CONTACT",
    url: "/contact",
  },
];

export enum BreakPoints {
  MOBILE = 640,
  TABLET = 768,
  LAPTOP = 1024,
}

export const EMAIL = "shaun@arkhamtalent.com";
export const PHONE = "(516) 852-4011";

export const Contacts = [
  {
    icon: SecondEmail,
    type: "email",
    link: EMAIL,
    newTab: false,
    scheme: "mailto:",
  },
  {
    icon: SecondPhoneIcon,
    type: "phone",
    link: `${PHONE}`,
    scheme: "tel:",
    newTab: false,
  },
];

export const Socials = [
  {
    icon: Linkdln,
    type: "social",
    link: "https://www.linkedin.com/company/arkhamtalent/",
    newTab: true,
  },
  {
    icon: Youtube,
    type: "social",
    link: "https://www.youtube.com/@ArkhamTalent",
    newTab: true,
  },
];
