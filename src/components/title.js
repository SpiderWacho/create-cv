import { Component } from "react";
import './title.css';
import avatar from '../images/avatarProfile.png'

class Title extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            avatar: '',
            firstName: '',
            lastName: '',
            telphone: '',
            direction: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)  {
        const name = e.target.name
        this.setState(prevState => ({
            ...prevState,
        [name] : e.target.value
        }))             
    }

    handleFile(e)  {
        avatar = URL.createObjectURL(e.target.files[0])
        this.setState(prevState => ({
            ...prevState,
        avatar : avatar
        }))             
    }
    

    render(){
        return ( 
            <div className="container">
                <h2>Personal Info</h2>
                <input onChange={(e) => this.handleFile(e)} type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" name='avatar'></input>
                <img src={avatar} className="avatar" alt="profile pic"></img>
                <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Peter" name="firstName" className="inputField"></input>    
                <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Parker" name="lastName" className="inputField"></input>
                <input onChange={(e) => this.handleChange(e)} type="text" placeholder="115367852" name="telphone" className="inputField"></input>
                <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Direction" name="direction" className="inputField"></input>
                <button onClick={() => this.props.handleInfo(this.state, 'title')} className="submit-btn">Add data</button>    
            </div>
        )
    }
}

export default Title;