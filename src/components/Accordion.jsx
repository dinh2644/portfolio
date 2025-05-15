import { useState } from "react";
import Envelope from "../assets/img/envelope.svg";
import LinkedIn from "../assets/img/linkedin.png";
import GitHub from "../assets/img/github.svg";


const Accordion = () => {
  const [activeContentBx, setActiveContentBx] = useState(false);
  const [skillsContentBx, setSkillsContentBx] = useState(false);
  const [projectsContentBx, setProjectsContentBx] = useState(false);


  const handleContentBx = () => {
    setActiveContentBx(!activeContentBx);
  };

  const handleSkillsBx = () => {
    setSkillsContentBx(!skillsContentBx);
  };

  const handleProjectsBx = () => {
    setProjectsContentBx(!projectsContentBx);
  };

  return (
    <>
      <div className="row mx-auto accordionRow">
        <div className="col">
          {/* ABOUT */}
          <div className="accordion mb-4">
            <div
              className={`contentBx ${activeContentBx ? "active" : ""}`}
              onClick={() => handleContentBx()}
            >
              <div className="aboutSummary">
                About <span className="indexNum">5</span>
              </div>
              <div className="content">
                <p className="aboutDesc">

                  Hi, I’m Tu Dinh. A computer science student from NY. I have
                  great interest to deepen my understanding in full-stack development and various areas of technology. <br />
                  <br /> <strong>Located:</strong>  Rockland, NY <br /> <strong>School:</strong> Binghamton
                  University <br /> <strong>Let's Connect:</strong>{" "}
                  <span id="aboutLogos">
                    <a href="mailto:dinh2644.mail@gmail.com">
                      <img
                        src={Envelope}
                        alt="https://tudinh.me/"
                        width="15"
                        height="15"
                        title="email"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/dinh2644/">
                      <img
                        src={LinkedIn}
                        alt="https://tudinh.me/"
                        width="15"
                        height="15"
                        title="LinkedIn"
                      />
                    </a>
                    <a href="https://github.com/dinh2644">
                      <img
                        src={GitHub}
                        alt="https://tudinh.me/"
                        width="15"
                        height="15"
                        title="GitHub"
                      />
                    </a>
                    <strong><a className="resume" target="_blank" href="https://drive.google.com/file/d/1HioVX2D5iyoWnVQnRbN3_ZOC3e3aSRzQ/view?usp=sharing">Resume</a></strong>
                  </span>

                </p>
              </div>
            </div>
          </div>
          {/* SKILLS */}
          <div className="accordion">
            <div
              className={`contentBx ${skillsContentBx ? "active" : ""}`}
              onClick={() => handleSkillsBx()}
            >
              <div className="skillsSummary">
                Skills <span className="indexNum">25</span>
              </div>
              <div className="skillsContent aboutDesc content">
                - <strong className="projLinksSkills">Languages:</strong> JavaScript/TypeScript, Python, Go, C++, C, C#, Java <br />
                - <strong className="projLinksSkills">Databases:</strong> SQL Server, MongoDB, Supabase, Firebase, Redis <br />
                - <strong className="projLinksSkills">Web Development:</strong> HTML/CSS, Bootstrap, Tailwind CSS, React, Next.js, Node.js, Express.js <br />
                - <strong className="projLinksSkills">Tools & Frameworks:</strong> Docker, Git, GitHub, FastAPI, BullMQ, Kafka, SharePoint, Postman, Power Apps <br />
                - <strong className="projLinksSkills">Certifications:</strong> Lyft Back-End Engineering Job Sim, CodePath's Intermediate Web Development
              </div>
            </div>
            {/* PROJECTS */}
            <div className="accordion">
              <div
                className={`contentBx ${projectsContentBx ? "active" : ""}`}
                onClick={() => handleProjectsBx()}
              >
                <div className="projectsSummary">
                  Projects <span className="indexNum">33</span>
                </div>
                <div className="projectsContent aboutDesc">
                  <ul>
                    <li className="mb-2">- <span className="projLinks">Distributed Event Notification System</span>: an ecommerce microservice architecture using event-driven communication and a choreography-based Saga to coordinate order workflows, ensuring event order and deduplication </li>
                    <li className="mb-2">- <span className="projLinks">Translation Study Tool</span>: a transcript translation web app to make non-English YouTube content accessible to English-speaking audiences </li>
                    <li className="mb-2">- <span className="projLinks">Multi-threaded Web Proxy Server</span>: a multi-threaded proxy server utilizing socket programming for TCP connections and HTTP request handling for HTML, JPEG, and PDF files from a web server </li>
                    <li>- <span className="projLinks">Password Manager</span>: a web app that lets users securely store, manage, and access their account credentials through an organized, card-style interface </li>

                  </ul>
                </div>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="accordion">
              <div className="contentBx">
                <a href="#experienceAnchor" className="accordLinks">
                  <div className="expSummary">
                    Experience <span className="indexNum">41</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
