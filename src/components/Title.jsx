import { useState } from 'react';
import PropTypes from 'prop-types';

import './title.css';
import avatar from '../images/avatarProfile.png';

function Title({ handleInfo, error, errorMsg }) {
  const [data, setData] = useState({
    avatar: `${avatar}`,
    firstName: '',
    lastName: '',
    telphone: '',
    direction: '',
    email: ''
  });
  const [activeComponent, setActiveComponent] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: e.target.value
    }));
  };

  const handleFile = (e) => {
    const newAvatar = URL.createObjectURL(e.target.files[0]);
    setData((prevState) => ({
      ...prevState,
      avatar: newAvatar
    }));
  };

  return (
    <div className="container">
      <h2 className="section-title">Informacion Personal</h2>
      <div className="profile-section">
        <label className="image-input-label">
          {' '}
          Subir foto de perfil
          <input
            onChange={(e) => handleFile(e)}
            className="inputField"
            type="file"
            id="image-input"
            accept="image/jpeg, image/png, image/jpg"
            name="avatar"
          />
        </label>
        <img src={data.avatar} className="avatar" alt="profile pic" />
      </div>
      <div className="names">
        <div className="input-container">
          <label className="input-label" htmlFor="firstName">
            Nombre:
            <span className="input-container">
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Peter"
                name="firstName"
                className="inputField"
              />
            </span>
          </label>
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="lastName">
            Apellido:
            <span className="input-container">
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Parker"
                name="lastName"
                className="inputField"
              />
            </span>
          </label>
        </div>
      </div>
      <div className="contact">
        <div className="input-container">
          <label className="input-label" htmlFor="telphone">
            Numero de telefono:
            <span className="input-container">
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type="number"
                placeholder="115367852"
                name="telphone"
                className="inputField"
              />
            </span>
          </label>
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="email">
            Email:
            <span className="input-container">
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type="email"
                placeholder="ejemplo@mail.com"
                name="email"
                className="inputField"
              />
            </span>
          </label>
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="direction">
            Direccion:
            <span className="input-container">
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                type="text"
                placeholder="Direccion"
                name="direction"
                className="inputField"
              />
            </span>
          </label>
        </div>
      </div>
      <span className="button-container">
        <button
          type="button"
          onClick={() => {
            handleInfo(data);
            setActiveComponent(true);
          }}
          className="submit-btn">
          Agregar datos
        </button>
      </span>
      {error && activeComponent && <p className="error">{errorMsg}</p>}
    </div>
  );
}

export default Title;

Title.propTypes = {
  handleInfo: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired
};
