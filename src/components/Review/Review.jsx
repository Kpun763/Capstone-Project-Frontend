import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Review = ({ animeId }) => {
  const [reviewText, setReviewText] = useState("");
  const [user, token] = useAuth();

  const handleReviewSubmit = async () => {
    try {
      // Make an API request to submit the review
      const response = await fetch(
        `https://localhost:5001/api/reviews/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            animeId,
            reviewText,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful review submission, e.g., display a success message
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div>
      <h2>Add a Review</h2>
      <textarea
        placeholder="Write your review here"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default Review;
