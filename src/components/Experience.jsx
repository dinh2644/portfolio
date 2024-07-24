import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TabContent from "./TabContent";
import { ExpTab } from "../helper/ExpTab";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabIndicator, setTabIndicator] = useState(0);

  const handeTabClick = (
    index,
    e
  ) => {
    e.preventDefault();

    setActiveTab(index);
    setTabIndicator(index);
  };

  useEffect(() => {
    AOS.init();
  }, [activeTab]);

  return (
    <>
      <section id="experienceAnchor" className="experience">
        <div className="container mainContainer">
          <div className="row mb-5">
            <div
              className="col-xl-12 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="experience">Experience</h1>
            </div>
          </div>
          <div className="row tabs">
            <div
              className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 tab-header mt-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {ExpTab.map((item, index) => (
                <div
                  key={index}
                  className={`tabHeader ${activeTab === index ? "active" : ""}`}
                  onClick={(e) => handeTabClick(index, e)}
                >
                  {item.name}
                </div>
              ))}

              <div
                className="tab-indicator"
                style={{ top: `calc(1px + ${tabIndicator * 50}px)` }}
              ></div>
            </div>
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
