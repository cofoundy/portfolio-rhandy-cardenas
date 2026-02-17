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
  publications: [
    {
      title: "Context-Aware and Reliable Long-Term Decision-Making for Safe Intelligent Vehicles: A Survey",
      authors: "R. P. Cardenas, L. Adouane, C. Zinoune and M. A. Benloucif",
      venue: "in IEEE Transactions on Intelligent Vehicles, doi: 10.1109/TIV.2024.3524881",
      link: "https://doi.org/10.1109/TIV.2024.3524881",
      keywords: ["Survey", "Decision-Making", "ODD", "Safety"],
    },
    {
      title: "ODD-based long-term decision-making for intelligent vehicles",
      authors: "R. P. Cardenas Curo, L. Adouane, C. Zinoune and M. A. Benloucif",
      venue: "Proc. IEEE Intell. Vehicles Symp. (IV), Cluj-Napoca, Romania, 22–25 June 2025",
      link: "https://ieeexplore.ieee.org/document/11097482/",
      keywords: ["ODD", "Decision-making", "Markov Decision Process"],
    },
    {
      title: "Assessing the decisional capability for an ODD-compliant automatic lane change system via Sense–Think–Act paradigm",
      authors: "R. P. Cardenas Curo, L. Adouane, C. Zinoune and M. A. Benloucif",
      venue: "Proc. 12th IFAC Symp. Intell. Autonomous Vehicles (IAV), Phoenix, AZ, USA, 7–9 May 2025",
      link: "https://www.sciencedirect.com/science/article/pii/S2405896325003672",
      keywords: ["ODD", "Capability Assessment", "Skill Graph"],
    },
  ],
  academicProjects: [
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
