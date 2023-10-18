import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchResults = ({}) => {
  const [searchParams] = useSearchParams();
  const anime = searchParams.get("anime");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(
          `https://api.myanimelist.net/v2/anime?q=${anime}&limit=20`,
          {
            headers: {
              "X-MAL-CLIENT-ID": "4c9b309b7dc9dc87f29fbf259084aac5",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imttb3JnMSIsImVtYWlsIjoia3lsZUBreS5reWxlIiwiaWQiOiI4NThlNWE1YS02Mzk4LTRmMjYtYTFlMi03NDNhZTQ0N2U2YWQiLCJleHAiOjE2OTc3MjgwOTcsImlzcyI6IkZ1bGxTdGFja0F1dGhfV2ViQVBJIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSJ9.F4K_Aie1Mho_nhfoWRFadMpVe5BVHLdF4t1W5HTJYzE",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSearchResults(data.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchAnime();
  }, [anime]);

  return (
    <div>
      {searchResults && searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.node.id}>
                <strong>Title: {result.node.title}</strong>
                <p>Description: {result.node.description}</p>
                {}
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
