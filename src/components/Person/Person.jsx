import Bruno from "../../assets/insp/bruno-barbeiro.jpg";
import Diogo from "../../assets/insp/diogo-barbeiro.jpg";
import Italo from "../../assets/insp/italo-barbeiro.jpg";
import Wesley from "../../assets/insp/wesley-barbeiro.jpg";

import style from "./main.module.css";

function Person() {
  return (
    <main className={style.container}>
      <div className={style.person}>

        <div className={style.atributos}>
          <img src={Italo} alt="" className={`${style.barbeiro} ${style.upperImage}`} />
          <p>
            Ítalo Ferreira <br />
            26 anos
          </p>
        </div>
          <span></span>

        <div className={style.atributos}>
          <img src={Bruno} alt="" className={`${style.barbeiro} ${style.lowerImage}`}/>
          <p>
            Bruno Oliveira <br />
            22 anos
          </p>
        </div>
          <span></span>

        <div className={style.atributos}>
          <img src={Diogo} alt=""className={`${style.barbeiro} ${style.upperImage}`}/>
          <p>
            Diogo Santos <br />
            25 anos
          </p>
        </div>
          <span></span>

        <div className={style.atributos}>
          <img src={Wesley} alt="" className={`${style.barbeiro} ${style.lowerImage}`}/>
          <p>
            Wesley Nascimento <br />
            27 anos
          </p>
        </div>
          <span></span>
      </div>
    </main>
  );
}
export default Person;
