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

  // TODO: Add verified project repository URLs when supplied. No source buttons until then.
  // Portfolio remains in development while the staged improvements are underway.
  projects: [
    {
      "id": "hotel-management",
      "title": "Hotel Management System",
      "category": "University Project",
      "problem": "Managing hotel bookings, guests, rooms and related operations manually can make information difficult to track.",
      "description": "A web-based system designed to organize rooms, guests, bookings, payments and hotel operations through a centralized interface.",
      "contribution": "Developing the university system, including guest booking states, room status transitions and PHP/SQL administrative dashboards.",
      "technologies": [
        "PHP",
        "SQL"
      ],
      "status": "In Development",
      "image": "assets/images/hotel-preview.svg",
      "imageAlt": "Illustration of a hotel management dashboard",
      "githubUrl": "",
      "liveUrl": "",
      "imageWidth": 800,
      "imageHeight": 500
    },
    {
      "id": "ebalami-daryeelx",
      "title": "E-Balami DaryeelX",
      "category": "Health Technology / Product",
      "problem": "Patients may face difficulty discovering healthcare providers and arranging appointments efficiently.",
      "description": "A product intended to help patients discover healthcare providers and manage appointment bookings digitally.",
      "contribution": "As founder, developing the product concept, user journey prototypes and system specifications.",
      "plannedTechnologies": [
        "React (Web)",
        "React Native (Mobile)",
        "Laravel / PHP (Backend)",
        "MySQL (Database)"
      ],
      "status": "In Development",
      "image": "assets/images/daryeelx-preview.svg",
      "imageAlt": "Concept illustration of a healthcare appointment interface",
      "githubUrl": "",
      "liveUrl": "",
      "learnMoreUrl": "#daryeelx",
      "imageWidth": 800,
      "imageHeight": 500
    },
    {
      "id": "personal-portfolio",
      "title": "Personal Portfolio",
      "category": "Personal Project",
      "problem": "Project work and professional background need a clear, accessible place to be presented together.",
      "description": "The website you are viewing: a personal portfolio presenting my projects, skills and background.",
      "contribution": "Building the HTML, CSS and JavaScript website, including project cards, responsive layouts and light/dark themes.",
      "technologies": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "status": "In Development",
      "image": "assets/images/portfolio-preview.svg",
      "imageAlt": "Illustration representing the personal portfolio website",
      "githubUrl": "",
      "liveUrl": "",
      "imageWidth": 800,
      "imageHeight": 500
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

