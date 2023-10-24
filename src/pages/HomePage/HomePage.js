import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [user, token] = useAuth();
  const [blogPosts, setBlogPosts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    // Fetch blog posts
    axios.get("/api/blog/posts").then((response) => {
      setBlogPosts(response.data);
    });

    // Fetch reviews
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });

    // Fetch gallery items
    axios.get("/api/gallery").then((response) => {
      setGalleryItems(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Welcome to {user.userName}'s Homepage!</h1>

      <section>
        <h2>Blog Posts</h2>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Link to={`/reviews/${review.id}`}>{review.text}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Gallery</h2>
        <ul>
          {galleryItems.map((item) => (
            <li key={item.id}>
              <Link to={`/gallery/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
