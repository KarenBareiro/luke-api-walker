import React from 'react';
import '../App/App';

const Dropdown = ({ onSelectResource }) => {
  const handleChange = (event) => {
    onSelectResource(event.target.value);
  };

  return (
    <div>
      <label htmlFor="resource">Search for:</label>
      <select id="resource" onChange={handleChange}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="films">Films</option>
        <option value="species">Species</option>
        <option value="vehicles">Vehicles</option>
        <option value="starships">Starships</option>
      </select>
    </div>
  );
};

export default Dropdown;
