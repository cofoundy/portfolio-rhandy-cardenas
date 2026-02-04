export const siteConfig = {
  name: "Rhandy Cardenas",
  title: "PhD Researcher · Control & Robotics",
  description: "PhD researcher developing decision-making systems for autonomous vehicles at Renault Group and Université de Technologie de Compiègne. Published in IEEE Transactions on Intelligent Vehicles.",
  accentColor: "#3b82f6",
  social: {
    email: "rhandy.cardenas-curo@hds.utc.fr",
    linkedin: "https://linkedin.com/in/rhandy-cardenas",
    github: "https://github.com/RhandyC",
  },
  aboutMe:
    "3rd-year PhD student passionate about research and the automotive industry. I'm developing tactical decision-making systems to guarantee safe operation of ADAS within Operational Design Domains (ODD) at Renault Group and Heudiasyc UTC laboratory. My research combines control theory, robotics, and machine learning for intelligent vehicles. Originally from Peru, now based in France.",
  skills: [
    "Python",
    "ROS 2",
    "C/C++",
    "MATLAB/Simulink",
    "Machine Learning",
    "IPG CarMaker",
    "CARLA",
    "Gazebo",
    "TensorFlow",
    "Linux",
    "Git",
    "LabVIEW"
  ],
  projects: [
    {
      name: "IEEE TIV Survey Paper",
      description:
        "Context-aware and Reliable Long-term Decision-Making for Safe Intelligent Vehicles: A comprehensive survey published in IEEE Transactions on Intelligent Vehicles (2024).",
      link: "https://doi.org/10.1109/TIV.2024.3524881",
      skills: ["Survey", "Decision-Making", "ADAS", "Safety"],
    },
    {
      name: "ODD-based Decision-Making",
      description:
        "Long-term decision-making framework for intelligent vehicles operating within Operational Design Domains. Presented at IEEE IV Symposium 2025, Cluj-Napoca, Romania.",
      link: "",
      skills: ["ROS 2", "Python", "Autonomous Vehicles"],
    },
    {
      name: "Automatic Lane Change System",
      description:
        "Assessing decisional capability for ODD-compliant automatic lane change using Sense-Think-Act paradigm. Published at IFAC IAV Symposium 2025, Phoenix, USA.",
      link: "",
      skills: ["Control Systems", "ADAS", "SIL/VIL Testing"],
    },
    {
      name: "Fuzzy System for CARLA",
      description:
        "Tactical driving of vehicles using a fuzzy logic system for decision-making in the CARLA autonomous driving simulator. Open-source implementation.",
      link: "https://github.com/RhandyC/FuzzySystemCarla",
      skills: ["Python", "Fuzzy Logic", "CARLA", "Decision-Making"],
    },
  ],
  experience: [
    {
      company: "Groupe Renault × Heudiasyc UTC",
      title: "PhD Researcher – CIFRE R&AE ADAS",
      dateRange: "Jul 2023 – Jul 2026",
      bullets: [
        "Developing tactical decision-making system for ADAS within ODD limits",
        "Design and implementation with ROS 2, Python, and C",
        "SIL and VIL testing cycles with direct experimentation on real vehicles",
        "Published survey paper in IEEE Transactions on Intelligent Vehicles",
      ],
    },
    {
      company: "Université de Technologie de Compiègne",
      title: "Teaching Assistant – Control Systems",
      dateRange: "Oct 2023 – Feb 2024",
      bullets: [
        "Laboratory supervision for control systems practical work",
        "Student mentoring using MATLAB/Simulink for analysis and implementation",
      ],
    },
    {
      company: "Groupe Renault CTA",
      title: "R&AE Intern – Final Year Project",
      dateRange: "Feb 2022 – Aug 2022",
      bullets: [
        "Developed adaptive HMI for studying decision-making in autonomous driving",
        "Built system on ROS architecture, evaluated in simulated environment",
      ],
    },
    {
      company: "NW Technology",
      title: "R&D Intern – Assistant Engineer",
      dateRange: "Sep 2020 – Feb 2021",
      bullets: [
        "Designed flexible polymer shell for aerodynamic pressure sensors using 3D printing",
        "Developed Python HMI for GCODE post-processing",
      ],
    },
    {
      company: "UTC Innovation Center",
      title: "Fablab Monitor",
      dateRange: "Oct 2019 – Jan 2020",
      bullets: [
        "Supported engineering students on prototyping projects",
        "Trained users on 3D printers, laser cutting, and CAD software",
      ],
    },
  ],
  education: [
    {
      school: "Université de Technologie de Compiègne × Renault",
      degree: "PhD in Control and Robotics (CIFRE)",
      dateRange: "2023 – 2026",
      achievements: [
        "Industrial research partnership with Renault Group",
        "Focus: Decision-making for intelligent vehicles",
        "Published in IEEE Transactions on Intelligent Vehicles",
      ],
    },
    {
      school: "Université de Technologie de Compiègne",
      degree: "MEng Mechanical Engineering, Mechatronics",
      dateRange: "2019 – 2023",
      achievements: [
        "Specialization in robotics and control systems",
        "Final project at Renault on autonomous vehicles",
      ],
    },
    {
      school: "IUT Nice Côte d'Azur",
      degree: "DUT Electrical Engineering & Industrial Computing",
      dateRange: "2017 – 2019",
      achievements: [
        "Foundation in electronics and embedded systems",
        "Internship at I21 Innovation",
      ],
    },
  ],
  languages: [
    { name: "Spanish", level: "Native", flag: "🇵🇪" },
    { name: "French", level: "C1", flag: "🇫🇷" },
    { name: "English", level: "C1", flag: "🇬🇧" },
    { name: "German", level: "A2", flag: "🇩🇪" },
  ],
  certifications: [
    {
      name: "Self-Driving Car Engineer Nanodegree",
      issuer: "Udacity / Waymo / NVIDIA",
      date: "2025 – Present",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University",
      date: "2023",
    },
  ],
};
