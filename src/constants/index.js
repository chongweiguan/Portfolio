import {
    tailwind,
    c,
    springboot,
    git,
    mysql,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    wingsed,
    ezorder,
    trackr,
    objectdetection,
    sociopedia,
    snapshotai,
    aia,
    eusoff,
    toppan,
    virtum,
    firebase,
    dart,
    flutter,
    java,
    tensorflow,
    python,
    express,
    azendian,
    github,
    linkedin,
    instagram,
    secondbrain,
    nus,
    accenture,
    bytedance,
    vue,
    azure,
    cpp,
    redis,
    csharp,
    typescript,
    docker,
    gic,
    reddittiktok
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "testimonials",
      title: "Testimonials",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Entrepreneur",
      icon: mobile,
    },
    {
      title: "Undergraduate Student",
      icon: backend,
    },
    {
      title: "National Athlete",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Vue",
      icon: vue,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Springboot",
      icon: springboot,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Business Development Executive",
      company_name: "AIA Singapore",
      icon: aia,
      iconBg: "#E6DEDD",
      date: "April 2021 - July 2021",
      points: [
        "Coordinated meetings with over 100 companies to discuss potential marketing and business opportunities.",
        "Conducted screening interviews with 15 candidates and successfully onboarded 3 financial consultants.",
        "Spearheaded a business development collaboration with Walch and Kai Advisory, leading marketing initiatives that generated over 500 leads within the first 2 weeks.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Eusoff Hall Hackers",
      icon: eusoff,
      iconBg: "#E6DEDD",
      date: "August 2021 - May 2022",
      points: [
        "Proficient in developing and maintaining web applications and telegram bots using React.js and related technologies.",
        "Collaborated with a team of 3 to develop LaundroBot, a bot that allowed residents to see real-time availability on washing machines through a telegram bot",
        "Contributed to the development of the Eusoff Hall's Jersey Bidding Website as part of a team of 12, enabling Eusoff Hall residents to bid for their jersey numbers for the highly anticipated annual Inter-Hall Games"
      ],
    },
    {
      title: "CS2106 Teaching Assistant",
      company_name: "National University of Singapore",
      icon: nus,
      iconBg: "#E6DEDD",
      date: "January 2023 - April 2023",
      points: [
        "Had the privilege of leading weekly tutorial classes on the fascinating ‘Introduction to Operating Systems’ Module, guiding and inspiring 2 classes of 20 enthusiastic undergraduates.",
        "Crafted engaging class materials and offered personalized consultations, nurturing a deeper appreciation and mastery of the intricate Linux Operating System among the students."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Toppan Ecquaria",
      icon: toppan,
      iconBg: "#E6DEDD",
      date: "November 2022 - January 2023",
      points: [
        "Collaborated with a team of 13 software engineers and analysts to engineer the central communication system in ICA's 103-million-dollar Documentation Management System (iSMART).",
        "Developed and implemented responsive and functional web application, enabling ICA officers to efficiently locate and access classified documents such as Passports and Identity Cards.",
        "Build and maintain test automation system using Java scripting for continuous integration and constant quality checking."
      ],
    },{
      title: "Full Stack Developer Intern",
      company_name: "Azendian Solutions",
      icon: azendian,
      iconBg: "#F15613",
      date: "Mar 2023 - Jul 2023",
      points: [
        "Developed and optimized RESTful APIs for efficient data retrieval from a database, reducing data fetching time by over 50%.",
        "Exceeded expectations by expanding the project beyond the anticipated 8 pages, actively contributing to the full stack development of over 20 schematic pages for the company’s Smart Estate Project."
      ],
    }, {
      title: "Software Engineer Intern",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "white",
      date: "Aug 2023 - Dec 2023",
      points: [
        "Enhanced security by redesigning 30+ RESTful API endpoints, optimizing data handling by moving sensitive information from headers to encrypted request bodies, enabling secure transmission of data over the internet.",
        "Deployed a Redis instance in a secured server using docker, this cache system resulted in a 50% decrease in data fetching time.",
        "Utilized Azure key vault services to encrypt sensitive information and payloads, resulting in overall improvement in data security.",
        "Spearheaded full-stack development of the OTP (One-Time Password) page within the web application."
      ],
    },
    {
      title: "Backend Engineer Intern",
      company_name: "ByteDance",
      icon: bytedance,
      iconBg: "white",
      date: "Jan 2024 - Jun 2024",
      points: [
        "Developed a robust microservice using Flask, Kafka and ByteDance cloud services, enabling teams across ByteDance to synchronize over 1,000 machine learning models across US and Europe regions.",
        "Developed Python scripts to migrate over 10,000 machine learning models and 50,000 corresponding versions from the USA Hadoop Distributed File System (HDFS) node to the Singapore HDFS node.",
        "Created specialised approval processes for 5 distinct teams utilizing my team’s machine learning deployment platform."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "GIC",
      icon: gic,
      iconBg: "#000066",
      date: "Jan 2024 - Jun 2024",
      points: [
        "Investment Services Public Markets Team",
      ],
    },
  ];

  const socialmedia = [
    {
      id: "Linkedin",
      link: "https://www.linkedin.com/in/chongweiguan/",
      icon: linkedin
    },
    {
      id: "Github",
      link: "https://github.com/chongweiguan",
      icon: github
    },
    {
      id: "Instagram",
      link: "https://www.instagram.com/chongweiguan",
      icon: instagram
    }
  ]
  
  const testimonials = [
    {
      testimonial: "His commitment to his work and his ability to collaborate effectively with team members made him a standout contributor.",
      name: "Deyu Huang",
      designation: "Software Engineer",
      company: "ByteDance",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      link: "https://drive.google.com/file/d/1IMDHhw019lAkkK639H3_onQ-BMqFCYgF/view?usp=sharing"
    },
    {
      testimonial:
        "I can confidently say that he is an exceptional student athlete with a rare combination of talent, drive, and character.",
      name: "Ng Chee Hong",
      designation: "Senior Manager",
      company: "National University of Singapore",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      link: "https://drive.google.com/file/d/1qwhZ5lmPOmi7MHwE2OgSJs3qv7RnEBrs/view?usp=sharing"
      
    },
    {
      testimonial:
        "He consistently demonstrated initiative by setting clear goals for the team and effectively delivering on his promises.",
      name: "Melvin Tan",
      designation: "Sprints Coach",
      company: "Wings Athletics",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      link: "https://drive.google.com/file/d/1ZpoRy5FVYjNtqaSTyzNnay3qBIUGPNk0/view?usp=sharing"
    },
  ];
  
  const projects = [
    {
      name: "RedditTikTok",
      description:
        "RedditTikTok is a tool for creating viral videos with ease. Users can choose to retrieve a random post from Reddit or input their own story. The bot utilizes the Google Text-to-Speech API to convert text into speech and generate precise word timestamps.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "google-text-to-speech",
          color: "green-text-gradient",
        },
      ],
      image: reddittiktok,
      source_code_link: "https://github.com/chongweiguan/RedditTikTok",
    },
    {
      name: "Second Brain",
      description:
        "SecondBrain serves as a dynamic platform for seamlessly managing expenses, monitoring academic progress, and job search activities. currently in the process of refining and expanding this project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "purple-text-gradient",
        },
      ],
      image: secondbrain,
      source_code_link: "https://github.com/chongweiguan/SecondBrain",
    },
    {
      name: "Snapshot AI",
      description:
        "Snapshot AI is a web application that utilizes the OpenAI API to generate stunning, AI-generated images from user prompts. Users can also share their AI generated images with the community",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "purple-text-gradient",
        },
      ],
      image: snapshotai,
      source_code_link: "https://github.com/chongweiguan/SnapshotAI",
    },
    {
      name: "Sociopedia",
      description:
        "Sociopedia is a social media web application that allows users to share their thoughts and pictures with the community. Users can interact and connect with friends by liking and commenting on their content.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "purple-text-gradient",
        },
      ],
      image: sociopedia,
      source_code_link: "https://github.com/chongweiguan/Sociopedia",
    },
    {
      name: "Wings Education",
      description:
        "Wings is an all-in-one Tutor-Student networking application that allows Tutors to connect with potential students and help them in their education journey.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: wingsed,
      source_code_link: "https://github.com/chongweiguan/Wings-Education",
    },
    {
      name: "EzOrder",
      description:
        "EzOrder is a Telegram bot that makes the process of collating orders and tracking outstanding payments cleaner and a more pleasant experience for all telegram users.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pythonTelegramAPI",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: ezorder,
      source_code_link: "https://github.com/chongweiguan/EzOrder-Bot",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, socialmedia };