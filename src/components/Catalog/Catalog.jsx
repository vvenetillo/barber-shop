import pentebarber from '../../assets/insp/Barbershop.png'
import maquina from '../../assets/insp/Beard Trimmer.png'
import men from '../../assets/insp/men.png'
import navalha from '../../assets/insp/navalha.png'

import style from './catalog.module.css'

function Catalog() {
    return (  
        <>
            <section className={style.container} id='serviço'>

                <div className={style.intro}>

                <h1 className={style.title}>Serviços</h1>
                <span className={style.line}></span>

                </div>

            <div className={style.catalog}>

                <div className={style.item}>
                    <img src={pentebarber} alt="" />
                    <p>Corte com tesoura: Precisão e elegância para um estilo refinado</p>
                </div>

                <div className={style.item}>
                    <img src={navalha} alt="" />
                    <p> Corte com navalha: Detalhes impecáveis para uma barba ou cabelo imaculados.</p>
                </div>

                <div className={style.item}>
                    <img src={maquina} alt="" />
                    <p>Corte à máquina: Versatilidade e praticidade para um visual moderno.</p>
                </div>

                <div className={style.item}>
                    <img src={men} alt="" />
                    <p>Relaxe e renove com nossa barboterapia: uma experiência revigorante que combina cuidados faciais, massagem e vapor para uma pele revitalizada</p>
                </div>
            </div>
            </section>
        </>
    );
}

export default Catalog;