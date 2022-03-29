import { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [search, setSearch] = useState('');
  const handleChange = (searchValue) => {
    setSearch(searchValue.target.value);
  };

  return (
    <div className="lading-input">
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={handleChange}
      />
      <button className="lading-input__button">Search</button>
      <Link to="/questions">
        <button>Temp button - GOES TO /questions</button>
      </Link>
    </div>
  );
};

export default Landing;
