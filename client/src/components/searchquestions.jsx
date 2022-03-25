import { useState } from 'react';

export const SearchQuestions = () => {
  const [value, setValue] = useState('');
  return (
    <input
      type="text"
      placeholder="Search Questions"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
