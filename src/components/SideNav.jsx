import React, { useEffect, useState } from "react";
import Envelope from "../assets/img/envelope.svg";
import LinkedIn from "../assets/img/linkedin.png";
import GitHub from "../assets/img/github.svg";

const SideNav = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 700) {
        setReveal(true);
      } else {
        setReveal(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.addEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${reveal ? "reveal" : ""}`}>
      <ul className="nav flex-column translate-middle text-end">
        <li className="nav-item">
          <a className="nav-link" href="#aboutAnchor">
            About
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#experienceAnchor">
            Experience
          </a>
        </li>
        <li className="nav-item flex-row">
          <a href="mailto:dinh2644.mail@gmail.com" className="ms-1">
            <img src={Envelope} alt="https://tudinh.vercel.app/" width="17" height="17" title="Email" />
          </a>
          <a href="https://www.linkedin.com/in/dinh2644/" className="ms-2">
            <img
              src={LinkedIn}
              alt="https://tudinh.vercel.app/"
              width="17"
              height="17"
              title="LinkedIn"
            />
          </a>
          <a href="https://github.com/dinh2644" className="ms-2">
            <img src={GitHub} alt="https://tudinh.vercel.app/" width="17" height="17" title="GitHub" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
