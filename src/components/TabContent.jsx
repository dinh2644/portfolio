import React from "react";
import { ExpList } from "../helper/ExpList";
import "animate.css";


const TabContent = ({ activeTab }) => {
  return (
    <>
      <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 mt-3">
        <div className="tab-content">
          {ExpList.map((exp, index) => (
            <div
              className={`tab-pane ${index === activeTab ? "active" : ""}`}
              data-aos="fade-up"
              data-aos-duration="500"
              key={index}
            >
              <img src={exp.img} alt="https://tudinh.vercel.app/" width="70" height="70" />
              <div className="treasTitleDuration" id="treasTitle">
                {exp.role} <br />
                <span id="treasDuration">{exp.period}</span>
              </div>
              <ul
                className="treasDesc fadeInUp"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                {exp.desc.map((bullet, i) => (
                  <li className="br" key={i}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabContent;
