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
        const name = e.target.name;
        this.setState(prevState => ({
            ...prevState,
        [name] : e.target.value
        }));           
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
                <h2 className="setion-title">Personal Info</h2>
                <div className="profile-section">
                <input onChange={(e) => this.handleFile(e)} type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" name='avatar'></input>
                <img src={avatar} className="avatar" alt="profile pic"></img>
                </div>
                <div className="names">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Peter" name="firstName" className="inputField"></input> 
                    <label htmlFor="lastName">Last Name:</label>   
                    <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Parker" name="lastName" className="inputField"></input>
                </div>
                <div className="contact">
                    <label htmlFor="telphone">Phone Number:</label>
                    <input onChange={(e) => this.handleChange(e)} type="text" placeholder="115367852" name="telphone" className="inputField"></input>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => this.handleChange(e)} type="text" placeholder="example@mail.com" name="email" className="inputField"></input>
                    <label htmlFor="direction">Adress:</label>
                    <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Direction" name="direction" className="inputField"></input>
                </div>
                <button onClick={() => this.props.handleInfo(this.state, 'title')} className="submit-btn">Add data</button>    
            </div>
        )
    }
}

export default Title;