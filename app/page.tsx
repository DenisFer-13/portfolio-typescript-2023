"use client"
import Link from "next/link";
import React, { FC } from "react";

const scrollTo = (top: number) => {
  window.scrollTo({ top: top, behavior: "smooth" });
};

const Home: FC = () => {
  return (
    <>
      <nav>
        <div>
          <Link href={"/"}>HOME</Link>
        </div>
        <div onClick={() => scrollTo(50)}>PROJECTS</div>
        <div>
          <Link href={"/about"}>ABOUT ME</Link>
        </div>
      </nav>
      <div>ESTE SERÁ MI DIV PRINCIPAL</div>
      <button onClick={() => scrollTo(0)}>SUBIR</button>
      <footer>ESTE SERÁ MI FOOTER</footer>
    </>
  );
};

export default Home;
