import Accordion from "./Accordion";
import SideNav from "./SideNav";
import Portrait from "./Portrait";

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
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 ">
              {/* Portrait */}
              <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                  <Portrait />
                </div>
              </div>
              {/* Sub-data */}
              <div className="row mb-5">
                {/* Name */}
                <div className="col d-flex justify-content-center text-center mb-2">
                  <h1 id="tuDinh">Tu Dinh</h1>
                </div>
                {/* School  */}
                <div className="col-12 d-flex justify-content-center text-center">
                  <p className="schoolCaption">Software Developer</p>
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
