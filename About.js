import React from "react";

import Common from "./Common";
import web from "./img/about.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="contact now"
      />
    </>
  );
};

export default About;
