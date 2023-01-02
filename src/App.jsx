import { useState, useRef } from 'react';

import './App.css';
import { useReactToPrint } from 'react-to-print';
import Title from './components/title';
import Experiencie from './components/experience';
import Education from './components/education';
import FinalData from './components/finalData';
import avatar from './images/avatarProfile.png';

function App() {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [title, setTitle] = useState({
    avatar,
    firstName: 'Name',
    lastName: 'Last name',
    telphone: 'Phone Number',
    email: 'example@mail.com',
    direction: 'Direction'
  });

  const handleInfo = (formData) => {
    setTitle((prevstate) => ({ ...prevstate, ...formData }));
  };

  const addExperience = (child) => {
    const id = experiences.length + 1;
    const childToAppend = { ...child };
    childToAppend.id = id;

    setExperiences((prevState) => [...prevState, childToAppend]);
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  const addEducation = (child) => {
    const id = education.length + 1;
    const childToAppend = { ...child };
    childToAppend.id = id;

    setEducation((prevState) => [...prevState, childToAppend]);
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach((input) => {
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

  return (
    <div className="App">
      <div className="header">
        <h1>Cv Creator</h1>
        <span className="download-container">
          <button type="button" onClick={handlePrint} className="download">
            Download CV
          </button>
        </span>
      </div>
      <div className="content">
        <div className="modifiable-section">
          <Title handleInfo={handleInfo} />
          <Experiencie handleInfo={handleInfo} addExperiencie={addExperience} />
          <Education handleInfo={handleInfo} addEducation={addEducation} />
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
  );
}

export default App;
