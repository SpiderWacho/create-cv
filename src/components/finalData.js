import { React, Component } from "react";


import './finalData.css';


class FinalData extends Component {
    constructor(props) {
        super(props);

    this.state = { 
        contact1: 'site.webpage.com',
        contact2: 'Twitter',
        contact3: 'Instagram',
        description: '"Write a short description about yourself"',
    }


   this.displayChange = this.displayChange.bind(this);
}

   displayChange(e) {
    this.setState({
        [e.target.name] : e.target.value})
}


render(){
        return (
            <div className='final-container'>
                <div className="bar">
                    <div className="contact-container">
                        
                    <input name="contact1" onChange={(e) => this.displayChange(e)} className="contact" value={this.state.contact1}></input>
                    <input name="contact2" onChange={(e) => this.displayChange(e)} className="contact" value={this.state.contact2}></input>
                    <input name="contact3" onChange={(e) => this.displayChange(e)} className="contact" value={this.state.contact3}></input>
                    </div>
                <textarea name="description" maxLength="155" id="description" onChange={(e) => {this.displayChange(e)}} className="description" value={this.state.description}></textarea>
                </div>
                {(this.props.data.title.avatar !== '') && <img src={this.props.data.title.avatar} alt="Selected profile pic" className="profile-img"></img>}
                <div className="name-container">
                    <div className="name-div">
                        <span className="name-row">
                        <p id="firstname">{this.props.data.title.firstName}</p>
                        </span>
                        <span className="name-row">
                        <p id="lastname">{this.props.data.title.lastName}</p>  
                        </span>
                    </div>      
                    <div className="contact-info">           
                            <p id="email">{this.props.data.title.email}</p>
                            <p  id="tel">{this.props.data.title.telphone}</p>
                            <p id="direction">{this.props.data.title.direction}</p>
                    </div>
                </div>

                <div className="experience-container"> 
                <div className="separate-bar"></div>    
                    <h2 className="finaldata-title">Experiencie</h2>

                    {this.props.data.experienceChilds.map( (experience) => {
                        console.log(`Experience id: ${experience.id}`)
                        

                        return (
                            <div className="experience" key={experience.id}>
                                <p className="start-date">{experience.start}</p>
                                <p className="end-date">{experience.end}</p>
                                <p className="company">{experience.company}</p>
                                <p className="title">{experience.title}</p>
                                <p className="description">{experience.description}</p>
                                <button onClick={(e) => {this.props.removeElement(experience.id, 'experienceChilds')}} className="delete">X</button>
                            </div>
                        )
                    })}
                
                </div>
                
                <div className="education-container">
                <div className="separate-bar"></div>    
                    <h2 className="finaldata-title">Education</h2>
                    {this.props.data.educationChilds.map( (education) => {
                        return (
                            <div className="education"  key={education.id}>
                                <p className="start-date">{education.start}</p>
                                <p className="end-date">{education.end}</p>
                                <p className="title">{education.title}</p>
                                <p className="institution">{education.institution}</p>
                                <button onClick={(e) => {this.props.removeElement(education.id, 'educationChilds')}} className="delete">X</button>
                            </div>
                        )
                    })}   
                </div>
               
            </div>
        )
    }
}

export default FinalData;