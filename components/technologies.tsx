import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
  SiNestjs,
  SiExpress,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { VscSymbolNamespace } from "react-icons/vsc";
import style from "../components/technologies.module.css";

const Technologies = () => {
  return (
    <>
      <section className={style.tech}>
        <h3 style={{ padding: "30px" }}>TECNOLOGÍAS</h3>
        <div className={style.techD}>
          <div className={style.divH}>
            <div className={style.div1}>TYPESCRIPT </div>
            <SiTypescript className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>JAVASCRIPT </div>
            <SiJavascript className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>NODE</div>
            <SiNodedotjs className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>NEST</div>
            <SiNestjs className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>EXPRESS</div>
            <SiExpress className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>REACT</div>
            <SiReact className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>REDUX</div>
            <SiRedux className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>MYSQL</div>
            <SiMysql className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>MONGODB</div>
            <SiMongodb className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>POSTGRESQL</div>
            <SiPostgresql className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>TYPEORM</div>
            <VscSymbolNamespace className={style.div2} />
          </div>
          <div className={style.divH}>
            <div className={style.div1}>SEQUELIZE</div>
            <SiSequelize className={style.div2} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
