import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SearchBar.css'

function SearchBar({ query, onQueryChange, onSearchSubmit }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${encodeURIComponent(query)}`);
      onQueryChange('');
      if (onSearchSubmit) {
        onSearchSubmit();
      }
    } else {
      alert('Please enter a search query.');
    }
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSearch} className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search for news..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ms-2">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
