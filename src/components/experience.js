import { Component } from "react";
import './experiencie.css';

class Experiencie extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        experiencie: {
            start: '',
            end: '',
            title: '',
            company: '',
          },
    }
}

handleChange(e)  {
    const name = e.target.name
    this.setState(prevState => ({
        ...prevState,
    [name] : e.target.value
    }))             
}



    render(){
        return ( 
            <div className="container">
                <h2>Experiencie</h2>
                <label>
                Start: 
                <input onChange={(e) => this.handleChange(e)} type="date" name="start"></input>
                </label>
                <label>
                Finish: 
                <input onChange={(e) => this.handleChange(e)} type="date" name='end'></input>
                </label>
                <label>
                Description of experience
                <input onChange={(e) => this.handleChange(e)} type="textarea" placeholder="Describe your experiencie" name='title'></input>    
                </label>
                <label>
                Name of company
                <input onChange={(e) => this.handleChange(e)} type="textarea" placeholder="Name of company" name='company'></input>    
                </label>
                <button onClick={() => this.props.addExperiencie(this.state, 'experienceChilds')}>Add experience</button>
            </div>
        )
    }

}

export default Experiencie;