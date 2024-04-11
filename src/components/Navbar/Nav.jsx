/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button } from "@mui/material";

import time from "../../assets/insp/tesoura.png";
import pole from "../../assets/insp/pole.png";
import mustache from "../../assets/insp/mustache.png";
import barber from "../../assets/insp/export-bs.png";

import Date from "../Modal/Date/Date";
import Timer from "../Modal/Timer/Timer";

import style from "../Navbar/nav.module.css";

function AgendarAtendimentoModal({ isOpen, handleClose }) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="agendar-atendimento-modal-title"
      aria-describedby="agendar-atendimento-modal-description"
      className={style.modal1}
    >
      <div className={style.modal}>
        <h2 id="agendar-atendimento-modal-title">Agendar Atendimento</h2>
        <label htmlFor="">Escolha o barbeiro:</label>
        <select className={style.selection} id="selection">
          <label>Escolha o barbeiro</label>
          <option value="">Ítalo Ferreira</option>
          <option value="">Bruno Oliveira</option>
          <option value="">Diogo Santos</option>
          <option value="">Wesley Nascimento</option>
        </select>
        <label htmlFor="">Escolha o serviço:</label>
        <select className={style.selection} id="selection">
          <label>Escolha o serviço</label>
          <option value="">Barba</option>
          <option value="">Cabelo </option>
          <option value="">Barba + Cabelo</option>
          <option value="">Barboterapia</option>
        </select>

        <Date size="50px" />
        <Timer className={style.timer}/>
        <Button onClick={handleClose} size="small" disableRipple>
          Fechar
        </Button>
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
        handleClose={handleModalClose}
      />
    </>
  );
}

export default Navbar;
