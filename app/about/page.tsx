import React, { FC } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const About: FC = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <span style={{ display: "flex", justifyContent: "space-evenly" }}>
        <a href="https://github.com/DenisFer-13" target="_blank">
          <AiFillGithub
            size={30}
            style={{ marginRight: "10px", color: "white" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/denis-ferreyra/" target="_blank">
          <AiFillLinkedin
            size={30}
            style={{ marginLeft: "10px", color: "white" }}
          />
        </a>
      </span>
    </div>
  );
};

export default About;
