import { useState } from "react";
import './experience.css';

const Experiencie = (props) => {
    
    const [data, setData] = useState({
            id: null,
            start: '',
            end: '',
            company: '',
            title: '',
            description: '',
    })


const handleChange = (e) =>  {
    const name = e.target.name
    setData(prevState => ({
       
            ...prevState,
            [name] : e.target.value
       
    }
    ))             
}
        return ( 
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="dates">
                    <label className="input-label" htmlFor="start">Start:</label>
                    <input value={data.start} className="input-field" onChange={(e) => handleChange(e)} type="date" name="start" />
                    <label className="input-label" htmlFor="end">End:</label>
                    <input className="input-field" onChange={(e) => handleChange(e)} type="date" name='end' />
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="company">Name of company:</label>
                <input value={data.company} className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Name of company" name='company'></input>    
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="title">Title of position:</label>
                <input value={data.title}  className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Title of position" name='title'></input>    
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="description">Description of experience:</label>
                <input value={data.description}  className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Description of the position" name='description'></input>    
                </div>
                <span className="button-container">
                    <button className="submit-btn" onClick={() => props.addExperiencie(data, 'experienceChilds')}>Add Data</button>
                </span>
            </div>
        )
  
}

export default Experiencie;