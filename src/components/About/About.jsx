import barber from "../../assets/insp/espaço-barber.jpg";
import style from "./article.module.css";

function Article() {
  return (
    <div className={style.content1}>
      <article className={style.container}>
        <div className={style.flexContainer}>
          <img src={barber} alt="" className={style.barber} />
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
