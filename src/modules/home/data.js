import {
  LuBookOpen,
  LuLaptop,
  LuBuilding,
  LuLayoutDashboard,
  LuUserCheck,
} from "react-icons/lu";

import N1 from "../../assets/n1.jpg";
import N2 from "../../assets/n2.jpg";
import N3 from "../../assets/n3.jpg";
import N4 from "../../assets/n4.jpg";
import N5 from "../../assets/n5.jpg";
import N6 from "../../assets/n6.jpg";
import N7 from "../../assets/n7.jpg";

import P1 from "../../assets/p1.jpg";
import P2 from "../../assets/p2.jpg";

import A1 from "../../assets/a1.jpg";
import A2 from "../../assets/a2.jpg";
import A3 from "../../assets/a3.jpg";
import A4 from "../../assets/a4.jpg";
import A5 from "../../assets/a5.jpg";
import A6 from "../../assets/a6.jpg";
import A7 from "../../assets/a7.jpg";
import A8 from "../../assets/a8.jpg";

import B1 from "../../assets/b1.webp";
import B2 from "../../assets/b2.webp";
import B3 from "../../assets/b3.webp";
import B4 from "../../assets/b4.webp";
import B5 from "../../assets/b5.webp";
import B6 from "../../assets/b6.webp";

export const NEWS_ITEMS = [
  {
    id: 1,
    category: "Alumni",
    thumbnail: N1,
    title: "AIM Institute Launches Annual Innovation Awards 2025",
    desc: "This year’s Innovation Awards celebrated groundbreaking projects and startups from AIM students and alumni.",
  },
  {
    id: 2,
    category: "Students",
    thumbnail: N2,
    title: "5 Ways AIM Students Are Building Future-Ready Skills",
    desc: "From AI bootcamps to leadership programs, AIM students are gaining a competitive edge.",
  },
  {
    id: 3,
    category: "Awards",
    thumbnail: N3,
    title: "AIM Honors Alumni Leaders Driving Global Innovation",
    desc: "Distinguished alumni were recognized for their contributions to technology, design, and entrepreneurship.",
  },
  {
    id: 4,
    category: "Film",
    thumbnail: N4,
    title: "AIM Media Student Wins Creative Film Challenge",
    desc: "AIM Senior Media Arts student received top recognition for a documentary showcasing sustainable living.",
  },
  {
    id: 5,
    category: "Partnerships",
    thumbnail: N5,
    title: "AIM Partners with Vertex Global to Expand Internships",
    desc: "AIM signed a new partnership with Vertex Global, creating internship pipelines for tech students.",
  },
  {
    id: 6,
    category: "Students",
    thumbnail: N6,
    title: "How AIM Encourages Passion-Driven Learning",
    desc: "AIM students share stories of finding purpose through project-based education.",
  },
  {
    id: 7,
    category: "Partnerships",
    thumbnail: N7,
    title: "New Industry Collaborations Fuel AIM’s Innovation Goals",
    desc: "More companies are teaming up with AIM to bridge classroom learning and real-world experience.",
  },
];

export const FEATURES = [
  {
    id: 1,
    title: "Hands-On Learning Experience",
    desc: "AIM programs focus on real-world projects, giving students a strong industry advantage.",
    icon: LuBookOpen,
    bg: "#4CAF50",
  },
  {
    id: 2,
    title: "Learning Without Limits",
    desc: "Access AIM’s digital learning hub to study and collaborate anytime, anywhere.",
    icon: LuLaptop,
    bg: "#2196F3",
  },
  {
    id: 3,
    title: "Innovation-Ready Facilities",
    desc: "Cutting-edge labs and studios empower AIM students to bring their ideas to life.",
    icon: LuBuilding,
    bg: "#FF9800",
  },
  {
    id: 4,
    title: "AIM Connect Portal",
    desc: "Track grades, schedules, projects, and opportunities through AIM’s student portal.",
    icon: LuLayoutDashboard,
    bg: "#9C27B0",
  },
  {
    id: 5,
    title: "Future-Focused Career Pathways",
    desc: "AIM’s E2E Career Program prepares students for top opportunities after graduation.",
    icon: LuUserCheck,
    bg: "#E91E63",
  },
];

export const PROGRAMS = [
  {
    id: "college",
    src: P1,
    alt: "AIM College Programs",
  },
  {
    id: "shs",
    src: P2,
    alt: "AIM Senior High Programs",
  },
];

export const ALUMNI = [
  {
    id: 1,
    name: "Alexa Navarro",
    title: "Software Engineer | Vertex Global",
    profile: A1,
  },
  {
    id: 2,
    name: "Martin Reyes",
    title: "Customer Experience Manager | Summit Retail Group",
    profile: A2,
  },
  {
    id: 3,
    name: "Rachel Park",
    title: "Senior Developer | Nova Systems",
    profile: A3,
  },
  {
    id: 4,
    name: "Carlos Vega",
    title: "Tech Director | Orion Bank",
    profile: A4,
  },
  {
    id: 5,
    name: "Luna Kim",
    title: "Full Stack Developer | Alpha Outsourcing",
    profile: A5,
  },
  {
    id: 6,
    name: "Valerie Cruz",
    title: "Creative Producer | Inspire Media",
    profile: A6,
  },
  {
    id: 7,
    name: "Evan Brooks",
    title: "Culinary Innovator | Oceanview Cruises",
    profile: A7,
  },
  {
    id: 8,
    name: "Nina Patel",
    title: "IT Specialist | GlobalTech Solutions",
    profile: A8,
  },
];

export const VIDEOS = [
  {
    src: "https://www.youtube.com/embed/J3-24Z5A3EE?si=f1gVm0CxxKMENiuD",
    title: "Be Future-ready in AIM",
    featured: true,
  },
  {
    src: "https://www.youtube.com/embed/RkDor0ZVGbU?si=6OQApzg6aZsDAGJ8",
    title: "Moving Forward with AIM Institute",
  },
  {
    src: "https://www.youtube.com/embed/yGTVRo4gayw?si=hpFP3R41gAJbfzMG",
    title: "Senior High at AIM: Beyond the Basics",
  },
  {
    src: "https://www.youtube.com/embed/WgTW4OllvmE?si=nomcfKLhMhMOXe-t",
    title: "College Life at AIM Institute",
  },
  {
    src: "https://www.youtube.com/embed/kV8EvMRYPdw?si=13Qx0khVtjfJpTU7",
    title: "AIM Stories: The Journey of a Dreamer",
  },
];

export const BLOGS = [
  {
    id: 1,
    title: "How to Prepare for AIM’s Rigorous Programs",
    date: "2024-02-16",
    description:
      "From time management to hands-on projects, here’s how to thrive in AIM’s future-focused courses.",
    thumbnail: B1,
  },
  {
    id: 2,
    title: "Finding the Right Career Path Through AIM",
    date: "2024-02-15",
    description:
      "A guide to matching your passion with AIM’s dynamic and industry-ready programs.",
    thumbnail: B2,
  },
  {
    id: 3,
    title: "Jobs That Are Evolving in the AI Era",
    date: "2024-02-15",
    description:
      "Explore how automation is reshaping industries and where AIM graduates fit in.",
    thumbnail: B3,
  },
  {
    id: 4,
    title: "Daily Habits of High-Performing AIM Students",
    date: "2023-11-10",
    description:
      "Discover simple routines practiced by AIM’s top achievers to stay motivated.",
    thumbnail: B4,
  },
  {
    id: 5,
    title: "Making the Most of Your First Semester",
    date: "2023-08-29",
    description:
      "AIM students share their tips for navigating the exciting first weeks of school.",
    thumbnail: B5,
  },
  {
    id: 6,
    title: "Time Management Hacks for AIM Students",
    date: "2023-05-17",
    description:
      "From productivity apps to simple planning habits, learn how to take control of your day.",
    thumbnail: B6,
  },
];
