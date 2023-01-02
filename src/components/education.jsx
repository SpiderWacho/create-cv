import { useState } from 'react';
import './education.css';

function Education(props) {
  const [data, setData] = useState({
    id: '',
    start: '',
    end: '',
    title: '',
    institution: ''
  });

  const handleChange = (e) => {
    const { name } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: e.target.value
    }));
  };

  return (
    <div className="container">
      <h2 className="section-title">Education</h2>
      <div className="dates">
        <label className="input-label" htmlFor="start">
          Start:
        </label>
        <input
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="date"
          name="start"
          id="start"
        />
        <label className="input-label" htmlFor="end">
          End:
        </label>
        <input className="input-field" onChange={(e) => handleChange(e)} type="date" name="end" />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="title">
          Title obtained:
        </label>
        <input
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="textarea"
          placeholder="Title obtained"
          name="title"
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="institution">
          Institution:
        </label>
        <input
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="textarea"
          placeholder="Institution"
          name="institution"
        />
      </div>
      <span className="button-container">
        <button type="button" className="submit-btn" onClick={() => props.addEducation(data)}>
          Add Data
        </button>
      </span>
    </div>
  );
}

export default Education;
