import React from "react";
import img_pi_one from "../img/1.png";
import img_pi_two from "../img/2.png";
import img_two from "../img/2.jpg";
import img_three from "../img/3.jpg";
import econocomImage from "../img/Econocom_Logo.jpg";
import digitalHouseImage from "../img/DigitalHouse_Logo.jpg";
import style from "../components/projects.module.css";
import Image from "next/image";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>EXPERIENCIA LABORAL</h2>
        <div className={style.project}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Image className={style.img} src={econocomImage} alt="img" />
            <div style={{ textAlign: "center", padding: "10px" }}>
              <div>
                Trabajo, desde febrero de 2022, en Econocom SP, empresa donde he
                realizado mas de 6 projectos de diferentes clientes y temáticas,
                desde proyectos de fidelidad, ecommerce, marketplace y hasta
                telefonía.
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className={style.project}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Image className={style.img} src={digitalHouseImage} alt="img" />
            <div style={{ textAlign: "center", padding: "10px" }}>
              <div>
                Trabajé como docente auxiliar para el It Bootcamp de
                MercadoLibre (edición frontend), donde me encargué del dictado
                de algunas clases, resolver temas administrativos, corregir
                sprints, etc. Se trabajó con React, HTML y CSS.
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </article>
      <article className={style.containerProjects}>
        <h2>MIS PROYECTOS ACADÉMICOS</h2>
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
              <div>
                Este es un proyecto grupal realizado en octubre 2021 para el
                bootcamp de Soy Henry, en este proyecto trabajamos en frontend
                con: TypeScript, React, Redux, y en el backend con JavaScript,
                Express, NodeJS, PostgreSQL y Sequelize.
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
                  <button>VER PROYECTO</button>
                </a>
                <a
                  href="https://github.com/DenisOrlando/16Bit-GameStore"
                  target="_blank"
                >
                  <button>REPOSITORIO DE GITHUB</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.project}>
          <h4>PROYECTO INDIVIDUAL: VIDEOGAMES</h4>
          <div className={style.projectImg}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Image className={style.img} src={img_pi_one} alt="img" />
              <Image className={style.img} src={img_pi_two} alt="img" />
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <div style={{ height: "70%" }}>
                Este es un proyecto individual hecho para el bootcamp de Soy
                Henry, en el trabajé con Javascript, React, Redux, HTML, CSS,
                Express, PostgreSQL, Sequelize.
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
                  <button>REPOSITORIO DE GITHUB</button>
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
