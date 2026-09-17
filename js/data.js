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

  // About and Featured Venture copy live in index.html.
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
      "githubUrl": "https://github.com/cabdisalaan10/university-project",
      "liveUrl": "",
      "imageWidth": 800,
      "imageHeight": 500
    },
    {
      "id": "eballan-daryeelx",
      "title": "eBallan DaryeelX",
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
    "frontend": {
      "category": "Frontend — Current Projects",
      "icon": "code",
      "items": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    "backend": {
      "category": "Backend — Current Projects",
      "icon": "server",
      "items": [
        "PHP"
      ]
    },
    "database": {
      "category": "Database — Current Projects",
      "icon": "database",
      "items": [
        "SQL"
      ]
    },
    "tools": {
      "category": "Tools & Workflow",
      "icon": "tool",
      "items": [
        "Git",
        "GitHub",
        "VS Code"
      ]
    },
    "planned": {
      "category": "Planned for eBallan",
      "icon": "compass",
      "items": [
        "React (Web)",
        "React Native (Mobile)",
        "Laravel / PHP (Backend)",
        "MySQL (Database)"
      ]
    },
    "exploring": {
      "category": "Learning / Exploring",
      "icon": "compass",
      "items": [
        "Python",
        "Data analysis",
        "AI-assisted software development"
      ]
    }
  },

  experience: [
    {
      "role": "Founder",
      "organization": "DaryeelX",
      "badge": "Founder Work",
      "period": "2024 – Present",
      "description": "Shaping practical digital product concepts and planning eBallan DaryeelX, a healthcare product in development.",
      "bullets": [
        "Defining product requirements and system specifications.",
        "Developing user journey prototypes for healthcare discovery and appointment booking."
      ]
    }
  ],

  education: [
    {
      "degree": "Computer Science",
      "institution": "Golis University",
      "period": "2023 – 2026",
      "status": "In Progress",
      "description": "Computer Science student developing practical software skills through academic projects."
    }
  ],

  currentlyBuilding: [
    {
      title: "Developing Hotel Management System",
      badge: "University System",
      description: "Developing the university project with PHP and SQL, focusing on guest bookings, room status and administrative dashboards."
    },
    {
      title: "Building DaryeelX Products (eBallan)",
      badge: "Founder Work",
      description: "Advancing user journey prototypes and system specifications for the healthcare appointment scheduling system to improve local healthcare accessibility."
    },
    {
      title: "Strengthening Full-Stack Skills",
      badge: "Technical Growth",
      description: "Continuing to learn web development, databases and modern development tools through practical projects."
    }
  ],

  contact: {
    heading: "Let’s Connect",
    subheading: "Whether you want to discuss technology, software development, collaboration, or an interesting idea, feel free to reach out.",
    formNote: "Send a message through the contact form, or connect through LinkedIn and GitHub."
  }
};

if (typeof Object.freeze === 'function') {
  Object.freeze(portfolioData);
}

