import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const pageTitle = "Blog";

  return (
    <div className="container">
      <h1>{pageTitle}</h1>

      <Link to="/create-blog">
        <button>Create Blog</button>
      </Link>
    </div>
  );
};

export default Blog;
