/* eslint-disable react/no-unknown-property */
import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Modal = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');



  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   date
   time
    
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Escolha uma Data e Hora</h2>
        <form onSubmit={handleSubmit}>
          <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
          </div>
          <div className="time-container">
            <label htmlFor="time">Hora:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={handleTimeChange}
            />
          </div>
          <button type="submit">Confirmar</button>
         
        </form>
      </div>
    </div>
  );
};

export default Modal;
