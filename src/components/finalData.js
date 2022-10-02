import { Component } from "react";

import './finalData.css';


class FinalData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="name-div">
                    <img src={this.props.data.title.avatar} alt="Selected profile pic" className="profile-img"></img>
                    <p>{this.props.data.title.firstName}</p>
                    <p>{this.props.data.title.lastName}</p>                  
                    <p>{this.props.data.title.tel}</p>
                    <p>{this.props.data.title.direction}</p>
                    </div>
                </div>
                <div>
                    <h2>Experiencie</h2>
                    {this.props.data.experienceChilds.map(experiencie => {
                        return (
                            <div key={experiencie.id}>
                            <p>{experiencie.start}</p>
                            <p>{experiencie.end}</p>
                            <p>{experiencie.company}</p>
                            <p>{experiencie.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h2>Education</h2>

                </div>
            </div>
        )
    }
}

export default FinalData;