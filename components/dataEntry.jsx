'use client';

import { useState } from 'react';

const questionEntry = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value); // Updates the state with the input value
  };

  return (
    <div className="p-4">
      <label htmlFor="inputField" className="block text-lg font-semibold mb-2">
        Enter Text:
      </label>
      <input
        type="text"
        id="inputField"
        value={value}
        onChange={handleChange}
        className="p-2 border rounded w-full"
        placeholder="Type something..."
      />
      <p className="mt-4">You typed: {value}</p>
    </div>
  );
};

export default questionEntry;
