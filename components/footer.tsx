import { LinksType } from "@/utils/interfaces";
import Link from "next/link";
import style from "./footer.module.css";

const Footer = () => {
  const externalLInks: LinksType[] = [
    {
      label: "LINKEDIN",
      route: "https://linkedin.com/in/denis-ferreyra",
      top: 100,
    },
    {
      label: "GITHUB",
      route: "https://github.com/DenisFer-13",
      top: 100,
    },
  ];

  return (
    <>
      <footer className={style.footer}>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <div className={style.divFooter}>
            Denis Ferreyra | Full Stack Developer
          </div>
          <ul className={style.ul}>
            {externalLInks.map(({ label, route }) => (
              <li key={route}>
                <Link href={route} target={"_blank"}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
