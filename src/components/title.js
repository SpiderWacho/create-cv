import { useState } from "react";
import './title.css';
import avatar from '../images/avatarProfile.png'

    const Title = (props) => {

        const [error, setError] = useState({currentError: true,
        value: '',})

        const [data, setData] = useState({
        avatar: '',
        firstName: '',
        lastName: '',
        telphone: '',
        direction: '',
        email: ''});

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

        const handleErrors = (e) => {
            if (e.target.name === 'firstName' || e.target.name === 'lastName') {    
                let regex = /^[A-Za-z]+$/;
                if (e.target.value === '' || !regex.test(e.target.value)) {
                    setError({currentError: true,
                    value: 'Inset a valid name'});
                }
                else {
                    setError({currentError: false,
                    value: ''})
                }
            }               
            else if (e.target.name === 'telphone') {
                    const regex = /^\d+$/
                    if (e.target.value === '' || !regex.test(e.target.value)) {
                        setError({currentError: true,
                        value: 'Insert a valid telphone'})
                    }
                    else {
                        setError({currentError: false,
                        value: ''}) 
                    }
            }       
            else if (e.target.name === 'email') {
                const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                if (e.target.value === '' || !regex.test(e.target.value)) {
                    setError({currentError: true,
                    value: 'Insert a valid email'})
                }
                else {
                    setError({currentError: false,
                    value: ''}) 
                }
        }
            else if (e.target.name === 'direction') {
                if (e.target.value === ''   ) {
                    setError({currentError: true,
                    value: 'Insert a valid direction'})
                }
                else {
                    setError({currentError: false,
                    value: ''}) 
                }
            }
        }

        


        
        return ( 
            <div className='container'>
                <h2 className="section-title">Personal Info</h2>
                <div className="profile-section">
                <input onChange={(e) => handleFile(e)} className="inputField" type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" name='avatar'></input>
                <img src={avatar} className="avatar" alt="profile pic"></img>
                </div>
                <div className="names">
                    <div className="input-container">
                        <label className="input-label" htmlFor="firstName">First Name:</label>
                        <input onChange={(e) => {handleChange(e); handleErrors(e)}} type="text" placeholder="Peter" name="firstName" className="inputField"></input> 
                    </div>
                    <div className="input-container">
                        <label className="input-label" htmlFor="lastName">Last Name:</label>   
                        <input onChange={(e) => {handleChange(e); handleErrors(e)}}  type="text" placeholder="Parker" name="lastName" className="inputField"></input>
                    </div>
                </div>
                <div className="contact">
                    <div className="input-container">
                        <label className="input-label" htmlFor="telphone">Phone Number:</label>
                        <input onChange={(e) => {handleChange(e); handleErrors(e)}} type="text" placeholder="115367852" name="telphone" className="inputField"></input>
                    </div>
                    <div className="input-container">
                    <label className="input-label" htmlFor="email">Email:</label>
                    <input onChange={(e) => {handleChange(e); handleErrors(e)}} type="text" placeholder="example@mail.com" name="email" className="inputField"></input>
                    </div>
                    <div className="input-container">
                    <label className="input-label" htmlFor="direction">Adress:</label>
                    <input onChange={(e) => {handleChange(e); handleErrors(e)}} type="text" placeholder="Direction" name="direction" className="inputField"></input>
                    </div>
                </div>
                {error && <p className="error">{error.value}</p>}
                <span className="button-container">
                <button onClick={() => {props.handleInfo(data, 'title', error)}
                    } className="submit-btn">Add Data</button>    
                    </span>
            </div>
        )
    }

export default Title;