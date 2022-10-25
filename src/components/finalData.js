import { Component } from "react";

import './finalData.css';


class FinalData extends Component {
    constructor(props) {
        super(props);



    }

    

    render() {  

        return (
            <div className='final-container'>
                <div className="bar"></div>
                <img src={this.props.data.title.avatar} alt="Selected profile pic" className="profile-img"></img>
                <div className="name-container">
                    <div className="name-div">
                        <p id="firstname">{this.props.data.title.firstName}</p>
                        <p id="lastname">{this.props.data.title.lastName}</p>  
                    </div>     
                </div>
                <div className="contact-info">           
                        <p id="email">{this.props.data.title.email}</p>
                        <p id="tel">{this.props.data.title.telphone}</p>
                        <p id="direction">{this.props.data.title.direction}</p>
                </div>
                <button className="delete">X</button>
                <div className="experience-container"> 
                    <h2>Experiencie</h2>
                    {this.props.data.experienceChilds.map( (experiencie, index) => {
                        return (
                            <div className="experiencie" data-key={index} key={index}>
                            <p className="start-date">{experiencie.start}</p>
                            <p className="end-date">{experiencie.end}</p>
                            <p className="company">{experiencie.company}</p>
                            <p className="title">{experiencie.title}</p>
                            <p className="description">{experiencie.description}</p>
                            <button onClick={(e) => {this.props.removeExperiencie(e.target.parentNode.dataset.key, 'experienceChilds')}} className="delete">X</button>
                            </div>
                        )
                    })}
                </div>
                <div className="education-container">
                    <h2>Education</h2>
                    {this.props.data.educationChilds.map( (education, index) => {
                        return (
                        
                            <div className="education" key={index}>
                            <p className="start-date">{education.start}</p>
                            <p className="end-date">{education.end}</p>
                            <p className="title">{education.title}</p>
                            <p className="institution">{education.institution}</p>
                            <button className="delete">X</button>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FinalData;