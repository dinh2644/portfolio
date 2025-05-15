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
      "Implemented stored procedures in Microsoft SQL Server, contributing to ETL (Extract, Transform, Load) processes for data integration of 20,000 + records",
      "Built timer jobs in C#.NET, SQL, and SharePoint to automate background tasks for OneCT, Treasury’s proprietary software, including scheduled operations and email alerting",
      "Designed and built SSRS dashboards and reports to support OneCT, Treasury’s proprietary software, enabling teams to monitor usage, performance, and operational metrics",
      "Collaborated with a Project Manager to design and develop a canvas Power Apps emergency communication form, integrated with Power Automate and Outlook, enabling application-specific alerts across the Treasury domain."
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
      "Completed back-end engineering job simulation via Forage which included taking over development of an unfinished project for the Lyft Rentals team",
      "Drafted a UML (Unified Modeling Language) class diagram to represent a reorganized architecture, transitioning from an inheritance-based design to a composition-based approach",
      "Refactored a messy codebase inherited from another team to accurately reflect my new design & developed unit tests and added new functionality using test-driven development",
    ],
  },
  {
    name: "Headstarter AI",
    img: Headstarter,
    role: "Headstarter AI Fellowship",
    period: "Jul 2024 - Aug 2024",
    desc: [
      "Built and deployed 5 AI-driven web applications in 7 weeks using React.js, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and CI/CD practices for rapid iteration",
      "Developed PantryAI, a full-stack Next.js app for pantry inventory management using Supabase and Gemini API to generate step-by-step recipes, with a webcam-based automatic item detection feature",
      "Collaborated with Fellows to build CramIt, a flashcard app with Stripe-enabled premium features, and a RateMyProfessor LLM chatbot that scrapes and indexes data with Pinecone, integrated into a RAG pipeline using LangChain and Gemini",
    ],
  },
];
