import { Component } from "react";
import './education.css';

class Education extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            experiencie: {
                start: '',
                end: '',
                title: '',
                institution: '',
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
                <h2 className="section-title">Education</h2>
                <div className="dates">
                <label className="input-label" htmlFor="start">Start:</label>
                <input className="input-field" onChange={(e) => this.handleChange(e)} type="date" name="start"></input>
                <label className="input-label" htmlFor="end">End:</label>
                <input className="input-field" onChange={(e) => this.handleChange(e)} type="date" name="end"></input>
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="title">Title obtained:</label>
                <input className="input-field" onChange={(e) => this.handleChange(e)} type="textarea" placeholder="Title obtained" name="title"></input>
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="institution">Institution:</label>
                <input className="input-field" onChange={(e) => this.handleChange(e)} type="textarea" placeholder="Institution" name="institution"></input>     
                </div>
                <button className="submit-btn" onClick={() => this.props.addEducation(this.state, "educationChilds")}>Add Education</button> 
            </div>
        )
    }
}

export default Education;