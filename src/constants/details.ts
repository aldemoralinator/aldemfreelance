import { Skill, WorkDetails } from "@/types/details";

export const WORK_DETAILS: WorkDetails[] = [
  {
    company: "CloudStaff, Inc | London Stocks Exchange",
    position: "Senior Software Engineer",
    details:
      "Deployed by CloudStaff to develop and maintain a newly acquired due diligence product of London Stocks Exchange",
    links: [
      {
        url: "https://solutions.refinitiv.com/enhanced-due-diligence",
        name: "refinitiv - due diligence",
      },
    ],
    startDate: "January 1, 2020",
    endDate: "January 1, 2020",
    tags: [
      "FullTime",
      "Angular",
      "ReactJS",
      "SpringBoot",
      "Microservices",
      "AWS",
      "MongoDB",
      "Java",
    ],
    isFulltime: true,
  },
  {
    company: "Google Operations Center",
    position: "Tech Process Senior Associate",
    details:
      "Investigate, communicate and do necessary configuration and code changes needed to fix bugs. Maintain internal website used by the team. Automated part of the teams onboarding process.",
    links: [],

    startDate: "January 1, 2020",
    endDate: "January 1, 2020",
    tags: ["FullTime", "Angular", "SQL", "Java", "Python"],
    isFulltime: true,
  },
  {
    company: "LikhaIT, Inc",
    position: "Software Engineer",
    details:
      "Single handedly, build Fullstack web application and an MVP Decentralized supply chain application using Ethereum blockchain. Help other teams with ReactNative.",
    links: [
      {
        url: "http://lxszj.cn/",
        name: "http://lxszj.cn/",
      },
    ],
    startDate: "January 1, 2020",
    endDate: "January 1, 2020",
    tags: [
      "FullTime",
      "Angular",
      "ReactJS",
      "SpringBoot",
      "ReactNative",
      "Ethereum",
    ],
    isFulltime: true,
  },
  {
    company: "Sta. Clara International Corporation, Inc",
    position: "Frontend Web Developer",
    details:
      "Digitize and automate the company's manual internal processes. Tasks includes coordinating with the dev team and stake holders",
    links: [
      {
        url: "https://paperlessrequests.vercel.app/login",
        name: "paperlessrequests.vercel.app",
      },
    ],
    startDate: "January 1, 2020",
    endDate: "January 1, 2020",
    tags: ["FullTime", "ReactJS", "NextJS", "ReactNative", "Firebase"],
    isFulltime: true,
  },
  {
    company: "Plate number Recognition and Report System",
    position: "Freelance Computer Engineer",
    details:
      "Designed, built, programmed and taught the thesis prototype for BS - computer engineering students(client). A prototype that captures, identifies, and extracts plate numbers of cars on the road in realtime. Shows reports in a mobile app.",
    links: [],
    startDate: "January 1, 2020",
    endDate: "January 1, 2020",
    tags: [
      "Freelance",
      "ReactNative",
      "Firebase",
      "RaspberryPi",
      "OpenCV",
      "Pytesseract",
      "Python",
    ],
    isFulltime: false,
  },
  {
    company: "Calendar library tweak",
    position: "Freelance Software Engineer",
    details:
      "Freelance job by my previous manager in LikhaIT, Inc to tweak an existing calendar library.",
    links: [],
    startDate: "January 1, 2020",
    endDate: "January 1, 2020",
    tags: ["Freelance", "Javascript", "CSS", "HTML"],
    isFulltime: false,
  },
];

export const SKILLS: Skill[] = [
  {
    name: "English",
    level: "advanced",
    type: "softskills",
  },
  {
    name: "Web Design",
    level: "intermediate",
    type: "softskills",
  },
  {
    name: "Angular",
    level: "advanced",
    type: "front",
  },
  {
    name: "NextJS 13",
    level: "advanced",
    type: "front",
  },
  {
    name: "ReactJS",
    level: "intermediate",
    type: "front",
  },
  {
    name: "ReactNative",
    level: "basic",
    type: "front",
  },
  {
    name: "SpringBoot",
    level: "advanced",
    type: "back",
  },
  {
    name: "Microservices",
    level: "basic",
    type: "back",
  },

  {
    name: "MongoDB",
    level: "advanced",
    type: "database",
  },
  {
    name: "SQL",
    level: "advanced",
    type: "database",
  },
  {
    name: "Firebase Firestore",
    level: "advanced",
    type: "database",
  },

  {
    name: "BlockChain",
    level: "intermediate",
    type: "other",
  },
  {
    name: "AWS",
    level: "learning",
    type: "back",
  },
  {
    name: "Alibaba/Aliyun",
    level: "learning",
    type: "back",
  },
  {
    name: "Javascript",
    level: "expert",
    type: "language",
  },
  {
    name: "Java",
    level: "advanced",
    type: "language",
  },
  {
    name: "PHP",
    level: "advanced",
    type: "language",
  },
  {
    name: "Python",
    level: "intermediate",
    type: "language",
  },
];
