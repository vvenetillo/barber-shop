/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal } from "@mui/material";
import {Navbar, Nav} from 'react-bootstrap';

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

function Navbar1() {
  const [modalOpen, setModalOpen] = useState(false);  

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  
  
  return (
    <>
    <Navbar bg={style.navbar} variant="tabs" expand="lg" fixed="top">
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className={style.navbar} id="navbar">
        <div className={style.imglogo}>

        <img src={barber} alt="" className={style.barber} />
        </div>

        <div className={style.menu}>
          <ul className={style.items}>
            <a href="#time">
              <li className="time">
                <img srcSet={time} alt="" />
                Time
              </li>
            </a>
            <a href="#espaço">
              <li className="espaço">
                <img src={pole} alt="" />
                Espaço
              </li>
            </a>
            <a href="#serviço">
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

      <AgendarAtendimentoModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        />
        </Nav>

        </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default Navbar1;