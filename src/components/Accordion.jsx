import React, { useState } from "react";
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
                    <strong><a className="resume" target="_blank" href="https://drive.google.com/file/d/1QeBtujjF2ZwxRGtwR-oZfKc_XxP6tjUz/view?usp=sharing">Resume</a></strong>
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
              - <strong>Languages:</strong> JavaScipt, Python, C++, C#, C, SQL, Java <br /> 
              - <strong>Software and DB:</strong> SQL Server, MongoDB, supabase, SharePoint, MongoDB <br />
              - <strong>Additional:</strong> HTML/CSS, React, Node.js, Express.js <br />
              - <strong>Certifications:</strong> Lyft Back-End Engineering Job Sim, CodePath's Intermediate Web Development
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
                  <li className="mb-2">- <a className="projLinks" href="https://github.com/dinh2644/quikblok">QuikBlok</a>: a minimal MERN app designed to help users easily store their account information in an accessible way. </li>
                  <li className="mb-2">- <a className="projLinks" href="https://github.com/dinh2644/http-server">HTTP Server</a>: a simple HTTP server</li>
                  <li>- <a className="projLinks" href="https://github.com/dinh2644/spellchecker">Spellchecker</a>: utilizes a trie data structure returning back misspelled words from an input text</li>
                 
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
