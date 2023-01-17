import { LinksType } from "@/utils/interfaces";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const externalLInks: LinksType[] = [
    {
      label: "LINKEDIN",
      route: "https://linkedin.com/in/denis-ferreyra",
    },
    {
      label: "GITHUB",
      route: "https://github.com/DenisFer-13",
    },
  ];

  return (
    <>
      <footer>
        <ul>
          {externalLInks.map(({ label, route }) => (
            <li key={route}>
              <Link href={route} target={"_blank"}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
