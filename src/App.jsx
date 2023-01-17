/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';

import './App.css';
import { useReactToPrint } from 'react-to-print';
import Title from './components/Title';
import Experience from './components/Experience';
import Education from './components/Education';
import FinalData from './components/FinalData';
import avatar from './images/avatarProfile.png';

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
  };

  const handleInfo = (formData) => {
    deactivateAllErrors();
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(formData)) {
      if (key !== 'avatar') {
        if (checkForErrors(value)) {
          setTitleError(true);
          return;
        }
        setEducationError(false);
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
        setExperienceError(true);
        return;
      }
      setExperienceError(false);
    }
    if (!experienceError) {
      const childToAppend = { ...child };
      childToAppend.id = id;

      setExperiences((prevState) => [...prevState, childToAppend]);
      const inputs = document.querySelectorAll('.input-field');
      inputs.forEach((input) => {
        // eslint-disable-next-line no-param-reassign
        input.value = '';
      });
    }
  };

  const addEducation = (child) => {
    deactivateAllErrors();
    const id = education.length + 1;
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(child)) {
      if (checkForErrors(value)) {
        setEducationError(true);
        return;
      }
      setEducationError(false);
    }
    if (!educationError) {
      const childToAppend = { ...child };
      childToAppend.id = id;

      setEducation((prevState) => [...prevState, childToAppend]);
      const inputs = document.querySelectorAll('.input-field');
      inputs.forEach((input) => {
        // eslint-disable-next-line no-param-reassign
        input.value = '';
      });
    }
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

  return (
    <div className="App">
      <div className="header">
        <h1>Cv Creator</h1>
        <span className="download-container">
          <button type="button" onClick={handlePrint} className="download">
            Descargar CV
          </button>
        </span>
      </div>
      <div className="content">
        <div className="modifiable-section">
          <Title handleInfo={handleInfo} error={titleError} />
          <Experience
            handleInfo={handleInfo}
            addExperience={addExperience}
            error={experienceError}
          />
          <Education handleInfo={handleInfo} addEducation={addEducation} error={educationError} />
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
      <div className="footer">
        <p className="footer-text">Gaston Vecchio</p>
      </div>
    </div>
  );
}

export default App;
