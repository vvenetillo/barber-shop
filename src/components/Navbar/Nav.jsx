/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "@mui/material";

import time from "../../assets/insp/tesoura.png";
import pole from "../../assets/insp/pole.png";
import mustache from "../../assets/insp/mustache.png";
import barber from "../../assets/insp/export-bs.png";

import Date from "../Modal/Date/Date";
import Items from "../../Controller/ItemCorte"

import style from "../Navbar/nav.module.css";

function AgendarAtendimentoModal({ isOpen, onClose }) {
  const [selecao, setSelecao] = useState("");
  const [servico, setServico] = useState();

  const handleChange = (event) => {
    setSelecao(event.target.value); 
    
};
const handleChangeService = (event) => {
  setServico(event.target.value);
}


  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="agendar-atendimento-modal-title"
      aria-describedby="agendar-atendimento-modal-description"
      className={style.modal1}
    >
      <div className={style.modal}>
        <h2 id="agendar-atendimento-modal-title">Agendar Atendimento</h2>
        <label htmlFor="">Escolha o barbeiro:</label>
        <select className= {style.selection} value={selecao} onChange={handleChange}>
                <option value="">Selecione...</option>
                <optgroup label="Barbeiro">
                    {Object.keys(Items.barbeiro).map((barbeiro) => (
                        <option key={barbeiro} value={barbeiro}>{barbeiro}</option>
                    ))}
                </optgroup>
                
                  </select>
                
                <label htmlFor="">Escolha o serviço:</label>
                  <select className= {style.selection} value={servico} onChange={handleChangeService}>       
                  <option value="">Selecione...</option>  
                <optgroup label="Corte">
                    {Object.keys(Items.corte).map((corte) => (
                        <option key={corte} value={corte}>{corte}</option>
                    ))}
                </optgroup>

                </select>
              
            {selecao && (
                <div className={style.selecao}>
                    <h2 className={style.selecao}>Dados do item selecionado:</h2>
                    <p className={style.selecao}>Nome: {selecao}</p>
                    <p className={style.selecao}>Idade: {Items.barbeiro[selecao] }</p>
                    
                </div>
            )}
            {servico && (
                <div className={style.servico}>
                    <h3 className={style.servico}>Serviço</h3>
                    <p className={style.servico}>Serviço desejado: {Items.corte[servico]}</p>
                </div>
            )}
            

        <Date size="50px" />
        
      </div>
    </Modal>
  );
}

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

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
          <button
            type="button"
            onClick={handleModalOpen}
            className={style.agendar}
          >
            Agendar  Atendimento
          </button>
        </div>
      </nav>

      <AgendarAtendimentoModal
        isOpen={modalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}

export default Navbar;



/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { Modal } from "@mui/material";

// import time from "../../assets/insp/tesoura.png";
// import pole from "../../assets/insp/pole.png";
// import mustache from "../../assets/insp/mustache.png";
// import barber from "../../assets/insp/export-bs.png";

// import Date from "../Modal/Date/Date";
// import Items from "../../Controller/ItemCorte"

// import style from "../Navbar/nav.module.css";

// function AgendarAtendimentoModal({ isOpen, onClose }) {
//   const [selecao, setSelecao] = useState("");
//   const handleChange = (event) => {
//     setSelecao(event.target.value); // Atualiza o estado com a seleção feita
// };
//   return (
//     <Modal
//       open={isOpen}
//       onClose={onClose}
//       aria-labelledby="agendar-atendimento-modal-title"
//       aria-describedby="agendar-atendimento-modal-description"
//       className={style.modal1}
//     >
//      <div>
//             <h2>Selecione um item:</h2>
//             <select value={selecao} onChange={handleChange}>
//                 <option value="">Selecione...</option>
//                 <optgroup label="Barbeiro">
//                     {Object.keys(Items.barbeiro).map((barbeiro) => (
//                         <option key={barbeiro} value={barbeiro}>{barbeiro}</option>
//                     ))}
//                 </optgroup>
//                 <optgroup label="Corte">
//                     {Object.keys(Items.corte).map((corte) => (
//                         <option key={corte} value={corte}>{corte}</option>
//                     ))}
//                 </optgroup>
//             </select>
//             {selecao && (
//                 <div>
//                     <h2>Dados do item selecionado:</h2>
//                     <p>Nome: {selecao}</p>
//                     <p>Tipo: {Items.barbeiro[selecao] || Items.corte[selecao]}</p>
//                 </div>
//             )}

//       <Date size="50px" />
//         </div>
//       </Modal>

//   );
// }

// function Navbar() {
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleModalOpen = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <nav className={style.navbar}>
//         <img src={barber} alt="" className={style.barber} />

//         <div className={style.menu}>
//           <ul className={style.items}>
//             <a href="#">
//               <li className="time">
//                 <img srcSet={time} alt="" />
//                 Time
//               </li>
//             </a>
//             <a href="#">
//               <li className="espaço">
//                 <img src={pole} alt="" />
//                 Espaço
//               </li>
//             </a>
//             <a href="#">
//               <li className="serviços">
//                 <img src={mustache} alt="" />
//                 Serviços
//               </li>
//             </a>
//           </ul>
//         </div>

//         <div className={style.atendimento}>
//           <button
//             type="button"
//             onClick={handleModalOpen}
//             className={style.agendar}
//           >
//             Agendar  Atendimento
//           </button>
//         </div>
//       </nav>

//       <AgendarAtendimentoModal
//         isOpen={modalOpen}
//         onClose={handleModalClose}
//       />
//     </>
//   );
// }

// export default Navbar;
