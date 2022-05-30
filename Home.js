import React from "react";

import Common from "./Common";
import web from "./img/web.webp";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
