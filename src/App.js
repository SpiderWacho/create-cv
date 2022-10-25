
import {Component, PropTypes} from 'react';

import './App.css';
import Title from './components/title.js'
import Experiencie from './components/experience.js'
import Education from './components/education.js'
import FinalData from "./components/finalData";
import avatar from './images/avatarProfile.png'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class App extends Component {
  constructor(props) {
    super(props);



  this.state = {
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
    education: {
      start: 'Start Date',
      end: 'End Date',
      title: 'Title obtained',
      institution: 'Name of Institution',
    },
  }

  this.handleInfo = this.handleInfo.bind(this);
  this.addExperiencie = this.addExperiencie.bind(this);
  this.removeExperiencie = this.removeExperiencie.bind(this);

}


handleInfo(formData, toChange){
  this.setState(prevState => ({ ...prevState,
      [toChange] : {...formData}
  }))
}


addExperiencie(child, toChange) {
  let oldData = this.state[toChange]
  child.id = oldData.length + 1
  this.setState(prevState => (
    {...prevState,
      [toChange]: [...oldData, child]
    }
  ));
  let inputs = document.querySelectorAll('.input-field');
  inputs.forEach(input => {
    input.value = ''
  })
}

removeExperiencie(index, toChange) {
  let oldData = this.state[toChange];
  console.log(index)
  let firstCopy = oldData.slice(0, index);
  let secondCopy = oldData.slice(index);
  let newData = firstCopy.concat(secondCopy);
  console.log(secondCopy)
  this.setState(prevState => (
    {...prevState,
    [toChange]: [...newData]}
  ))
}

printDocument() {
  const input = document.getElementById('final-section');
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })
  ;
}

render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Cv Creator</h1>
          <button className="download" onClick={this.printDocument}>Download</button>
        </div>
        <div className="content">
        <div className="modifiable-section">
          <Title handleInfo={this.handleInfo}/>
          <Experiencie handleInfo={this.handleInfo} addExperiencie={this.addExperiencie}/>
          <Education handleInfo={this.handleInfo} addEducation={this.addExperiencie}/>
          </div>
          <div id="final-section">
            <FinalData data={this.state} removeExperiencie={this.removeExperiencie}/>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
