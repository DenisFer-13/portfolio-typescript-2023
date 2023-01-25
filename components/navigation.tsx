//@ts-check
"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { LinksType } from "@/utils/interfaces";
import * as style from "./navigation.module.css";

const Navigation: FC = () => {
  const [y, setY] = useState(0);
  const handleNavigation = (e: any) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  const internalLinks: LinksType[] = [
    {
      label: "HOME",
      route: "/",
      top: 0,
    },
    {
      label: "EXPERIENCIA LABORAL",
      route: "/",
      top: 720,
    },
    {
      label: "PROYECTOS ACADÉMICOS",
      route: "/",
      top: 1700,
    },
    {
      label: "CONTACTAME",
      route: "/about",
      top: 0,
    },
  ];

  return (
    <header className={y > 0 ? style.headerSticky : style.header}>
      <nav>
        <ul className={style.ul}>
          {internalLinks.map(({ label, route, top }) => (
            <li
              key={route}
              onClick={() => window.scrollTo({ top: top, behavior: "smooth" })}
            >
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
