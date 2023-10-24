import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./SearchResults.css";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const anime = searchParams.get("anime");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [user, token] = useAuth();

  const fetchAnime = async () => {
    try {
      const response = await fetch(
        `https://localhost:5001/api/proxy/anime/search?searchTerm=${anime}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSearchResults(data.data);

      setShowResults(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (anime) {
      fetchAnime();
    }
  }, [anime, token]);

  return (
    <div>
      {searchResults && searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul className="search">
            {searchResults.map((result) => (
              <li key={result.node.id} className="layout">
                <strong>Title: {result.node.title}</strong>
                <p>Description: {result.node.description}</p>
                {result.node.main_picture ? (
                  <img
                    src={result.node.main_picture.medium}
                    alt={result.node.title}
                  />
                ) : (
                  <p>No image available</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
