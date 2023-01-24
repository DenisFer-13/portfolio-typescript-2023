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
    },
    {
      label: "PROJECTS",
      route: "/projects",
    },
    {
      label: "CONTACT",
      route: "/about",
    },
  ];

  return (
    <header className={y > 0 ? style.headerSticky : style.header}>
      <nav>
        <ul className={style.ul}>
          {internalLinks.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
