import React from 'react';
import '../App/App';

const InputField = ({ id, onChangeId }) => {
  return (
    <div>
      <div htmlFor="id">Enter ID:</div>
      <input type="number" id="id" value={id} onChange={onChangeId} />
    </div>
  );
};

export default InputField;
