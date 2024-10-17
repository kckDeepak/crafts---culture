import { useState } from 'react';

const SearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    onSearch(filteredData);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search for artisans or products..."
    />
  );
};

export default SearchBar;
