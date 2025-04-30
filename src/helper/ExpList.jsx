import Bank from "../assets/img/bank.png";
import CodePath from "../assets/img/codepath_pic.jpg";
import Lyft from "../assets/img/lyft.png";
import Headstarter from "../assets/img/headstarterlogo.jpg"

export const ExpList = [
  {
    name: "U.S. Treasury",
    img: Bank,
    role: "Software Developer Intern @ Department of Treasury",
    period: "Jun 2022 - January 2025",
    desc: [
      "Wrote PowerShell scripts to automate tasks such as converting 500+ Excel columns into hyperlinks resulting in convenient access to relevant information based on each specific link.",
      "Deployed web forms within SharePoint using C# and ASP.NET, interacting with SQL Server, and utilizing Microsoft IIS for hosting and deployment.",
      "Implemented stored procedures in Microsoft SQL Server, contributing to ETL (Extract, Transform, Load) processes for data integration of 1000+ records.",
      "Developed timer jobs using C#.Net, SQL Stored procedures and SharePoint.",
      "Developed dashboards and reports using SQL Server Reporting Services (SSRS).",
      "Developed an Emergency Communication app using Power Apps."
    ],
  },
  {
    name: "CodePath",
    img: CodePath,
    role: "CodePath Intermediate Web Development | WEB102",
    period: "Sep 2023 - Nov 2023",
    desc: [
      "Crafted 5 mini React projects centered around reusable components, user input handling, RESTful APIs integration, React routing, and database management",
      "Developed a capstone project (Stack Overflow Mini Clone) that prioritized accessibility and adhered to fundamental web design principles while implementing seamless CRUD operations using Supabase",
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
      "Built and deployed 5 AI projects in 7 weeks using React.js, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment. ",
      "Built PantryAI, a full-stack Next.js web app for pantry inventory management with Supabase. Used the Gemini API to generate detailed recipes with step-by-step instructions based on current pantry items. Integrated a webcam feature for automatic pantry items detection.",
      "Collaborated with 3 Fellows to build and deploy CramIt, a web application that allows users to create, study, and manage flashcards. It utilizes Stripe for payment processing, enabling users to purchase premium features and access additional functionality.",
      "Collaborated with 2 Fellows to build RateMyProfessor, an AI chatbot that web scrapes data from the “Rate My Professors” website and upserts them to a Pinecone index, integrated with a RAG pipeline using LangChain and Gemini API to get up-to-date and relevant answers to user queries."
    ],
  },
];
