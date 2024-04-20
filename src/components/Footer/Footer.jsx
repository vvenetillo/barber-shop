import { BiLike } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { SlArrowUp } from "react-icons/sl";

import barber1 from "../../assets/insp/barber1.png";


import style from './footer.module.css'

function Footer() {
    return ( 
        <>
        <footer className={style.container}>
            <div className={style.socialmedia}>
                
                <ul className={style.social}>
                    <li className={style.like}> <BiLike size={40}/> <p>Curta nossas redes sociais</p> </li>
                    <li className={style.facebook}> <CiFacebook size={40}/> <p>Facebook</p></li>
                    <li className={style.instagram}> <FaInstagram size={40}/> <p>Instagram</p></li>
                </ul>

            </div>
            
            <section className={style.infos}>
               <img src={barber1} alt="" className={style.barber} />
               <p>Desenvolvido por Victor Venetillo &copy;</p>
            </section>

           <a href="#navbar"><SlArrowUp className={style.arrow} /></a> 
        </footer>
        </>
     );
}

export default Footer;