/**
 * Abdisalam Faysal Ali - Portfolio Data Configuration
 * Centralized content source for https://abdis.ink
 * Brand Philosophy: "Technology should serve humanity."
 * Venture: DaryeelX IT Solutions
 */

const portfolioData = {
  personal: {
    name: "Abdisalam Faysal Ali",
    brandName: "Abdis.",
    domain: "abdis.ink",
    headline: "Software Developer & Technology Builder",
    heroGreeting: "Hello !",
    heroPhilosophy: "Technology should serve humanity.",
    heroDescription: "I build practical digital products and web applications that solve real-world problems. I’m also building DaryeelX, a technology venture focused on creating useful digital solutions.",
    location: "Somalia",
    email: "hello@abdis.ink",
    statusBadge: "Available for Projects & Tech Collaboration",
    avatar: "assets/images/abdisalam_dark.png?v=3",
    socials: {
      github: "https://github.com/cabdisalaan10",
      linkedin: "https://www.linkedin.com/in/eng-abdisalan-1475b63b7",
      email: "mailto:hello@abdis.ink"
    }
  },

  about: {
    lead: "I’m Abdisalam, an IT student and software developer focused on building practical technology solutions.",
    body: "I enjoy turning ideas into usable digital products and continuously improving my skills in software development, databases, web technologies, and modern development tools. My long-term goal is to build impactful technology products and grow DaryeelX into a strong technology brand under the philosophy that technology must genuinely serve humanity.",
    stats: [
      { label: "Core Venture", value: "DaryeelX" },
      { label: "University", value: "Golis University" },
      { label: "Graduation", value: "Class of 2026" },
      { label: "Core Focus", value: "Software & Digital Health" }
    ]
  },

  daryeelx: {
    brand: "DaryeelX IT Solutions",
    badge: "Main Technology Venture",
    tagline: "Technology should serve humanity.",
    description: "DaryeelX is a technology venture I’m developing to create practical digital products that solve real problems. We bridge the gap between modern technology innovation and human-centric care, starting with focused digital health solutions and expanding over time.",
    flagshipProduct: {
      name: "E-Balami DaryeelX",
      category: "Health Technology",
      badge: "In Development / Building",
      description: "A digital healthcare booking concept designed to make it easier for patients to connect with healthcare services and book appointments without friction.",
      technologies: ["Web Application", "Mobile Application", "Digital Health", "UI/UX Design"],
      image: "assets/images/daryeelx-preview.svg",
      highlights: [
        "Seamless patient-to-clinic appointment scheduling",
        "Reduces clinic waiting room congestion & friction",
        "Human-centric, accessible user experience"
      ]
    }
  },

  projects: [
    {
      id: "hotel-management",
      title: "Hotel Management System",
      category: "Full-Stack Web System",
      status: "University Project",
      statusType: "university",
      description: "A web-based hotel management system designed to manage rooms, guests, bookings, payments, and hotel operations.",
      technologies: ["PHP", "SQL", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Room Management",
        "Guest Management",
        "Booking Management",
        "Payments & Ledger",
        "Secure Authentication",
        "Operational Dashboard"
      ],
      image: "assets/images/hotel-preview.svg",
      githubUrl: "", // TODO: Add the verified Hotel Management System repository URL.
      liveUrl: ""
    },
    {
      id: "ebalami-daryeelx",
      title: "DaryeelX / E-Balami",
      category: "Health Technology",
      status: "In Development",
      statusType: "development",
      description: "A digital healthcare booking concept designed to make it easier for patients to connect with healthcare services and book appointments seamlessly.",
      technologies: ["Web Application", "Mobile Application", "Digital Health", "PHP/SQL Backend"],
      features: [
        "Doctor & Clinic Directory",
        "Instant Slot Booking",
        "Patient Records Overview",
        "Status Notifications"
      ],
      image: "assets/images/daryeelx-preview.svg",
      githubUrl: "",
      liveUrl: "",
      learnMoreUrl: "#daryeelx" // Product is in development; this is an overview, not a demo.
    },
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      category: "Modern Web Architecture",
      status: "Live Production",
      statusType: "live",
      description: "My personal developer portfolio at abdis.ink engineered with semantic HTML5, vanilla CSS design system, responsive layout, dark/light theme storage, and fast performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
      features: [
        "Light & Dark Theme Persistence",
        "Centralized Data Configuration",
        "Zero Framework Bloat",
        "DaryeelX Brand Identity"
      ],
      image: "assets/images/portfolio-preview.svg",
      githubUrl: "", // TODO: Add the verified Personal Portfolio repository URL.
      liveUrl: "https://abdis.ink"
    }
  ],

  skills: {
    frontend: {
      category: "Frontend Development",
      icon: "code",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)",]
    },
    backend: {
      category: "Backend Development",
      icon: "server",
      items: ["PHP","python"]
    },
    database: {
      category: "Database & Storage",
      icon: "database",
      items: ["SQL", "MySQL"]
    },
    tools: {
      category: "Tools & Workflow",
      icon: "tool",
      items: ["Git", "GitHub", "VS Code"]
    },
    learning: {
      category: "Learning / Exploring",
      icon: "compass",
      items: ["Modern Full-Stack Development", "AI-assisted Software Development"," Data analysis"]
    }
  },

  experience: [
    {
      role: "Founder / Technology Builder",
      organization: "DaryeelX IT Solutions",
      badge: "Flagship Venture",
      period: "2024 – Present",
      description: "Working on digital product ideas and technology solutions under the DaryeelX brand. Leading product conceptualization, human-centric design, and development for platforms like E-Balami.",
      bullets: [
        "Executing the core philosophy: Technology should serve humanity",
        "Designing architecture for web and mobile healthtech interfaces",
        "Building digital systems that elevate healthcare accessibility and operations"
      ]
    }
  ],

  education: [
    {
      degree: "Information Technology / Computer Science Degree",
      institution: "Golis University",
      period: "2023 – 2026",
      status: "In Progress",
      description: "Rigorous study in core computing disciplines including programming paradigms, relational database systems, algorithms, web technologies, and systems engineering."
    }
  ],

  currentlyBuilding: [
    {
      title: "Completing Hotel Management System",
      badge: "University System",
      description: "Polishing guest booking states, automated receipt generation, room status transitions, and role-based administrative dashboards in PHP & MySQL."
    },
    {
      title: "Building DaryeelX Products (E-Balami)",
      badge: "Venture Flagship",
      description: "Advancing user journey prototypes and system specifications for the healthcare appointment scheduling system to improve local healthcare accessibility."
    },
    {
      title: "Strengthening Full-Stack Skills",
      badge: "Technical Growth",
      description: "Deepening knowledge of scalable modern full-stack workflows, REST API conventions, responsive UI standards, and AI-assisted development tools."
    }
  ],

  contact: {
    heading: "Let’s Connect",
    subheading: "Whether you want to discuss technology, software development, collaboration, or an interesting idea, feel free to reach out.",
    formNote: "Messages send directly via your preferred email client, or connect through LinkedIn & GitHub."
  }
};

if (typeof Object.freeze === 'function') {
  Object.freeze(portfolioData);
}

