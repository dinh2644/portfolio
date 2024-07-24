import React from "react";

const Cards = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="card PC1">
            <div className="img-description">
              <h2>Anime Recommender v1</h2>
              <p>A Code.org project to get you started with an anime show.</p>
            </div>
          </div>
        </div>
        <div
          className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="card PC2">
            <div className="img-description">
              <h2>Portfolio v1</h2>
              <p>A pure HTML/CSS portfolio project.</p>
            </div>
          </div>
        </div>
        <div
          className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="card PC3">
            <div className="img-description">
              <h2>Anime Recommender v2</h2>
              <p>
                A recommender system utilzing Python's scikit-learn and pandas
                visualized w/ Streamlit's framework.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="card PC4">
            <div className="img-description">
              <h2>Audit Management System</h2>
              <p>
                Object oriented programming project for an auditing system with
                an Aldi theme.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="card PC5">
            <div className="img-description">
              <h2>Spellchecker</h2>
              <p>
                A spellchecker app utilizing a Trie data structure designed to
                return back misspelled words from an input text
              </p>
            </div>
          </div>
        </div>

        <div
          className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="card PC6">
            <div className="img-description">
              <h2>CodeHub</h2>
              <p>
                An online hub to ask, discuss, and get feedback anything
                software related. It will primarily be a format for users to get
                help with code/programming questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
