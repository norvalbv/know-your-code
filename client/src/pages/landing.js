import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 *
 * Detailed explanation of the code snippet:
 *
 * @returns {React.Component}
 */
const Landing = () => {
  const [search, setSearch] = useState('');

  /**
   *
   * Changes the search value in the state
   *
   * @param {*} searchValue - the value of the search input as a html event
   */
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
