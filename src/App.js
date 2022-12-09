
import {useState, useRef} from 'react';

import './App.css';
import Title from './components/title.js'
import Experiencie from './components/experience.js'
import Education from './components/education.js'
import FinalData from "./components/finalData";
import avatar from './images/avatarProfile.png';
import { useReactToPrint } from 'react-to-print';


const App = () => {

  const [allData, setAllData] = useState({
    experienceChilds: [],
    educationChilds: [],
    title: {
      avatar: avatar,
      firstName: 'Name',
      lastName: 'Last name',
      telphone: 'Phone Number',
      email: 'example@mail.com',
      direction: 'Direction',
    },
    printable: 'false',
  });



const handleInfo = (formData, toChange) => {

  for (const [key, value] of Object.entries(formData)) {
    if (key === 'avatar') {
      continue;
    }
    else {
      if (value === '') {
        return; 
      }
    }
  }
  setAllData(prevstate => ({...prevstate,
  [toChange] : formData,
  }))
};  


const addElement = (child, toChange) => {

  let oldData = allData[toChange]
  child.id = oldData.length
  console.log(child.id)
  setAllData(prevState => ({...prevState,
    [toChange] : [...oldData ,child]  
}));

  let inputs = document.querySelectorAll('.input-field');
  inputs.forEach(input => {
    input.value = ''
  })
}


const removeElement = (index, toChange) => {
  let oldData = allData[toChange];
  let newData = oldData.filter(element => {
    return element.id !== parseInt(index)});
  setAllData(prevState => ({...prevState,
    [toChange] : newData
    }))
}



const componentRef = useRef();
const handlePrint = useReactToPrint({
  content: () => componentRef.current
});

return (
      <div className="App">
        <div className="header">
          <h1>Cv Creator</h1>
          <span className='download-container'>
          <button onClick={handlePrint} className="download">Download CV</button>
          </span>
        </div>
        <div className="content">
        <div className="modifiable-section">
          <Title handleInfo={handleInfo}/>
          <Experiencie handleInfo={handleInfo} addExperiencie={addElement}/>
          <Education handleInfo={handleInfo} addEducation={addElement}/>
          </div>
          <div id="final-section">
            <FinalData data={allData} removeElement={removeElement} ref={componentRef} />
          </div>
          </div>
      </div>
    );
}


export default App;
