import { useState } from 'react';

export const Landing = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </>
  );
};
