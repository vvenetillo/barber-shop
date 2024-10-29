import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import barber from "../../assets/insp/espaço-barber.jpg";
import style from "./article.module.css";

function Article() {

  const foto = useRef();
  const element = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    foto.current = gsap.timeline({
        scrollTrigger: {
            trigger: element.current, // Use a referência do elemento pai
            scrub: true,
            start: "top 450px",
            end: "bottom 850px"
        }
    }).fromTo(`.${style.socialmedia}`, { // Altere o seletor para atingir a classe correta
        opacity: 0,
        y: 150
    }, {
        opacity: 1,
        y: 0
    });
}, []);


  return (
    <div className={style.content1} id="espaço">
      <article className={style.container}>
        <div className={style.flexContainer} ref={element}>
          <img src={barber} alt="" className={style.barber}  />
          <div className={style.content}>
            <h1 className={style.aboutwe}>Nosso Espaço</h1>
            <span className={style.line}></span>
            <p className={style.about}>
              <p className={style.about}>
                Na nossa barbearia, resgatamos o charme do passado com um toque
                de modernidade. 
                Cortes clássicos, barbas impecáveis e um ambiente acolhedor
                criam uma experiência única para homens que buscam estilo e
                tradição. <br />
                Aqui, cada visita é uma viagem no tempo, onde a arte da
                barbearia é celebrada com paixão e cuidado.
              </p>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Article;
