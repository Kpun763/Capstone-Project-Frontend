import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogLists from "../../components/BlogLists/BlogLists";

const HomePage = () => {
  const [user, token] = useAuth();
  const [blogPosts, setBlogPosts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const blogResponse = await axios.get(
        "https://localhost:5001/api/blogpost/posts"
      );
      setBlogPosts(blogResponse.data);
      const reviewsResponse = await axios.get(
        "https://localhost:5001/api/reviews"
      );
      setReviews(reviewsResponse.data);
    } catch (error) {
      console.warn("Error in FetchData request: ", error);
    }
  };

  return <div>
    <div>
    {blogPosts.map((blog) => (
              <BlogLists
                key={blog.id}
                title={blog.title}
                content={blog.content}
              />
            ))}
    </div>
  </div>;
};

export default HomePage;
