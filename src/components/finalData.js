import { Component } from "react";


import './finalData.css';


class FinalData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contact1: 'site.webpage.com',
            contact2: 'Twitter',
            contact3: 'Instagram',
            description: '"Write a short description about yourself"'
        }

        this.displayChange = this.displayChange.bind(this);
   }

   displayChange(e) {
        this.setState({
            [e.target.id] : e.target.value})
   }

    render() {  
        console.log(this.props)
        return (
            <div className='final-container'>
                <div className="bar">
                    <div className="contact-container">
                    <input id="contact1" onChange={(e) => {this.displayChange(e)}} className="contact" value={this.state.contact1}></input>
                    <input id="contact2" className="contact" value={this.state.contact2}></input>
                    <input id="contact3" className="contact" value={this.state.contact3}></input>
                    </div>
                <input id="description" className="description" value={this.state.description}></input>
                </div>
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
                    {this.props.data.experienceChilds.map( (experience) => {
                        
                        return (
                            <div className="experiencie" data-key={experience.id} key={experience.id}>
                            <p className="start-date">{experience.start}</p>
                            <p className="end-date">{experience.end}</p>
                            <p className="company">{experience.company}</p>
                            <p className="title">{experience.title}</p>
                            <p className="description">{experience.description}</p>
                            <button onClick={(e) => {this.props.removeExperiencie(e.target.parentNode.dataset.key, 'experienceChilds')}} className="delete" data-html2canvas-ignore="true">X</button>
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
                            <button className="delete" data-html2canvas-ignore="true">X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FinalData;