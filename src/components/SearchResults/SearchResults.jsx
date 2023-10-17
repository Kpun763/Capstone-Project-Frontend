import React from "react";

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.node.id}>
            <strong>Title: {result.node.title}</strong>
            <img src={result.node.main_picture.medium} alt="Anime Cover" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
