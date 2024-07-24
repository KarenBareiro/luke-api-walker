import React from 'react';
import '../App/App';

const SubmitButton = ({ onSubmit }) => {
  return (
    <div>
      <button onClick={onSubmit}>Enviar solicitud</button>
    </div>
  );
};

export default SubmitButton;
