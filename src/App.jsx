/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';

import './App.css';
import { useReactToPrint } from 'react-to-print';
import Title from './components/Title';
import Experience from './components/Experience';
import Education from './components/Education';
import FinalData from './components/FinalData';
import avatar from './images/avatarProfile.png';
import icon from './images/cvIcon.png';

function App() {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [title, setTitle] = useState({
    avatar,
    firstName: 'Nombre',
    lastName: 'Apellido',
    telphone: 'Numero de telefono',
    email: 'ejemplo@mail.com',
    direction: 'Direccion'
  });

  const [titleError, setTitleError] = useState(false);
  const [experienceError, setExperienceError] = useState(false);
  const [educationError, setEducationError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [activeForm, setActiveForm] = useState(0);

  const checkForErrors = (input) => {
    if (input === '') {
      return true;
    }
    return false;
  };

  const deactivateAllErrors = () => {
    setTitleError(false);
    setExperienceError(false);
    setEducationError(false);
    setErrorMsg('');
  };

  const handleInfo = (formData) => {
    deactivateAllErrors();
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(formData)) {
      if (key !== 'avatar') {
        if (checkForErrors(value)) {
          console.log(`${key}`);
          let invalidField = '';
          if (key === 'firstName') invalidField = 'Nombre';
          else if (key === 'lastName') invalidField = 'Apellido';
          else if (key === 'telphone') invalidField = 'Numero de telefono';
          else if (key === 'email') invalidField = 'Email';
          else invalidField = 'Direccion';
          setTitleError(true);
          setErrorMsg(`${invalidField} es invalido.`);
          return;
        }
        setTitleError(false);
      }
    }
    if (!titleError) {
      setTitle((prevstate) => ({ ...prevstate, ...formData }));
    }
  };

  const addExperience = (child) => {
    deactivateAllErrors();
    const id = experiences.length + 1;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(child)) {
      if (checkForErrors(value)) {
        let invalidField = '';
        if (key === 'start') invalidField = 'Inicio';
        else if (key === 'end') invalidField = 'Finalizacion';
        else if (key === 'name') invalidField = 'Nombre de la compañía';
        else if (key === 'title') invalidField = 'Titulo de la posicion';
        else invalidField = 'Descripcion';
        setExperienceError(true);
        setErrorMsg(`${invalidField} no es valido.`);
        return;
      }
      setExperienceError(false);
    }
    if (experiences.length > 9) {
      setExperienceError(true);
      setErrorMsg(`No se pueden agregar mas experiencias`);
      return;
    }

    const childToAppend = { ...child };
    childToAppend.id = id;
    setExperiences((prevState) => [...prevState, childToAppend]);
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach((input) => {
      // eslint-disable-next-line no-param-reassign
      input.value = '';
    });
  };

  const addEducation = (child) => {
    deactivateAllErrors();
    const id = education.length + 1;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(child)) {
      if (checkForErrors(value)) {
        setEducationError(true);
        let invalidField = '';
        if (key === 'start') invalidField = 'Inicio';
        else if (key === 'end') invalidField = 'Finalizacion';
        else if (key === 'title') invalidField = 'Titulo obtenido';
        else invalidField = 'Institucion';
        setErrorMsg(`${invalidField} no es valido`);
        return;
      }
      setEducationError(false);
    }
    if (education.length > 9) {
      setEducationError(true);
      setErrorMsg(`No se pueden agregar mas titulos`);
      return;
    }

    const childToAppend = { ...child };
    childToAppend.id = id;

    setEducation((prevState) => [...prevState, childToAppend]);
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach((input) => {
      // eslint-disable-next-line no-param-reassign
      input.value = '';
    });
  };

  const removeExperience = (index) => {
    const newData = experiences.filter((element) => {
      return element.id !== index;
    });
    setExperiences(newData);
  };

  const removeEducation = (index) => {
    const newData = education.filter((element) => {
      return element.id !== index;
    });
    setEducation(newData);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  const renderSwitch = (state) => {
    switch (state) {
      case 0:
        return <Title handleInfo={handleInfo} error={titleError} errorMsg={errorMsg} />;
      case 1:
        return (
          <Experience
            handleInfo={handleInfo}
            addExperience={addExperience}
            error={experienceError}
            errorMsg={errorMsg}
          />
        );
      case 2:
        return (
          <Education
            handleInfo={handleInfo}
            addEducation={addEducation}
            error={educationError}
            errorMsg={errorMsg}
          />
        );
      default:
        return <Title handleInfo={handleInfo} error={titleError} />;
    }
  };

  const nextForm = () => {
    if (activeForm !== 2) {
      setActiveForm(activeForm + 1);
    }
  };

  const prevForm = () => {
    if (activeForm !== 0) {
      setActiveForm(activeForm - 1);
    }
  };

  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <img className="logo" src={icon} alt="Logo of a curriculum vitae" />
          <h1>Cv Creator</h1>
        </div>
      </div>

      <div className="content-container">
        <div className="content">
          <div className="modifiable-section">
            <div className="controls-container">
              <button
                type="button"
                className="control-container"
                id="left-arrow"
                onClick={prevForm}>
                &#8249;
              </button>
              <p className="status">{activeForm + 1}/3</p>
              <button
                type="button"
                className="control-container"
                id="right-arrow"
                onClick={nextForm}>
                &#8250;
              </button>
            </div>
            {renderSwitch(activeForm)}

            {activeForm === 2 && (
              <span className="download-container">
                <button type="button" onClick={handlePrint} className="download">
                  Descargar CV
                </button>
              </span>
            )}
          </div>

          <div id="final-section">
            <FinalData
              title={title}
              experience={experiences}
              education={education}
              removeElement={removeExperience}
              removeEducation={removeEducation}
              ref={componentRef}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">Gaston Vecchio</p>
      </div>
    </div>
  );
}

export default App;
