import { useState } from "react";
import './title.css';
import avatar from '../images/avatarProfile.png'

    const Title = (props) => {

        const [error, setError] = useState(false)

        const [data, setData] = useState({
        avatar: '',
        firstName: '',
        lastName: '',
        telphone: '',
        direction: '',});

        const handleChange = (e) => {
            const name = e.target.name;
            setData(prevState => ({
                ...prevState,
            [name] : e.target.value
            }));           
        }

        const handleFile = (e) => {
            avatar = URL.createObjectURL(e.target.files[0])
            setData(prevState => ({
                ...prevState,
            avatar : avatar
            }))             
        }


        
        return ( 
            <div className='container'>
                <h2 className="section-title">Personal Info</h2>
                <div className="profile-section">
                <input onChange={(e) => handleFile(e)} className="inputField" type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" name='avatar'></input>
                <img src={avatar} className="avatar" alt="profile pic"></img>
                </div>
                <div className="names">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={(e) => handleChange(e)} type="text" placeholder="Peter" name="firstName" className="inputField"></input> 
                    <label htmlFor="lastName">Last Name:</label>   
                    <input onChange={(e) => handleChange(e)} type="text" placeholder="Parker" name="lastName" className="inputField"></input>
                </div>
                <div className="contact">
                    <label htmlFor="telphone">Phone Number:</label>
                    <input onChange={(e) => handleChange(e)} type="text" placeholder="115367852" name="telphone" className="inputField"></input>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => handleChange(e)} type="text" placeholder="example@mail.com" name="email" className="inputField"></input>
                    <label htmlFor="direction">Adress:</label>
                    <input onChange={(e) => handleChange(e)} type="text" placeholder="Direction" name="direction" className="inputField"></input>
                </div>
                <button onClick={() => {props.handleInfo(data, 'title')}
                    } className="submit-btn">Add Data</button>    
                    {error ? <p>error</p> : null}
            </div>
        )
    }

export default Title;