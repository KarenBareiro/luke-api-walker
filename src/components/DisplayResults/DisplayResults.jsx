import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App/App';

const DisplayResults = ({ resource, results }) => {
  const [homeworld, setHomeworld] = useState('');

  useEffect(() => {
    const fetchHomeworld = async () => {
      if (resource === 'people' && results.homeworld) {
        try {
          const response = await axios.get(results.homeworld);
          setHomeworld(response.data.name);
        } catch (error) {
          console.error('Error fetching homeworld:', error);
        }
      }
    };

    fetchHomeworld();
  }, [resource, results.homeworld]);

  return (
    <div>
      <h2>Resultados:</h2>
      <ul>
        <li><strong>Name:</strong> {results.name}</li>
        <li><strong>Height:</strong> {results.height}</li>
        <li><strong>Mass:</strong> {results.mass}</li>
        {resource === 'people' && (
          <li><strong>Homeworld:</strong> {homeworld}</li>
        )}
      </ul>
    </div>
  );
};

export default DisplayResults;
