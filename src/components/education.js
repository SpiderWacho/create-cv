import { Component, useState } from "react";
import './education.css';

const Education = (props) => {

        
        const [data, setData] = useState({
            education: {
                start: '',
                end: '',
                title: '',
                institution: '',
            },
        })

        const handleChange = (e) =>  {
            const name = e.target.name
            setData(prevState => ({
                education: {
                    ...prevState.education,
                    [name] : e.target.value
                }
            }
            ))             
        }


    return ( 
        <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="dates">
            <label className="input-label" htmlFor="start">Start:</label>
            <input className="input-field" onChange={(e) => handleChange(e)} type="date" name="start"></input>
            <label className="input-label" htmlFor="end">End:</label>
            <input className="input-field" onChange={(e) => handleChange(e)} type="date" name="end"></input>
            </div>
            <div className="input-container">
            <label className="input-label" htmlFor="title">Title obtained:</label>
            <input className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Title obtained" name="title"></input>
            </div>
            <div className="input-container">
            <label className="input-label" htmlFor="institution">Institution:</label>
            <input className="input-field" onChange={(e) => handleChange(e)} type="textarea" placeholder="Institution" name="institution"></input>     
            </div>
            <button className="submit-btn" onClick={() => props.addEducation(data, "educationChilds")}>Add Data</button> 
        </div>
    )
}


export default Education;