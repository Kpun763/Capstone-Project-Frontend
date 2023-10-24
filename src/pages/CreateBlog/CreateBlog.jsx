import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const CreateBlog = () => {
  const [user, token] = useAuth();
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    blogData.append("title", blogTitle);
    blogData.append("content", blogContent);
    try {
      const response = await axios.post(
        "https://localhost:5001/api/blogpost",
        blogData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        }
      );
      setBlogTitle("");
      setBlogContent("");
    } catch (error) {
      console.warn("Error in FetchData request: ", error);
    }
  };

  return (
    <div>
      <h2>Create a Blog</h2>
      <form onSubmit={handleCreateBlog}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
