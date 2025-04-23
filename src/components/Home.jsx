import Accordion from "./Accordion";
import SideNav from "./SideNav";
import EnsoCircle from "../assets/img/enso.png";
import React from "react";
import SoftwareDeveloperText from "./SoftwareDeveloperText";

const Home = () => {
  return (
    <>
      <SideNav />
      <section id="about">
        <div
          className="container-fluid mainContainer"
          data-aos="fade-up"
          data-aos-duration="2000"
        >

          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              {/* Name */}
              <div className="row mb-5">
                <div className="col d-flex justify-content-center">
                  <h1 id="tuDinh">Tu Dinh</h1>
                </div>
                <SoftwareDeveloperText />
              </div>

              {/* Logo */}
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <img src={EnsoCircle} alt="https://tudinh.me/" id="ensoCircle" />
                </div>
              </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              {/* Contents title */}
              <div className="row mb-5">
                <div className="col d-flex justify-content-center">
                  <p id="contents">contents</p>
                </div>
              </div>

              {/* Accordion */}
              <Accordion />
            </div>
          </div>





        </div>
      </section>
    </>
  );
};

export default Home;
