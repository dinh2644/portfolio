import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import PhoneNav from "./components/PhoneNav.jsx";
import "./App.css";
import "./assets/css/responsive.css";
import "./assets/css/bootstrap.min.css"

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Home />
        <Experience />
        <Footer />
        <PhoneNav />
      </div>
    </>
  );
};

export default App;