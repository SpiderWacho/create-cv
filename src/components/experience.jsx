import { useState } from 'react';
import './experience.css';

function Experiencie(props) {
  const [data, setData] = useState({
    id: null,
    start: '',
    end: '',
    company: '',
    title: '',
    description: ''
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
      <h2 className="section-title">Experience</h2>
      <div className="dates">
        <label className="input-label" htmlFor="start">
          Start:
        </label>
        <input
          value={data.start}
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="date"
          name="start"
        />
        <label className="input-label" htmlFor="end">
          End:
        </label>
        <input
          value={data.end}
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="date"
          name="end"
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="company">
          Name of company:
        </label>
        <input
          value={data.company}
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="textarea"
          placeholder="Name of company"
          name="company"
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="title">
          Title of position:
        </label>
        <input
          value={data.title}
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="textarea"
          placeholder="Title of position"
          name="title"
        />
      </div>
      <div className="input-container">
        <label className="input-label" htmlFor="description">
          Description of experience:
        </label>
        <input
          value={data.description}
          className="input-field"
          onChange={(e) => handleChange(e)}
          type="textarea"
          placeholder="Description of the position"
          name="description"
        />
      </div>
      <span className="button-container">
        <button type="button" className="submit-btn" onClick={() => props.addExperiencie(data)}>
          Add Data
        </button>
      </span>
    </div>
  );
}

export default Experiencie;
