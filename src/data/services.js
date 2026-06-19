import {
  Globe,
  Smartphone,
  Puzzle,
  Palette,
  Code2,
  GraduationCap,
  Building2,
  Brain,
  Layers,
} from "lucide-react";

export const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription:
      "High-performance websites and web applications built with modern frameworks and best practices.",
    description:
      "We craft responsive, lightning-fast websites and web applications using React, Next.js, and cutting-edge technologies. From landing pages to complex platforms, every build is optimized for performance, SEO, and conversion.",
    benefits: [
      "Responsive across all devices",
      "SEO-optimized architecture",
      "Performance-first development",
      "Scalable codebase",
    ],
    technologies: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    pricing: "Starting from ₹2,500",
    image: "/services/web_dev.png",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    description:
      "From concept to App Store, we build mobile applications that users love. Whether native iOS/Android or cross-platform solutions, we focus on intuitive UX and rock-solid performance.",
    benefits: [
      "Cross-platform compatibility",
      "Native performance",
      "Offline-first capabilities",
      "App Store deployment",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Expo"],
    pricing: "Starting from ₹8,000",
    image: "/services/mobile_app.png",
  },
  {
    id: "chrome-extensions",
    icon: Puzzle,
    title: "Chrome Extensions",
    shortDescription:
      "Powerful browser extensions that enhance productivity and streamline workflows.",
    description:
      "We develop Chrome extensions that solve real problems — from productivity tools to business automation. Built with security and performance in mind.",
    benefits: [
      "Chrome Web Store ready",
      "Secure architecture",
      "Background processing",
      "Cross-browser support",
    ],
    technologies: ["JavaScript", "Chrome APIs", "React", "Manifest V3"],
    pricing: "Starting from ₹1,500",
    image: "/services/chrome_extension.png",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    shortDescription:
      "Beautiful, intuitive interfaces designed to convert visitors into loyal customers.",
    description:
      "Our design process combines research, wireframing, and high-fidelity prototypes to create interfaces that are both stunning and functional. Every pixel serves a purpose.",
    benefits: [
      "User research & testing",
      "Design systems",
      "Interactive prototypes",
      "Developer-ready handoff",
    ],
    technologies: ["Figma", "Framer", "Adobe XD", "Principle"],
    pricing: "Starting from ₹2,500",
    image: "/services/ui_ux.png",
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    shortDescription:
      "Tailored software solutions designed to solve your unique business challenges.",
    description:
      "When off-the-shelf doesn't cut it, we build custom software tailored to your exact requirements. Dashboards, internal tools, automation systems — built to scale with your business.",
    benefits: [
      "Fully customized solutions",
      "Enterprise-grade security",
      "API integrations",
      "Ongoing maintenance",
    ],
    technologies: ["Node.js", "MongoDB", "Express", "React"],
    pricing: "Starting from ₹10,000",
    image: "/services/custom_software.png",
  },
  {
    id: "school-management",
    icon: GraduationCap,
    title: "School Management Systems",
    shortDescription:
      "Complete digital platforms for schools, colleges, and educational institutions.",
    description:
      "Streamline admissions, attendance, grades, and communication with comprehensive school management systems built for the Indian education ecosystem.",
    benefits: [
      "Student & faculty portals",
      "Attendance tracking",
      "Grade management",
      "Parent communication",
    ],
    technologies: ["MERN Stack", "Firebase", "PWA", "Cloud Storage"],
    pricing: "Starting from ₹7,500",
    image: "/services/school_management.png",
  },
  {
    id: "hostel-management",
    icon: Building2,
    title: "Hostel Management Systems",
    shortDescription:
      "Smart hostel management with menu systems, room allocation, and student tracking.",
    description:
      "Digital hostel management solutions including menu PWAs, room allocation, fee tracking, and student management — designed for colleges and institutions.",
    benefits: [
      "Digital menu systems",
      "Room allocation",
      "Fee management",
      "Student tracking",
    ],
    technologies: ["React", "Node.js", "MongoDB", "PWA"],
    pricing: "Starting from ₹5,000",
    image: "/services/hostel_management.png",
  },
  {
    id: "ai-integration",
    icon: Brain,
    title: "AI Integrations",
    shortDescription:
      "Intelligent features powered by AI to automate workflows and enhance products.",
    description:
      "Integrate AI capabilities into your existing products or build AI-powered solutions from scratch. Chatbots, smart forms, content generation, and intelligent automation.",
    benefits: [
      "Custom AI workflows",
      "Chatbot integration",
      "Smart automation",
      "Data-driven insights",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "Node.js"],
    pricing: "Starting from ₹4,000",
    image: "/services/ai_integration.png",
  },
  {
    id: "mern-applications",
    icon: Layers,
    title: "MERN Applications",
    shortDescription:
      "Full-stack MERN applications with robust backends and polished frontends.",
    description:
      "End-to-end MERN stack development for startups and businesses. From MVPs to production-ready platforms with authentication, payments, and real-time features.",
    benefits: [
      "Full-stack development",
      "RESTful & GraphQL APIs",
      "Real-time features",
      "Cloud deployment",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    pricing: "Starting from ₹6,500",
    image: "/services/mern_stack.png",
  },
];

export const whyBroviders = [
  {
    title: "Future Ready Architecture",
    description:
      "Built with scalability in mind. Your product grows without technical debt holding you back.",
  },
  {
    title: "Modern Technologies",
    description:
      "We use the latest frameworks and tools to ensure your product stays ahead of the curve.",
  },
  {
    title: "Fast Delivery",
    description:
      "Agile development with rapid iterations. MVPs in weeks, not months.",
  },
  {
    title: "Scalable Solutions",
    description:
      "From 100 to 100,000 users — our architecture handles growth seamlessly.",
  },
  {
    title: "Beautiful User Experience",
    description:
      "Pixel-perfect interfaces that delight users and drive engagement.",
  },
  {
    title: "Long-Term Support",
    description:
      "We don't disappear after launch. Ongoing maintenance and feature updates included.",
  },
];
