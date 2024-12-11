import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query)}`);
      setQuery('');
    } else {
      alert('Please enter a search query.');
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="btn btn-primary ms-2">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
