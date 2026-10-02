import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  type IconComponent,
} from "../components/BrandIcons";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
export type NavLink = { id: string; label: string };
export type Social = { id: string; label: string; href: string; icon: IconComponent };
export type SkillGroup = { title: string; items: string[] };
export type Project = {
  index: string;
  title: string;
  year: string;
  blurb: string;
  stack: string;
  image: string;
  repo: string;
  demo: string;
};
export type TimelineItem = { period: string; title: string; org: string; description: string };

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */
export const profile = {
  name: "Amir Mohammad Ahadi",
  role: "Front-end developer",
  location: "Tehran",
  email: "amirahadiweb@gmail.com",
  phone: "+989393871582",
  phoneHref: "tel:+989393871582",
  intro: "I build fast, User Friendly Things with React , Next.js",
  about:
    "I am a 20 Years Old passionate Junior front-end Developer From Tehran , Iran",
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export const navLinks: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Toolbox" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Path" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/* Socials                                                             */
/* ------------------------------------------------------------------ */
export const socials: Social[] = [
  { id: "github", label: "GitHub", href: "https://github.com/AmirAhadi-web", icon: GithubIcon },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/amirmohammad-ahadi", icon: LinkedinIcon },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/amirahadi_web", icon: InstagramIcon },
];

/* ------------------------------------------------------------------ */
/* Toolbox                                                             */
/* ------------------------------------------------------------------ */
export const skillGroups: SkillGroup[] = [
  { title: "Skill", items: ["JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Styling & motion", items: ["Tailwind CSS", "Bootstrap", "CSS architecture"] },
  { title: "Tooling", items: ["Git", "Github", "Vite"] },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
export const projects: Project[] = [
  {
    index: "01",
    title: "Prima Mihan",
    year: "2026",
    blurb: "Mihan Company Landing Page Re-design.",
    stack: "Next,js · Tailwind · GSAP",
    image: "/images/project-1.jpg",
    repo: "https://github.com/AmirAhadi-web/prima-mihan",
    demo: "https://prima-mihan.vercel.app/",
  },
  {
    index: "02",
    title: "Espinas Palace Hotel",
    year: "2026",
    blurb: "Espinas Palace Hotel Landing Page Re-design.",
    stack: "HTML . CSS . Tailwind",
    image: "/images/project-2.jpg",
    repo: "https://github.com/AmirAhadi-web/Espinas-Palace-Hotel",
    demo: "https://amirahadi-web.github.io/Espinas-Palace-Hotel/",
  },
  {
    index: "03",
    title: "Coin Collector",
    year: "2025",
    blurb: "Collect Coins to Earn Higher Points.",
    stack: "HTML . CSS . JavaScript ",
    image: "/images/project-3.jpg",
    repo: "https://github.com/AmirAhadi-web/coin-collector-update",
    demo: "https://amirahadi-web.github.io/coin-collector-update/",
  },
  {
    index: "04",
    title: "Basketball Parallax",
    year: "2026",
    blurb: "Parallax Basketball Theme Landing Page.",
    stack: "GSAP · Vanilla.js · Tailwind",
    image: "/images/project-4.jpg",
    repo: "https://github.com/AmirAhadi-web/Basketball-Parallax",
    demo: "https://amirahadi-web.github.io/Basketball-Parallax/",
  },
  {
    index: "05",
    title: "Music Player",
    year: "2025",
    blurb: "Enjoy Your Music.",
    stack: "HTML · CSS · JavaScript",
    image: "/images/project-5.jpg",
    repo: "https://github.com/AmirAhadi-web/Music-Player",
    demo: "https://amirahadi-web.github.io/Music-Player/",
  },
  {
    index: "06",
    title: "Nike Webesite",
    year: "2025",
    blurb: "Nike Landing Page Re-design.",
    stack: "HTML . CSS . Tailwind",
    image: "/images/project-6.jpg",
    repo: "https://github.com/AmirAhadi-web/Nike-Website",
    demo: "https://amirahadi-web.github.io/Nike-Website/",
  },
];

/* ------------------------------------------------------------------ */
/* Path                                                                */
/* ------------------------------------------------------------------ */
export const experience: TimelineItem[] = [
  {
    period: "2025 — now",
    title: "Junior Front-End Developer",
    org: "Java Script , React , Next.js",
    description: "Many Projects on Github",
  },
  {
    period: "2024 — 2026",
    title: "Learn Web3 ",
    org: "Parninan Web Design School",
    description: "HTML , CSS , JavaScript , React , Next.js",
  },

];

export const education: TimelineItem[] = [
  {
    period: "2024 — 2028",
    title: "B.Sc. Computer Science",
    org: "Kharazmi University",
    description: "Python , Java , Data Structures & Algorithms",
  },
];
