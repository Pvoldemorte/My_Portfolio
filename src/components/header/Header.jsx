import React from "react";
import "./header.css";
import CTA from "./CTA";
// import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h4>Hello i'm </h4>
        <div>
        <h1>Chetan <span>Patidar</span> </h1>
        </div>
        <h4 className="text__light">ReactJs Developer</h4>

        <HeaderSocials />
        <CTA />

        {/* <div className="me">
          <img src={Me} alt="my image" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}

      </div>
    </header>
  );
};

export default Header;
