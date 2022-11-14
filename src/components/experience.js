import { Component, useState } from "react";
import './experience.css';

const Experiencie = (props) => {
    
    const [data, setData] = useState({
        experience: {
            id: '',
            start: '',
            end: '',
            company: '',
            title: '',
            description: '',
          },
    })


const handleChange = (e) =>  {
    const name = e.target.name
    setData(prevState => ({
        experience: {
            ...prevState.experience,
            [name] : e.target.value
        }
    }
    ))             
}




        return ( 
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="dates">
                    <label className="input-label" htmlFor="start">Start:</label>
                    <input value={data.experience.start} className="input-field" onChange={(e) => handleChange(e)} type="date" name="start" />
                    <label className="input-label" htmlFor="end">End:</label>
                    <input className="input-field" onChange={(e) => handleChange(e)} type="date" name='end' />
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="company">Name of company:</label>
                <input value={data.experience.company} className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Name of company" name='company'></input>    
                </div>
                <div className="input-container">
                <label htmlFor="title">Title of position:</label>
                <input value={data.experience.title}  className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Title of position" name='title'></input>    
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="description">Description of experience:</label>
                <input value={data.experience.description}  className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Description of the position" name='description'></input>    
                </div>

                <button className="submit-btn" onClick={() => props.addExperiencie(data, 'experienceChilds')}>Add Data</button>
            </div>
        )
  
}

export default Experiencie;