/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Md. Asif Iqbal's Portfolio",
  description:
    "A skilled Software Engineer with 8+ years of experience in creating scalable and innovative web applications using Laravel, Vue.js, React.js, and modern technologies.",
  og: {
    title: "Md. Asif Iqbal Portfolio",
    type: "website",
    url: "https://github.com/md-asifiqbal", // Replace with your actual portfolio URL if applicable
  },
};

// Home Page
const greeting = {
  title: "Md. Asif Iqbal",
  logo_name: "MdAsifIqbal",
  nickname: "Asif",
  subTitle:
    "A skilled Software Engineer with 8+ years of experience in creating scalable and innovative web applications using Laravel, Vue.js, React.js, and modern technologies.",
  resumeLink:
    "https://drive.google.com/file/d/1gPPbmF90STjV1jhNqIB9fLPbzJo7Drie/view?usp=sharing", // Update with your resume link
  portfolio_repository: "https://github.com/md-asifiqbal",
  githubProfile: "https://github.com/md-asifiqbal",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/md-asifiqbal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/md-asif-iqbal-pust/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/asif160627/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/asif.ice.pust.160627",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Gmail",
    link: "mailto:asif.ice.pust@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing dynamic web applications using Laravel, Vue.js, and React.js",
        "⚡ Building responsive and user-friendly interfaces with HTML5, CSS3, and Bootstrap",
        "⚡ Creating REST APIs and handling complex server-side logic",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#42B883",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Managing cloud hosting environments and databases on AWS and DigitalOcean",
        "⚡ Implementing CI/CD pipelines for seamless deployment",
        "⚡ Setting up web servers and managing version control with Git and Bitbucket",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "DigitalOcean",
          fontAwesomeClassname: "simple-icons:digitalocean",
          style: {
            color: "#0080FF",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#269539",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#D22128",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing clean, modern, and intuitive user interfaces for web and mobile applications",
        "⚡ Creating visual elements and wireframes to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pabna University of Science and Technology",
      subtitle: "M.Sc. in Information and Communication Engineering (Pursuing)",
      logo_path: "pust_logo.png", // Replace with actual logo path if needed
      alt_name: "PUST",
      duration: "2020 - Present",
      descriptions: [
        "⚡ Engaged in advanced research in Information and Communication Engineering with a focus on emerging technologies and system optimizations.",
        "⚡ Participated in various workshops and seminars to enhance knowledge in cutting-edge technologies.",
      ],
      website_link: "http://pust.ac.bd",
    },
    {
      title: "Pabna University of Science and Technology",
      subtitle: "B.Sc. in Information and Communication Engineering",
      logo_path: "pust_logo.png", // Replace with actual logo path if needed
      alt_name: "PUST",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Studied core subjects like Data Structures, Algorithms, Database Systems, Operating Systems, and Artificial Intelligence.",
        "⚡ Completed projects on Image Caption Generation using CNN and RNN, as well as Human Activity Recognition using Neural Networks.",
        "⚡ Graduated with a CGPA of 3.67 out of 4.00 (2nd Position in the Department).",
      ],
      website_link: "http://pust.ac.bd",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "SQL (Advanced) Certificate",
      subtitle: "- HackerRank",
      logo_path: "sql_certificate.png", 
      certificate_link:
        "https://www.hackerrank.com/certificates/afca1f52ba40",
      alt_name: "HackerRank",
      color_code: "#8C151599",
    },
    {
      title: "React (Basic) Certificate",
      subtitle: "- HackerRank",
      logo_path: "react_certificate.png", 
      certificate_link:
        "https://www.hackerrank.com/certificates/a8193d769d51",
      alt_name: "HackerRank",
      color_code: "#8C151599",
    },
    {
      title: "Cyber Security",
      subtitle: "- Arena Web Security",
      logo_path: "aws certificate.png", 
      certificate_link:
        "https://drive.google.com/file/d/0B9_h47xjA7H_dFVhSUx0SlhoMXE3M0tBVVREdkJmVkV2U1lJ/view?usp=sharing&resourcekey=0-MjJ5BWXonfjJMKd-sO0b7A",
      alt_name: "Arena Web Security",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked on developing scalable web applications and managing cloud infrastructure in various organizations. I specialize in full-stack development using Laravel, Vue.js, and React.js, with a strong emphasis on backend engineering and cloud services.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Linkstaff Co. Ltd.",
          company_url: "https://linkstaff.co.jp/",
          logo_path: "pust_logo.png",  // Replace with actual logo path if needed
          duration: "August 2022 - Present",
          location: "Tokyo, Japan",
          description:
            "Developing various web applications using Laravel, Vue.js, and React.js. Responsible for designing and implementing complex features, troubleshooting issues, and delivering scalable solutions.",
          color: "#000000",
        },
        {
          title: "Senior Software Engineer",
          company: "Aventra Consultant Ltd",
          company_url: "https://aventraconsultant.com",
          logo_path: "aventra.png",  // Replace with actual logo path if needed
          duration: "January 2022 - July 2022",
          location: "Dhaka, Bangladesh",
          description:
            "Led development of web applications and services using Laravel, Vue.js, and React.js. Debugged and improved the performance of existing applications based on client requirements.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "ESAFE Technology Ltd",
          company_url: "https://newsnow24.com",
          logo_path: "e-safe-logo.png",  // Replace with actual logo path if needed
          duration: "January 2020 - January 2022",
          location: "Dhaka, Bangladesh",
          description:
            "Developed and maintained various web applications using Laravel and Vue.js. Worked closely with clients to ensure that projects met their specifications and deadlines.",
          color: "#9b1578",
        },
        {
          title: "Web Developer",
          company: "Pabna University of Science and Technology",
          company_url: "http://pust.ac.bd",
          logo_path: "pust_logo.png",
          duration: "January 2018 - December 2021",
          location: "Pabna, Bangladesh",
          description:
            "Maintained the university’s official portal and salary management system. Developed internal applications and managed web servers for smooth operation.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "Pabna University of Science and Technology",
          company_url: "http://pust.ac.bd",
          logo_path: "pust_logo.png",  
          duration: "June 2016 - December 2017",
          location: "Hybrid",
          description:
            "Worked on various freelance web development projects. Gained experience in full-stack development, building responsive websites, and working closely with clients to deliver custom solutions.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "a-cross-platform-vehicle-tracking-system",
      name: "A Cross-Platform Vehicle Tracking System",
      createdAt: "2024-09-10T00:00:00Z",
      description: "International Journal of Imminent Science & Technology",
      url: "https://journal.ijisnt.com/index.php/public_html/article/view/22",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "asif.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@asificepust",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dhaka, Bangladesh",
    locality: "Mirpur",
    country: "Bangladesh",
    region: "Asia",
    postalCode: "1216",
    streetAddress: "Mirpur 1",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Contact Number",
    subtitle: "+880 1789 594722",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
