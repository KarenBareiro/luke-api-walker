import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import InputField from '../InputField/InputField';
import SubmitButton from '../SubmitButton/SubmitButton';
import DisplayResults from '../DisplayResults/DisplayResults';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import axios from 'axios';
import './App.css';


const App = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(false);

  const handleResourceChange = (selectedResource) => {
    setResource(selectedResource);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
      setResults(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <label htmlFor="resource">Search for:</label>
      <select id="resource" onChange={(e) => handleResourceChange(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="films">Films</option>
        <option value="species">Species</option>
        <option value="vehicles">Vehicles</option>
        <option value="starships">Starships</option>
      </select>
      <InputField id={id} onChangeId={handleIdChange} />
      <SubmitButton onSubmit={handleSubmit} />
      {error ? (
        <ErrorComponent />
      ) : (
        results && <DisplayResults resource={resource} results={results} />
      )}
    </div>
  );
};

export default App;

