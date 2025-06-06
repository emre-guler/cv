import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { Linkedin } from "lucide-react";

export const RESUME_DATA = {
  name: "Emre Güler",
  initials: "EG",
  location: "Ankara, Turkiye",
  locationLink: "https://www.google.com/maps/place/Ankara",
  about: "Software Developer @ Sertifier",
  summary: (
    <>
      Software Developer with over 6 years of experience in developing and maintaining web applications using C#, .NET Core, Golang, Redis, Docker, Azure, GCP, and MySQL. Skilled in designing and implementing RESTful APIs, microservices architectures, and CI/CD pipelines. Strong background in testing and debugging to ensure high performance and code quality.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/39224401",
  personalWebsiteUrl: "https://emreguler.dev",
  contact: {
    email: "hi@emreguler.dev",
    github: "https://github.com/emre-guler",
    linkedin: "https://www.linkedin.com/in/emregulerdev/",
  },
  education: [
    {
      school: "Nisantasi University",
      degree: "Associate's degree, Computer Programming",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Sertifier",
      link: "https://sertifier.com",
      badges: ["dotnet", "docker", "golang", "sql", "gcp", "redis"],
      title: "Back-end Developer",
      logo: ConsultlyLogo,
      start: "Mar 2023",
      end: null,
      description: (
        <>
         At Sertifier, I work as a Back-end Developer, building robust and scalable solutions for the company's SaaS platform. My responsibilities include designing and maintaining efficient microservices, optimizing database structures, and ensuring seamless integration with third-party tools and services.
          <br />
          <br />
          <ul className="list-inside list-disc">
            <li>
              Languages & Frameworks: C# .NET Core, Golang Fiber, Node.js
              Express
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Inveon",
      link: "https://inveon.com",
      badges: [".NET", "C#", "SQL"],
      title: "Back-end Developer",
      start: "Jul 2021",
      end: "Feb 2023",
      description: (
        <>
          At Inveon, I worked as a Back-end Developer, developing and maintaining scalable backend systems for high-traffic e-commerce platforms. I contributed to digital commerce solutions for enterprise clients.
          <br />
          <br />
          <ul className="list-inside list-disc">
            <li>Languages & Frameworks: C#, .NET</li>
            <li>Tools & Platforms: MsSQL, Redis</li>
            <li>
              Development Practices: CI/CD pipelines, version control (Git),
              Agile methodologies
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Codex",
      link: "https://codex.com",
      badges: [".NET", "SQL", "React.js"],
      title: "Junior Software Developer",
      logo: ClevertechLogo,
      start: "Jun 2019",
      end: "May 2021",
      description: (
        <>
          As a Junior Software Developer at Codex, I actively contributed to the development of client-focused web applications. My role included implementing new features, maintaining code quality, and collaborating with the team to deliver robust solutions.
          <br />
          <br />
          <ul className="list-inside list-disc">
            <li>Languages & Frameworks: C#, .NET Core</li>
            <li>Tools & Platforms: MySQL, Git, Visual Studio</li>
            <li>Development Practices: Agile methodologies, CI/CD</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "C#",
    "Golang",
    "Redis",
    "Azure",
    "GCP",
    "SQL",
    "Docker",
    ".NET Core",
    "RESTful APIs",
    "Microservices",
    "CI/CD",
  ],
  projects: [],
} as const;
