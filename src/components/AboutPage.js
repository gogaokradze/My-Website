import React from "react";
import { About } from "./icons";

const AboutPage = () => {
  return (
    <div className="w-3/5 mx-auto mb-40">
      <About className={"welcomeText aboutIcon"} />
      <h1 className="text-3xl my-3 font-semibold fade-up">About me</h1>
      <p className="text-2xl fade-up">
        I'm Goga Okradze. A web developer.In my free time I study front end and back end
        development. My goal is to create performant web apps.
      </p>
    </div>
  );
};

export default AboutPage;
