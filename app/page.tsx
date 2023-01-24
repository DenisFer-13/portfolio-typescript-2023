"use client"; //Esto permite añadir interactividad a la página
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import React, { FC } from "react";
import style from "./page.module.css";

const scrollTo = (top: number) => {
  window.scrollTo({ top: top, behavior: "smooth" });
};

const Home: FC = () => {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.h2}>Hola a todos! Mi nombre es</h2>
        <h1 className={style.h1}>DENIS FERREYRA</h1>
        <h3 className={style.h3}>Full Stack Developer</h3>
        <p className={style.p}>
          Programador apasionado por los desafíos gráficos y de lógica, poseo 2
          años de experiencia en proyectos reales y académicos o personales,
          manejo el stack React - Node, sumado a otras tecnologías relacionadas.
          Tengo mucho para ofrecer y estoy siempre en búsqueda de nuevas
          oportunidades, no dudes en contactarme. Saludos.
        </p>
      </div>
      <Technologies />
      <Projects />
    </>
  );
};

export default Home;
