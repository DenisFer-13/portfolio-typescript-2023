"use client";                     //Esto permite añadir interactividad a la página
import React, { FC } from "react";

const scrollTo = (top: number) => {
  window.scrollTo({ top: top, behavior: "smooth" });
};

const Home: FC = () => {
  return (
    <>
      <div>ESTE SERÁ MI DIV PRINCIPAL</div>
      <button onClick={() => scrollTo(0)}>SUBIR</button>
    </>
  );
};

export default Home;
