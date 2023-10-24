import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogLists from "../../components/BlogLists/BlogLists";

const Blog = () => {
  const pageTitle = "Blog";
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const blogResponse = await axios.get(
        "https://localhost:5001/api/blogpost/posts"
      );
      setBlogPosts(blogResponse.data);

    } catch (error) {
      console.warn("Error in FetchData request: ", error);
    }
  };

  return (
    <div className="container">
      <h1>{pageTitle}</h1>

      <Link to="/create-blog">
        <button>Create Blog</button>
      </Link>
      <div>
    {blogPosts.map((blog) => (
              <BlogLists
                key={blog.id}
                title={blog.title}
                content={blog.content}
              />
            ))}
    </div>
    </div>
  );
};

export default Blog;
