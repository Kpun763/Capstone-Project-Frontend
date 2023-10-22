import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Anime from "../../components/Anime/Anime";
import useAuth from "../../hooks/useAuth";

const SearchResults = ({}) => {
  const [searchParams] = useSearchParams();
  const anime = searchParams.get("anime");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
  
      // Update your component state with the anime search results
      setSearchResults(data.data); // Access the 'data' property in the response
  
      // Rest of your code
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  useEffect(() => {
    fetchAnime();
  }, [anime]);

  //Handles my API response:
  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      try {
        const response = await fetch(
          `https://localhost:5001/api/proxy/anime/search?searchTerm=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Update your component state with the anime search results
        setSearchResults(data);
        setShowResults(true);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  return (
    <div>
      {searchResults && searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
  {searchResults.map((result) => (
    <li key={result.node.id}>
      <strong>Title: {result.node.title}</strong>
      {result.node.mainPicture ? (
        <img src={result.node.mainPicture.medium} alt={result.node.title} />
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
