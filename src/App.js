import { Component } from "react";

import './App.css';
import Title from './components/title.js'
import Experiencie from './components/experience.js'
import Education from './components/education.js'
import FinalData from "./components/finalData";
import avatar from './images/avatarProfile.png'

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
      tel: 'Phone Number',
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
  ))    
}

render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Cv Creator</h1>
        </div>
        <div className="content">
        <div className="modifiable-section">
          <Title handleInfo={this.handleInfo}/>
          <Experiencie handleInfo={this.handleInfo} addExperiencie={this.addExperiencie}/>
          <Education handleInfo={this.handleInfo}/>
          </div>
          <div className="final-section">
            <FinalData data={this.state}/>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
