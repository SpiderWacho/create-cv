import { Component } from "react";
import './experiencie.css';

class Experiencie extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        experience: {
            id: '',
            start: '',
            end: '',
            company: '',
            title: '',
            description: '',
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
                <h2 className="section-title">Experience</h2>
                <div className="dates">
                    <label className="input-label" htmlFor="start">Start:</label>
                    <input className="input-field" onChange={(e) => this.handleChange(e)} type="date" name="start"></input>
                    <label className="input-label" htmlFor="end">End:</label>
                    <input className="input-field" onChange={(e) => this.handleChange(e)} type="date" name='end'></input>
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="company">Name of company:</label>
                <input className="input-field" onChange={(e) => this.handleChange(e)} type="textarea" placeholder="Name of company" name='company'></input>    
                </div>
                <div className="input-container">
                <label htmlFor="title">Title of position:</label>
                <input className="input-field" onChange={(e) => this.handleChange(e)} type="textarea" placeholder="Title of position" name='title'></input>    
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="description">Description of experience:</label>
                <input className="input-field" onChange={(e) => this.handleChange(e)} type="textarea" placeholder="Description of the position" name='description'></input>    
                </div>

                <button className="submit-btn" onClick={() => this.props.addExperiencie(this.state, 'experienceChilds')}>Add experience</button>
            </div>
        )
    }

}

export default Experiencie;