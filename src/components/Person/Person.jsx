import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import Bruno from "../../assets/insp/bruno-barbeiro.jpg";
import Diogo from "../../assets/insp/diogo-barbeiro.jpg";
import Italo from "../../assets/insp/italo-barbeiro.jpg";
import Wesley from "../../assets/insp/wesley-barbeiro.jpg";

import style from "./main.module.css";

function Person() {

  const tl = useRef();
  const parentEl = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.current = gsap.timeline({
        scrollTrigger: {
            trigger: parentEl.current, // Use a referência do elemento pai
            scrub: true,
            start: "top 450px",
            end: "bottom 850px"
        }
    }).fromTo(`.${style.barbeiro}`, { // Altere o seletor para atingir a classe correta
        opacity: 0,
        x: 150
    }, {
        opacity: 1,
        x: 0
    });
}, []);


  return (
    <main className={style.container} id="time" >
      <div className={style.person} >

        <div className={style.atributos} ref={parentEl}>
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
