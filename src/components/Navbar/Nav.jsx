import time from "../../assets/insp/tesoura.png";
import pole from "../../assets/insp/pole.png";
import mustache from "../../assets/insp/mustache.png";
import barber from "../../assets/insp/export-bs.png";

import style from "../Navbar/nav.module.css";

function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <img src={barber} alt="" className={style.barber} />

        <div className={style.menu}>
          <ul className={style.items}>
            <a href="#">
              <li className="time">
                <img srcSet={time} alt="" />
                Time
              </li>
            </a>
            <a href="#">
              <li className="espaço">
                <img src={pole} alt="" />
                Espaço
              </li>
            </a>
            <a href="#">
              <li className="serviços">
                <img src={mustache} alt="" />
                Serviços
              </li>
            </a>
          </ul>
        </div>
        
        <div className={style.atendimento}>
          <button type="submit" className={style.agendar}>
            Agendar Atendimento
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
