import {
  IcFb,
  IcInsta,
  IcLinkedin,
  IcTiktok,
  PhoneIcon,
  SecondEmail,
} from "@/assets/icons";
import { AppRoutes } from "./routes";

export const Menu = [
  {
    title: "Home",
    url: AppRoutes.HOME,
  },
  {
    title: "About",
    url: AppRoutes.ABOUT,
  },

  {
    title: "Jobs",
    url: AppRoutes.JOBS,
  },
  {
    title: "Clients",
    url: AppRoutes.CLIENT,
  },
  {
    title: "Contact",
    url: AppRoutes.CONTACT,
  },
  {
    title: "Blog",
    url: AppRoutes.BLOG,
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

export const SUCCESS_MESSAGE =
  "Thank you for reaching out! We will get back to you shortly.";

export const FAQQuestions = [
  {
    question: "What is Arkham Talent?",
    answer:
      "Arkham Talent is a boutique recruitment firm specializing in healthtech, digital healthcare, AI, medtech, medical IoT and healthcare-focused SaaS companies. We partner with general saas organizations building or expanding their healthcare sales divisions.",
  },
  {
    question: "What positions do we fill?",
    answer: `We specialize in go-to-market roles:
            Sales (SDR to VP level)
            Payer/Provider Sales
            Marketing
            Customer Success
            Product (commercial)
`,
  },
  {
    question: "What makes Arkham different?",
    answer:
      "Arkham Talent is a boutique recruitment firm specializing in healthtech, digital healthcare, AI, medtech, medical IoT and healthcare-focused SaaS companies. We partner with general saas organizations building or expanding their healthcare sales divisions.",
  },
  {
    question: "What is your candidate search process?",
    answer: `Our search process is methodical and collaborative:

In-depth discovery session to understand your requirements and culture
Initial market assessment within 48 hours to align on ideal candidate profiles
Targeted search execution using our healthcare technology network
Regular updates and refinements throughout the search
Continuous guidance from initial screening through final selection
Each search is tailored to your specific needs, ensuring we find candidates who not only match the technical requirements but also align with your organization's vision and culture.
`,
  },
  {
    question: "How can companies get started with Arkham Talent?",
    answer: `Connect with us in two ways:

    Email us directly through our website
    Schedule a consultation: <a target="_blank" href="https://calendly.com/arkhamtalent" className="text-blue-500">www.calendly.com/arkhamtalent</a>
`,
  },
];
