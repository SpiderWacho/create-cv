
import {useState} from 'react';

import './App.css';
import Title from './components/title.js'
import Experiencie from './components/experience.js'
import Education from './components/education.js'
import FinalData from "./components/finalData";
import avatar from './images/avatarProfile.png'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const App = () => {


  const [printable, setPrintable] = useState(false);

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
  });



const handleInfo = (formData, toChange) => {
  console.log(allData[toChange])
  setAllData(prevstate => ({...prevstate,
  [toChange] : formData,
  }))
};  


const addExperience = (child, toChange) => {
  let oldData = allData[toChange]
  setAllData(prevState => ({...prevState,
    [toChange] : [...oldData ,child]  
}));
  let inputs = document.querySelectorAll('.input-field');
  inputs.forEach(input => {
    input.value = ''
  })
}

const removeExperience = (index, toChange) => {
  let oldData = allData[toChange];
  let newData = oldData.slice(0, index).concat(oldData.slice(index + 1,));
  setAllData(prevState => ({...prevState,
    [toChange] : newData
    }))
}

const printDocument = () => {
  setPrintable(true)
  const input = document.getElementById('final-section');
  html2canvas(input, {
    height: 2970,
    width: 2100,
    scale: 1,
    onclone: (cloned) => {
      let toPrint = cloned.querySelector("#final-section");
      toPrint.style.height = '100vh';
      toPrint.style.width = '100vw'
      toPrint.style.position = 'absolute';
      toPrint.style.top = 0;
      toPrint.style.left = 0;    
    }
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4'
      });
      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })
  ;
}

return (
      <div className="App">
        <div className="header">
          <h1>Cv Creator</h1>
          <span className='download-container'>
          <button className="download" onClick={printDocument}>Download</button>
          </span>
        </div>
        <div className="content">
        <div className="modifiable-section">
          <Title handleInfo={handleInfo}/>
          <Experiencie handleInfo={handleInfo} addExperiencie={addExperience}/>
          <Education handleInfo={handleInfo} addEducation={addExperience}/>
          </div>
          <div id="final-section">
            <FinalData data={allData} printable={printable} removeExperiencie={removeExperience}/>
          </div>
          </div>
      </div>
    );
}


export default App;
