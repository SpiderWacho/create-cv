/* eslint-disable react/destructuring-assignment */
import { React, Component } from 'react';
import PropTypes from 'prop-types';

import './finalData.css';

class FinalData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact1: 'site.webpage.com',
      contact2: 'Twitter',
      contact3: 'Instagram',
      description: '"Escribi una descripcion pequeña sobre vos"'
    };

    this.displayChange = this.displayChange.bind(this);
  }

  displayChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="final-container">
        <div className="bar">
          <div className="contact-container">
            <input
              name="contact1"
              onChange={(e) => this.displayChange(e)}
              className="contact"
              // eslint-disable-next-line react/destructuring-assignment
              value={this.state.contact1}
            />
            <input
              name="contact2"
              onChange={(e) => this.displayChange(e)}
              className="contact"
              // eslint-disable-next-line react/destructuring-assignment
              value={this.state.contact2}
            />
            <input
              name="contact3"
              onChange={(e) => this.displayChange(e)}
              className="contact"
              // eslint-disable-next-line react/destructuring-assignment
              value={this.state.contact3}
            />
          </div>
          <textarea
            name="description"
            maxLength="155"
            id="description"
            onChange={(e) => {
              this.displayChange(e);
            }}
            className="description"
            value={this.state.description}
          />
        </div>
        {this.props.title.avatar !== '' && (
          <img src={this.props.title.avatar} alt="Selected profile pic" className="profile-img" />
        )}
        <div className="name-container">
          <div className="name-div">
            <span className="name-row">
              <p id="firstname">{this.props.title.firstName}</p>
            </span>
            <span className="name-row">
              <p id="lastname">{this.props.title.lastName}</p>
            </span>
          </div>
          <div className="contact-info">
            <p id="email">{this.props.title.email}</p>
            <p id="tel">{this.props.title.telphone}</p>
            <p id="direction">{this.props.title.direction}</p>
          </div>
        </div>
        <div className="experience-container">
          <div className="separate-bar" />
          <h2 className="finaldata-title">Experiencia</h2>

          {this.props.experience.map((experience) => {
            function addHours(date, hours) {
              date.setHours(date.getHours() + hours);

              return date;
            }
            const todaysDate = new Date();
            const inputDate = new Date(experience.end);
            const modifiedInput = addHours(inputDate, 15);

            if (modifiedInput.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)) {
              // eslint-disable-next-line no-param-reassign
              experience.end = 'Actualidad';
            }
            return (
              <div className="experience" key={experience.id}>
                <p className="start-date">{experience.start}</p>
                <p className="end-date">{experience.end}</p>
                <p className="company">{experience.company}</p>
                <p className="title">{experience.title}</p>
                <p className="description">{experience.description}</p>
                <button
                  type="button"
                  onClick={() => {
                    this.props.removeElement(experience.id);
                  }}
                  className="delete">
                  X
                </button>
              </div>
            );
          })}
        </div>
        <div className="education-container">
          <div className="separate-bar" />
          <h2 className="finaldata-title">Educacion</h2>
          {this.props.education.map((education) => {
            function addHours(date, hours) {
              date.setHours(date.getHours() + hours);
              return date;
            }
            const todaysDate = new Date();
            const inputDate = new Date(education.end);
            const modifiedInput = addHours(inputDate, 15);
            if (modifiedInput.setHours(0, 0, 0, 0) === todaysDate.setHours(0, 0, 0, 0)) {
              // eslint-disable-next-line no-param-reassign
              education.end = 'Actualidad';
            }
            return (
              <div className="education" key={education.id}>
                <p className="start-date">{education.start}</p>
                <p className="end-date">{education.end}</p>
                <p className="title">{education.title}</p>
                <p className="institution">{education.institution}</p>
                <button
                  type="button"
                  onClick={() => {
                    this.props.removeEducation(education.id);
                  }}
                  className="delete">
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FinalData;

FinalData.propTypes = {
  title: PropTypes.shape({
    avatar: PropTypes.string,
    direction: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    telphone: PropTypes.string
  }).isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      description: PropTypes.string,
      end: PropTypes.string,
      id: PropTypes.number,
      start: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired,
  education: PropTypes.arrayOf(
    PropTypes.shape({
      end: PropTypes.string,
      id: PropTypes.number,
      institution: PropTypes.string,
      start: PropTypes.string,
      title: PropTypes.string
    })
  ).isRequired,
  removeElement: PropTypes.func.isRequired,
  removeEducation: PropTypes.func.isRequired
};
