import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);

    // You can add code here to perform a search using the searchQuery,
    // e.g., fetching data from an API, filtering a list, etc.

    // Clear the search input
    setSearchQuery('');
  };

  return (
    <div className='search-div'>
      <form className="search-form" onSubmit={handleSubmit}>
        <input className='search-input'
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className='search-button' type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
