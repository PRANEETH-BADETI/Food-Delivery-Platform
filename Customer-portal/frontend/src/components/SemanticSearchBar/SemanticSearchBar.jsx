import React, { useState } from 'react';
import './SemanticSearchBar.css';
const placeholders = [
  "Search for spicy vegan options...",
  "What are you craving today?",
  "High protein meals under 500 cals...",
  "Show me the best sushi nearby..."
];

const SemanticSearchBar = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  // Simple interval to rotate placeholders
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Searching for:", query);
      // Further integration with AI backend would go here
    }
  };

  return (
    <div className={`semantic-search-container ${isFocused ? 'focused' : ''}`}>
      <form className="semantic-search-form" onSubmit={handleSearch}>
        <div className="search-icon-wrapper">
          {/* Using a generic search icon, but styling it with a glow */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <input
          type="text"
          className="semantic-search-input"
          placeholder={placeholders[placeholderIndex]}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button type="submit" className="semantic-search-btn">
          <span>Discover</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sparkle-icon"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
        </button>
      </form>
    </div>
  );
};

export default SemanticSearchBar;
