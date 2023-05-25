import React from "react";
import { About } from "./icons";

const AboutPage = () => {
  return (
    <div className="w-3/5 mx-auto mb-40">
      <About data-aos="fade-up" data-aos-delay="20" />
      <h1 className="text-3xl my-3 font-semibold" data-aos="fade-up" data-aos-delay="40">
        About me
      </h1>
      <p className="text-2xl" data-aos="fade-up" data-aos-delay="60">
        I'm Goga Okradze. A web developer.In my free time I study front end and back end
        development. My goal is to create performant web apps.
      </p>
    </div>
  );
};

export default AboutPage;
