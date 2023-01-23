import { LinksType } from "@/utils/interfaces";
import Link from "next/link";
import style from "./footer.module.css";

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
      <footer className={style.footer}>
        <div>Denis Ferreyra | Full Stack Developer</div>
        <ul className={style.ul}>
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
