import { useState } from 'react';
import PropTypes from 'prop-types';

import './education.css';

function Education({ addEducation, error }) {
  const [data, setData] = useState({
    id: 'null',
    start: '',
    end: '',
    title: '',
    institution: ''
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
      <h2 className="section-title">Educacion</h2>
      <div className="dates">
        <label className="input-label" htmlFor="start">
          Inicio:
          <input
            className="input-field input-dates"
            onChange={(e) => handleChange(e)}
            type="date"
            name="start"
            id="start"
          />
        </label>
        <label className="input-label" htmlFor="end">
          Finalizacion:
          <input
            className="input-field input-dates"
            onChange={(e) => handleChange(e)}
            type="date"
            name="end"
          />
        </label>
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="title">
          Titulo obtenido:
          <span className="input-container">
            <input
              className="input-field"
              onChange={(e) => handleChange(e)}
              type="textarea"
              placeholder="Titulo obtenido"
              name="title"
              maxLength={50}
            />
          </span>
        </label>
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="institution">
          Institucion:
          <span className="input-container">
            <input
              className="input-field"
              onChange={(e) => handleChange(e)}
              type="textarea"
              placeholder="Institucion"
              name="institution"
              maxLength={50}
            />
          </span>
        </label>
      </div>
      <span className="button-container">
        <button
          type="button"
          className="submit-btn"
          onClick={() => {
            addEducation(data);
            setActiveComponent(true);
          }}>
          Agregar datos
        </button>
      </span>
      {error && activeComponent && <p className="error">Algunos campos son invalidos</p>}
    </div>
  );
}

export default Education;

Education.propTypes = {
  addEducation: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};
