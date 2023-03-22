import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
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
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
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
      title: "Co-founder",
      company_name: "Virtum",
      icon: virtum,
      iconBg: "#383E56",
      date: "November 2021 - Present",
      points: [
        "Collaborated with a team of three friends to establish a small business venture utilizing UV printing technology to personalize PC backplates for customers.",
        "Spearheaded business development efforts, proactively reaching out to potential partners and successfully facilitating productive discussions to explore mutually beneficial collaborations.",
        "Acquired proficiency in Photoshop, and trained in the operation of the Artis 3000U A3+ LED UV Printer, allowing me to personalize and print on backplates."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Toppan Ecquaria",
      icon: toppan,
      iconBg: "#E6DEDD",
      date: "October 2022 - January 2023",
      points: [
        "Collaborated with a team of 13 software engineers and analysts to engineer the central communication system in ICA's 103-million-dollar Documentation Management System (iSMART).",
        "Developed and implemented responsive and functional web application, enabling ICA officers to efficiently locate and access classified documents such as Passports and Identity Cards.",
        "Build and maintain test automation system using Java scripting for continuous integration and constant quality checking."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Demonstrates a selfless and generous attitude, always willing to lend a helping hand and take on a high workload when required.",
      name: "Jessica Lin",
      designation: "Manager",
      company: "Toppan Ecquaria",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      link: "https://drive.google.com/file/d/157LBlB-nspHjl1SAnjjlwQrIRXQve9T7/view?usp=sharing"
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
      link: "https://drive.google.com/file/d/114o7yw_vxkNAWYx0QSJXAqgFAM5JsKTd/view?usp=sharing"
    },
  ];
  
  const projects = [
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
      name: "Object Detection Web Application",
      description:
        "This simple web application detects objects that are on your camera like cellphone, water bottles, a mouse among others",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
      ],
      image: objectdetection,
      source_code_link: "https://github.com/chongweiguan/Object-Detection-Web-App",
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
    {
      name: "Trackr",
      description:
        "Trackr is a desktop application designed for small business ownders that helps them manage supplier contact details, orders and tasks.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javafx",
          color: "green-text-gradient",
        },
      ],
      image: trackr,
      source_code_link: "https://github.com/chongweiguan/tp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };