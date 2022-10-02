import { Component } from "react";
import './education.css';

class Education extends Component {
    constructor(props) {
        super(props);
    }


    render(){
        return ( 
            <div className="container">
                <input type="date"></input>
                <input type="date"></input>
                <input type="textarea" placeholder="Describe your education"></input>   
                <button onClick={this.props.handleEducation}>Submit</button>
                <button>Add Another</button> 
            </div>
        )
    }
}

export default Education;