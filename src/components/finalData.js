import { useState } from "react";


import './finalData.css';


const FinalData = (props) => {


    const [data, setData] = useState({             
        contact1: 'site.webpage.com',
        contact2: 'Twitter',
        contact3: 'Instagram',
        description: '"Write a short description about yourself"',
    })


   const textAreaAdjust = (element) => {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
  }

   const displayChange = (e) => {
        setData({
            [e.target.id] : e.target.value})
   }
        return (
            <div className='final-container'>
                <div className="bar">
                    <div className="contact-container">
                    <input id="contact1" onChange={(e) => {displayChange(e)}} className="contact" value={data.contact1}></input>
                    <input id="contact2" onChange={(e) => {displayChange(e)}} className="contact" value={data.contact2}></input>
                    <input id="contact3" onChange={(e) => {displayChange(e)}} className="contact" value={data.contact3}></input>
                    </div>
                <textarea maxLength="155" id="description" onKeyUp={(e) => {textAreaAdjust(e)}} onChange={(e) => {displayChange(e)}} className="description" value={data.description}></textarea>
                </div>
                <img src={props.data.title.avatar} alt="Selected profile pic" className="profile-img"></img>
                <div className="name-container">
                    <div className="name-div">
                        <p id="firstname">{props.data.title.firstName}</p>
                        <p id="lastname">{props.data.title.lastName}</p>  
                    </div>     
                </div>
                <div className="contact-info">           
                        <p id="email">{props.data.title.email}</p>
                        <p id="tel">{props.data.title.telphone}</p>
                        <p id="direction">{props.data.title.direction}</p>
                </div>
                <div className="experience-container"> 
                    <h2>Experiencie</h2>
                    {props.data.experienceChilds.map( (experience, index) => {
                        console.log(experience.experience)
                        return (
                            <div className="experience" data-key={index} key={index}>
                            <p className="start-date">{experience.experience.start}</p>
                            <p className="end-date">{experience.experience.end}</p>
                            <p className="company">{experience.experience.company}</p>
                            <p className="title">{experience.experience.title}</p>
                            <p className="description">{experience.experience.description}</p>
                            <button onClick={(e) => {props.removeExperiencie(e.target.parentNode.dataset.key, 'experienceChilds')}} className="delete" data-html2canvas-ignore="true">X</button>
                            </div>
                        )
                    })}
                </div>
                <div className="education-container">
                    <h2>Education</h2>
                    {props.data.educationChilds.map( (education, index) => {
                        return (
                            <div className="education" key={index}>
                            <p className="start-date">{education.education.start}</p>
                            <p className="end-date">{education.education.end}</p>
                            <p className="title">{education.education.title}</p>
                            <p className="institution">{education.education.institution}</p>
                            <button onClick={(e) => {props.removeExperiencie(e.target.parentNode.dataset.key, 'educationChilds')}} className="delete" data-html2canvas-ignore="true">X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

export default FinalData;