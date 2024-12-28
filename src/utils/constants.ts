import {
  IcFb,
  IcInsta,
  IcLinkedin,
  IcTiktok,
  PhoneIcon,
  SecondEmail,
} from "@/assets/icons";

export const Menu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },

  {
    title: "Jobs",
    url: "/jobs",
  },
  {
    title: "Clients",
    url: "/clients",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
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
    icon: PhoneIcon,
    type: "phone",
    link: `${PHONE}`,
    scheme: "tel:",
    newTab: false,
  },
];

export const Socials = [
  {
    id: "fb",
    icon: IcFb,
    type: "social",
    link: "",
    newTab: true,
  },
  {
    id: "linkedin",
    icon: IcLinkedin,
    type: "social",
    link: "https://www.linkedin.com/company/arkhamtalent/",
    newTab: true,
  },
  {
    id: "insta",
    icon: IcInsta,
    type: "social",
    link: "https://www.youtube.com/@ArkhamTalent",
    newTab: true,
  },
  {
    id: "tiktok",
    icon: IcTiktok,
    type: "social",
    link: "https://www.youtube.com/@ArkhamTalent",
    newTab: true,
  },
];

export const TestimonialData = [
  {
    content:
      "Working with [Recruiter's Name] has been an absolute game-changer for our hiring process. They not only provided us with highly qualified candidates but also took the time to understand our company culture and unique needs. The level of professionalism and dedication they brought to the table was unparalleled. We’ve hired three outstanding employees through their efforts, and we couldn’t be happier!",
    name: "Sarah L",
    role: "Leader",
    star: 4,
  },
  {
    content:
      "I cannot thank [Recruiter's Name] enough for helping us find the perfect fit for our senior leadership team. They displayed an exceptional understanding of the industry and managed to present candidates who exceeded our expectations. Their ability to navigate challenging timelines while maintaining top-notch service is truly impressive. I highly recommend them to anyone seeking a recruitment partner who delivers results!",
    name: "Emily R",
    role: "CEO",
    star: 5,
  },
];
