// Summary And Greeting Section
import emoji from "react-easy-emoji";
import NetCoreImg from "./assets/images/netcore.png";
import CSharpImg from "./assets/images/csharp.png";
import AzureImg from "./assets/images/azure.png";
import JWTImg from "./assets/images/jwt.png";
import DevopsImg from "./assets/images/devops.png";
import MicroImg from "./assets/images/microservice.png";
import RestApiImg from "./assets/images/restapi.png";

const greeting = {
  username: "Kamlesh Panwar",
  greetingText: "Hi all, I'm ",
  greetingName: emoji("Kamlesh Panwar 👋"),
  subTitle: emoji("I am a Senior Full-Stack .NET Core & Angular Developer with 13+ years of experience, specializing in end-to-end application development, enterprise architecture, and remote delivery for global clients.I help startups, SMEs, and enterprises build scalable, secure, and high-performance applications "),
 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kamlesh-Panwar",
  linkedin: "https://www.linkedin.com/in/kamlesh-panwar1988",
  gmail: "kppanwarkamlesh02@gmail.com",
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER EXPLORING MODERN WEB TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop highly interactive and responsive frontend interfaces using Angular and ASP.NET MVC "),
    emoji("⚡ Build scalable and secure RESTful APIs using ASP.NET Core "),
    emoji("⚡ Create end-to-end web applications with clean architecture and optimized performance "),
    emoji("⚡ Implement security best practices including authentication, authorization, and data protection "),
    emoji("⚡ Integrate third-party services like Azure into web solutions "),
    emoji("⚡ Design and manage relational databases using SQL Server with Entity Framework Core "),
    emoji("⚡ Perform efficient web scraping and data extraction using C# and JavaScript tools "),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      Image: CSharpImg,
      id: "csharp",
    },
    {
      skillName: ".NET Core",
      Image: NetCoreImg,
      id: "netcore",
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
      id: "angularjs",
    },
    {
      skillName: "SQL Server",
      fontAwesomeClassname: "fas fa-database",
      id: "sql",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      id: "html-5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      id: "css3",
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js",
      id: "js",
    },
    {
      skillName: "Azure",
      Image: AzureImg,
      id: "azure",
    },
    {
      skillName: "JWT",
      Image: JWTImg,
      id: "jwt",
    },
    {
      skillName: "REST API",
      Image: RestApiImg,
      id: "restapi",
    },
    {
      skillName: "DevOps",
      Image: DevopsImg,
      id: "devops",
    },
    {
      skillName: "Microservice",
      Image: MicroImg,
      id: "micro",
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github",
      id: "git",
    },
  ],
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "KamleshPanwar", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Experiences",
  subtitle:
    <br></br>,
  blogs: [
    {
      title: " Fidelity National Financial India ",
      role: "Technical Lead (guide and mentor offshore team)",
      description: [
        emoji("Led a 12-member offshore development team, acting as primary technical point of contact for stakeholders and product owners."),
        emoji("Architected and developed RESTful APIs using .NET Core and Azure Functions to support revenue, order, and cash-log workflows."),
        emoji("Designed Angular 14/15 UI components with reusable architecture and performance optimization."),
        emoji("Implemented CI/CD pipelines and Git version control practices to ensure smooth releases and rollback strategies."),
        emoji("Collaborated with QA and DevOps teams to resolve production issues and improve system stability and security."),
      
      ],
      date: "31 Jan 2022 - Present",
    },
    {
      title: " Infobeans Technology Pvt. Ltd. ",
      description: [
        emoji("Designed and developed a multi-tenant e-commerce platform using ASP.NET Core, Angular, and Microservices architecture."),
        emoji("Built scalable REST APIs for product catalog, order processing, customization modules (greeting cards, e-books), and payment flows."),
        emoji("Integrated Azure Blob Storage for digital asset management and high-availability content delivery."),
        emoji("Optimized database queries and indexing in SQL Server to improve performance for high-traffic scenarios."),
        emoji("Mentored junior developers, conducted peer code reviews, and ensured adherence to SOLID principles and clean architecture."),
      ], 
      date: " 05 Apr 2018 to 28 Jan 2022",
    },
    {
      title: " Intellicus Technologies Pvt. Ltd.",
      description: [
        emoji("Developed dynamic theming framework for dashboards containing charts, maps, and data grids."),
        emoji("Implemented UI customization logic using JavaScript, jQuery, and C# to allow runtime theme switching."),
        emoji("Optimized rendering performance and cross-browser compatibility."),
        emoji("Guided junior developers and reviewed UI component implementations."),
      ],  
      date: " 30 Mar 2016 to 30 Mar 2018",
    },
    {
      title: " Infosys Ltd. ",
      description:[
        emoji("Developed claim processing modules using ASP.NET MVC and SQL Server."),
        emoji("Implemented business rules for claim validation, approval, and rejection workflows."),
        emoji("Participated in Agile ceremonies (Sprint Planning, Daily Standups, Retrospectives)."),
        emoji("Wrote unit tests and performed defect fixing during UAT and production support."),
        emoji("Collaborated with onshore clients to clarify requirements and resolve issues."),
      ],  
      date: "16 Feb 2015 to 25 Mar 2016 ",
    },
    {
      title: " Syntel Ltd.  ",
      description:[
        emoji("Designed and developed MVC-based healthcare application for patient search and clinical data retrieval."),
        emoji("Implemented modules for demographic details, ICD-9/ICD-10, CPT codes, and medical history."),
        emoji("Developed responsive UI using HTML, CSS, JavaScript, and jQuery."),
        emoji("Created complex SQL queries and stored procedures for high-performance search."),
        emoji("Prepared technical documentation, performed unit testing, and supported system integration testing."),
      ],  
       date: " 24 Sep 2012 to 30 Jan 2015",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  email_address: "kppanwarkamlesh02@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  openSource,
  blogSection,
  contactInfo,
};
