/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import Swal from 'sweetalert2';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import style from './date.module.css';

const Modal = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');

  const handleDateChange = (date) => {
    setDate(date);
    setTime('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  function formatDate(date) {
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }

  
  const selectedDateTime = new Date(date);
  const formattedDate = formatDate(selectedDateTime);

  const handleSubmit = async (e) => {
    e.preventDefault();   

    if (!date || !time || !name) {
      Swal.fire({
        icon: 'error',
        title: 'Preenchimento Incompleto',
        text: 'Favor preencher corretamente a data, hora e seu nome e sobrenome.',
      });
      return;
    }
    if (selectedDateTime <= new Date()) {
      Swal.fire({
        icon: 'error',
        title: 'Data e Hora Inválidas',
        text: 'Por favor, escolha uma data e hora válida.',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Agendamento Realizado!',
      text: `Obrigado, ${name}! Seu agendamento foi registrado para ${formattedDate}, ${time} horas.`,
    });
    setTimeout(function () {
      location.reload();
    }, 4000);
  };

  const generateTimeOptions = () => {
    const options = [];
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    for (let hour = 9; hour < 20; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

        if (isToday) {
          const optionDateTime = new Date(date);
          optionDateTime.setHours(hour, minute, 0, 0);

          if (optionDateTime > now) {
            options.push(timeString);
          }
        } else {
          options.push(timeString);
        }
      }
    }
    return options;
  };

  return (
    <div className={style.agendamento1}>
      <div className="modal-content">
        <h2>Escolha uma Data e Hora</h2>
        <form onSubmit={handleSubmit}>
          <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
          </div>
          <div className="time-container">
            <label htmlFor="time" className={style.confirm_hour}>
              Hora:
            </label>
            <select
              id="time"
              value={time}
              onChange={handleTimeChange}
              className={style.confirm_hour}
            >
              <option value="">Selecione uma hora</option>
              {generateTimeOptions().map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="name-container">
            <label htmlFor="name" className={style.confirm_hour}>
              Nome e Sobrenome:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome e sobrenome"
              className={style.nameAndSurname}
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <button type="submit" className={style.button_confirm}>
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
