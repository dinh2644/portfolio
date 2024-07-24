import Bank from "../assets/img/bank.png";
import CodePath from "../assets/img/codepath_pic.jpg";
import Lyft from "../assets/img/lyft.png";
import Headstarter from "../assets/img/headstarterlogo.jpg"

export const ExpList = [
  {
    name: "U.S. Treasury",
    img: Bank,
    role: "Software Developer Intern @ Department of Treasury",
    period: "Jun 2022 - PRESENT",
    desc: [
      "Converted 500+ Excel columns into hyperlinks by prepending a fixed URL with each row's unique data and established communication between a SQL Server/SharePoint using PowerShell scripts, resulting in convenient access to relevant information.",
      "Deployed web forms within SharePoint using C# and ASP.NET, interacting with SQL Server, and utilizing Microsoft IIS for hosting and deployment.",
      "Implemented stored procedures in Microsoft SQL Server, contributing to ETL (Extract, Transform, Load) processes for data integration of 1000+ records.",
    ],
  },
  {
    name: "CodePath",
    img: CodePath,
    role: "CodePath Intermediate Web Development | WEB102",
    period: "Sep 2023 - Nov 2023",
    desc: [
      "Crafted 5 mini React projects centered around reusable components, user input handling, RESTful APIs integration, React routing, and database management",
      "Developed a capstone project that prioritized accessibility and adhered to fundamental web design principles while implementing seamless CRUD operations using Supabase",
    ],
  },
  {
    name: "Forage | Lyft",
    img: Lyft,
    role: "Lyft Back-End Engineering Job Simulation | Certificate",
    period: "Issued Nov 2023",
    desc: [
      "Completed the Back-End Engineering job simulation, taking over development of an unfinished project for the Lyft Rentals team",
      "Drafted a UML class diagram representing a new reorganized architecture",
      "Refactored a messy codebase inherited from another team to accurately reflect my new design",
      "Implemented unit tests and added new functionality using test-driven development",
    ],
  },
  {
    name: "Headstarter AI",
    img: Headstarter,
    role: "Headstarter AI Fellowship",
    period: "Jul 2024 - Aug 2024",
    desc: [
      "Built 5+ apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users",
      "Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns",
      "Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns",
    ],
  },
];
