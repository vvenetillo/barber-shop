import barber from '../../assets/insp/background.jpg';
import style from './section.module.css'; 

function Card() {
  return (
   <section className={style.container}>
    <div className={style.background}>
        <img src={barber} alt="" className={style.background} />
    </div>
    <div className={style.infos}>
        <p>Uma nova experiência <br /> de barbearia da <strong className={style.enfase}>Baixada Fluminense</strong></p>
    </div>
        <button className={style.exp}> Viva essa experiência</button>
   </section>
  );
}

export default Card;
