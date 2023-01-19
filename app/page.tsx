"use client"; //Esto permite añadir interactividad a la página
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
        <h2 className={style.h2}>Hi there! I am</h2>
        <h1 className={style.h1}>DENIS FERREYRA</h1>
        <h3 className={style.h3}>Full Stack Developer</h3>
        <p className={style.p}>
          Passionate about programming, solving logic problems or graphic
          challenges, when I program, I don't feel like it's a job, I love
          programming and I feel like I'm playing. I have a lot to offer, if you
          are interested, contact me by Github or LunkedIn. Regards.
        </p>
      </div>
      <Technologies />
    </>
  );
};

export default Home;
