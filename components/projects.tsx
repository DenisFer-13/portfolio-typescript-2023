import React from "react";
import img_pi_one from "../img/1.png";
import img_pi_two from "../img/2.png";
import img_two from "../img/2.jpg";
import img_three from "../img/3.jpg";
import style from "../components/projects.module.css";
import Image from "next/image";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <article className={style.containerProjects}>
        <h2>MY PROJECTS</h2>
        <div className={style.project}>
          <h4>16BIT GAMESTORE</h4>
          <div className={style.projectImg}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Image className={style.img} src={img_two} alt="img" />
              <Image className={style.img} src={img_three} alt="img" />
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <div style={{ height: "70%" }}>
                This is a groupal project maded for the Henry's bootcamp, in
                this project we worked in front-end with: TypeScript, React,
                Redux, and in the back-end we worked with JavaScript, Express,
                NodeJS, PostgreSQL and Sequelize.
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <a href="https://16-bit-gamestore.vercel.app/" target="_blank">
                  <button>VIEW PROJECT</button>
                </a>
                <a
                  href="https://github.com/DenisOrlando/16Bit-GameStore"
                  target="_blank"
                >
                  <button>GITHUB REPO</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.project}>
          <h4>INDIVIDUAL PROJECT: VIDEOGAMES</h4>
          <div className={style.projectImg}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Image className={style.img} src={img_pi_one} alt="img" />
              <Image className={style.img} src={img_pi_two} alt="img" />
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <div style={{ height: "70%" }}>
                This is a individual project maded for the Henry's bootcamp, in
                this project we worked in front-end with: JavaScript, React,
                Redux, and in the back-end we worked with JavaScript, Express,
                NodeJS, PostgreSQL and Sequelize.
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <a
                  href="https://github.com/DenisOrlando/PI-Videogames-v2"
                  target="_blank"
                >
                  <button>GITHUB REPO</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <BsFillArrowUpCircleFill
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size={40}
          className={style.buttonSide}
        />
      </article>
    </>
  );
};

export default Projects;
