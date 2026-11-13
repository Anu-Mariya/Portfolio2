import { Project, Experience, Education, Certification, SkillCategory } from '../types';

export const personalInfo = {
  name: "Anu Mariya Varghese",
  title: "Software Engineer & Full-Stack Developer",
  shortRole: "Full-Stack Web & Python Developer",
  headline: "MCA Student at FISAT • Building modern web apps with the MERN stack & Python",
  tagline: "I build responsive, full-stack web applications and data-driven tools. Currently pursuing my MCA and looking for software engineering opportunities.",
  email: "anumariyavarghese0317@gmail.com",
  phone: "+91 9048782200",
  rawPhone: "9048782200",
  location: "Kerala, India",
  fullLocation: "Chalakudy / Angamaly, Kerala, India",
  linkedin: "https://www.linkedin.com/in/anu-mariya-varghese",
  linkedinHandle: "in/anu-mariya-varghese",
  github: "https://github.com/Anu-Mariya",
  githubHandle: "github.com/Anu-Mariya",
  avatar: "/anu-mariya-varghese.jpg",
  resumeUrl: "/Anu_Mariya_Varghese_Resume.pdf",
  availabilityStatus: "Open to internship & software engineering roles",
  bio: [
    "Hi, I'm Anu Mariya! I'm an MCA student at Federal Institute of Science and Technology (FISAT) in Kerala, having previously graduated with a BCA from Sahrdaya College.",
    "I enjoy building software that people can easily interact with and genuinely benefit from. My work centers around full-stack web development using the MERN stack (MongoDB, Express, React, Node.js) and Python (Flask, data handling, and machine learning).",
    "I'm driven by writing code that is clean, readable, and easy to maintain. When tackling a project, I look at both sides of the coin: making the frontend intuitive and responsive, and keeping the backend APIs and database queries efficient.",
    "Alongside coding, I serve as a student coordinator for our computer applications department at FISAT, where I help organize departmental events and collaborate closely with teachers and classmates."
  ],
  traits: [
    "Quick Learner",
    "Problem Solver",
    "Collaborative Teammate",
    "Adaptable",
    "Reliable & Organized"
  ],
  languages: [
    { name: "English", level: "B2 Certified (Cambridge)" },
    { name: "Malayalam", level: "Native" },
    { name: "Tamil", level: "Conversational" }
  ],
  interests: [
    "Full-Stack Web Development",
    "Applied Machine Learning & AI APIs",
    "Database Architecture",
    "Playing Chess",
    "Craft Works & Design"
  ]
};

export const projectsData: Project[] = [
  {
    id: "civic-sense",
    title: "Civic Sense – AI-Powered Complaint Platform",
    tagline: "A digital grievance platform connecting citizens with city municipal departments using AI image classification and GPS mapping.",
    category: "Full-Stack Web & AI",
    period: "2026",
    role: "Full-Stack Developer",
    problem: "When people spot civic issues like potholes, uncollected waste, or broken streetlights, reporting them is often cumbersome and lacks transparency. Municipal staff also struggle with duplicate complaints and sorting which department handles what.",
    solution: "I built Civic Sense to streamline the entire loop. Citizens can snap a photo and submit a report with their GPS location. An AI classification model (using Gemini API) categorizes the issue automatically, flags duplicates, routes the ticket to the right department, and updates the citizen as work progresses.",
    candidateContribution: [
      "Built the responsive user interface using React and modern CSS for effortless complaint reporting on phones and desktops.",
      "Integrated Gemini API to inspect complaint photos and determine the issue category and severity level.",
      "Developed backend REST API endpoints with Express and Node.js for complaint tracking, status updates, and notification triggers.",
      "Implemented GPS coordinate detection and duplicate report checks to save city staff from handling the same issue multiple times.",
      "Designed the MongoDB database structure to manage citizens, tickets, and administration logs."
    ],
    outcome: "Created a working platform that makes local issue reporting transparent for citizens while saving municipal teams valuable triage time.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "GPS / Maps API", "JavaScript"],
    highlights: [
      "AI photo classification via Gemini API",
      "Automatic duplicate detection",
      "Live GPS geotagging",
      "Interactive municipal dashboard & citizen reward points"
    ],
    githubUrl: "https://github.com/Anu-Mariya",
    featured: true
  },
  {
    id: "heart-hub",
    title: "Heart Hub – Health Prediction App",
    tagline: "A machine learning web application that predicts cardiovascular risk using patient health parameters.",
    category: "Machine Learning & Web",
    period: "2024 – 2025",
    role: "Lead Developer",
    problem: "Cardiovascular health factors need quick and accurate assessment. However, clinical prediction tools can be complicated to access for quick preliminary checks.",
    solution: "I created Heart Hub, a full-stack ML web application. Users or healthcare workers can enter key patient health metrics, and a trained Decision Tree model provides an immediate risk prediction along with record tracking.",
    candidateContribution: [
      "Preprocessed clinical health datasets by handling missing values, encoding features, and scaling numerical inputs.",
      "Trained and evaluated a Decision Tree classification model using Scikit-learn to predict heart attack risk.",
      "Built a Python Flask backend to serve the model predictions via clean REST endpoints.",
      "Implemented user authentication and created a structured MySQL database for storing and retrieving patient records safely.",
      "Designed the user interface with HTML, CSS, and JavaScript for smooth data input and clear result visualization."
    ],
    outcome: "Built an easy-to-use health tool delivering instant, reliable predictive risk insights and safe history tracking.",
    technologies: ["Python", "Flask", "Scikit-learn", "MySQL", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Trained Decision Tree model",
      "Feature scaling & data preprocessing",
      "Secure user login and sessions",
      "Normalized MySQL database for patient history"
    ],
    githubUrl: "https://github.com/Anu-Mariya",
    featured: true
  },
  {
    id: "smart-cafeteria",
    title: "Smart Cafeteria Management System",
    tagline: "A MERN stack web app to simplify student meals, daily specials, and cafeteria administration.",
    category: "Full-Stack Web (MERN)",
    period: "2026",
    role: "Full-Stack Developer",
    problem: "Campus cafeterias face long queues during rush hours, misplaced manual registers, and difficulty updating daily specials or tracking student meal numbers in real time.",
    solution: "Developed a full-stack web application with the MERN stack (MongoDB Atlas, Express, React, Node.js) that manages student registrations, active food menus, daily special offers, and administrative statistics in one place.",
    candidateContribution: [
      "Created dynamic React components for student registration, browsing menus, and viewing active special offers.",
      "Built an intuitive dashboard showing real-time statistics like registered students and current food availability.",
      "Engineered backend REST endpoints in Express.js and Node.js for managing menu items and meal records.",
      "Configured cloud database schemas with MongoDB Atlas and Mongoose with data validation.",
      "Used Git and GitHub for clean version control, branch management, and feature tracking."
    ],
    outcome: "Replaced slow manual tracking with a fast, modern digital system that keeps cafeteria staff and students on the same page.",
    technologies: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "Mongoose", "Bootstrap 5", "Git"],
    highlights: [
      "Live operational statistics dashboard",
      "Student dining profile management",
      "Real-time menu item & special offer manager",
      "Cloud database with MongoDB Atlas"
    ],
    githubUrl: "https://github.com/Anu-Mariya",
    featured: true
  }
];

export const experienceData: Experience[] = [
  {
    id: "ict-academy",
    role: "Advanced Python Intern",
    organization: "ICT Academy of Kerala",
    location: "Kerala, India",
    period: "May 2024 – June 2024",
    type: "Internship",
    description: [
      "Completed an intensive one-month internship focusing on advanced Python programming and practical web development.",
      "Worked hands-on with NumPy and Pandas for data manipulation, structured data cleaning, and dataset transformation.",
      "Developed a Flask-based web application to manage data cleanly with modular routing and API endpoints.",
      "Practiced writing clean, well-commented code, debugging errors, and using Git for version control."
    ],
    technologies: ["Python", "Flask", "NumPy", "Pandas", "REST APIs", "Git"]
  },
  {
    id: "fisat-coordinator",
    role: "Student Coordinator",
    organization: "Department of Computer Applications, FISAT",
    location: "Angamaly, Kerala",
    period: "2025 – Present",
    type: "Leadership",
    description: [
      "Help plan and coordinate departmental events, technical workshops, and coding activities alongside fellow student coordinators.",
      "Assist department faculty with administrative tasks and program agendas to create an engaging environment for students.",
      "Encourage active participation in collegiate tech events and bridge communication between students and faculty."
    ],
    technologies: ["Leadership", "Event Planning", "Teamwork", "Communication"]
  }
];

export const educationData: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Federal Institute of Science and Technology (FISAT)",
    location: "Angamaly, Kerala",
    period: "2025 – 2027",
    gradeOrStatus: "Currently Pursuing",
    highlights: [
      "Focusing on Full-Stack Web Development, Software Engineering, and AI/ML applications.",
      "Serving as Student Coordinator for the Computer Applications Department."
    ]
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Sahrdaya College of Advanced Studies (SCAS)",
    location: "Kodakara, Kerala",
    period: "2022 – 2025",
    gradeOrStatus: "Graduated",
    highlights: [
      "Solid coursework in Data Structures, OOP, Web Programming, and Database Systems.",
      "Built academic software projects and actively participated in technical symposiums."
    ]
  },
  {
    id: "hss",
    degree: "Higher Secondary School (HSS)",
    institution: "Carmel Higher Secondary School",
    location: "Chalakudy, Kerala",
    period: "2008 – 2020",
    gradeOrStatus: "Completed",
    highlights: [
      "Completed foundational schooling with focus on Mathematics and Science."
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-html5",
    name: "IT Specialist – HTML5 Application Development",
    issuer: "Certiport (Pearson VUE)",
    year: "2025",
    category: "Software & Web",
    badgeLabel: "Web Development"
  },
  {
    id: "cert-python",
    name: "IT Specialist – Python",
    issuer: "Certiport",
    year: "2024",
    category: "Programming",
    badgeLabel: "Python"
  },
  {
    id: "cert-cybersecurity",
    name: "Cyber Security Specialist",
    issuer: "Technova",
    year: "2023 – 2024",
    category: "Security & Systems",
    badgeLabel: "Security"
  },
  {
    id: "cert-data-analysis",
    name: "Data Analysis Certification",
    issuer: "Professional Certification Authority",
    year: "2024",
    category: "Data & Emerging Tech",
    badgeLabel: "Data"
  },
  {
    id: "cert-blockchain",
    name: "Blockchain & Cryptocurrency",
    issuer: "Technov",
    year: "2022 – 2023",
    category: "Data & Emerging Tech",
    badgeLabel: "Blockchain"
  },
  {
    id: "cert-english-b2",
    name: "Council of Europe B2 English Certification",
    issuer: "Cambridge University Press & Assessment",
    year: "2022 – 2023",
    category: "Communication",
    badgeLabel: "English B2"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "SQL", highlight: true },
      { name: "C" },
      { name: "PHP" }
    ]
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5", highlight: true },
      { name: "CSS3" },
      { name: "Bootstrap 5" },
      { name: "Responsive Design" }
    ]
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "Flask (Python)", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Gemini AI API" }
    ]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB & Atlas", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "Mongoose ODM" },
      { name: "Database Design" }
    ]
  },
  {
    title: "Tools & Libraries",
    icon: "Cpu",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Scikit-learn (ML)", highlight: true },
      { name: "NumPy & Pandas" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Android Studio" }
    ]
  },
  {
    title: "Ways of Working",
    icon: "Users",
    skills: [
      { name: "Problem Solving", highlight: true },
      { name: "Team Collaboration", highlight: true },
      { name: "Clear Communication" },
      { name: "Time Management" },
      { name: "Event Coordination" }
    ]
  }
];
