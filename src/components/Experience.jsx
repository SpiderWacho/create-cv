import { useState } from 'react';
import PropTypes from 'prop-types';

import './experience.css';

function Experience({ addExperience, error }) {
  const [data, setData] = useState({
    id: null,
    start: '',
    end: '',
    company: '',
    title: '',
    description: ''
  });
  const [activeComponent, setActiveComponent] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: e.target.value
    }));
  };

  return (
    <div className="container">
      <h2 className="section-title">Experiencia</h2>
      <div className="dates">
        <label className="input-label" htmlFor="start">
          Inicio:
          <input
            value={data.start}
            className="input-field input-dates"
            onChange={(e) => handleChange(e)}
            type="date"
            name="start"
          />
        </label>

        <label className="input-label" htmlFor="end">
          Finalizacion:
          <input
            value={data.end}
            className="input-field input-dates"
            onChange={(e) => handleChange(e)}
            type="date"
            name="end"
          />
        </label>
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="company">
          Nombre de la compania:
          <span className="input-container">
            <input
              value={data.company}
              className="input-field"
              onChange={(e) => handleChange(e)}
              type="textarea"
              placeholder="Nombre de la compania"
              name="company"
              maxLength={50}
            />
          </span>
        </label>
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="title">
          Titulo de la posicion:
          <span className="input-container">
            <input
              value={data.title}
              className="input-field"
              onChange={(e) => handleChange(e)}
              type="textarea"
              placeholder="Titulo de la posicion"
              name="title"
              maxLength={50}
            />
          </span>
        </label>
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="description">
          Descripcion de la experiencia:
          <span className="input-container">
            <input
              value={data.description}
              className="input-field"
              onChange={(e) => handleChange(e)}
              type="textarea"
              placeholder="Descripcion de la posicion"
              name="description"
              maxLength={300}
            />
          </span>
        </label>
      </div>
      <span className="button-container">
        <button
          type="button"
          className="submit-btn"
          onClick={() => {
            addExperience(data);
            setActiveComponent(true);
          }}>
          Agregar datos
        </button>
      </span>
      {error && activeComponent && <p className="error">Algunos campos son invalidos</p>}
    </div>
  );
}

export default Experience;

Experience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};
