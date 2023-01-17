//@ts-check
"use client";
import Link from "next/link";
import React, { FC } from "react";
import { LinksType } from "@/utils/interfaces";
import * as style from "../components/navigation.module.css";

const Navigation: FC = () => {
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
    <header className={style.header}>
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
