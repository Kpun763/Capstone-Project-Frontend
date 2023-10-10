import React, { useState } from "react";
import axios from "axios";

const GalleryUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Image", selectedFile);

    axios
      .post("https://localhost:5001/api/gallery/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Handle success (e.g., show a success message to the user).
      })
      .catch((error) => {
        // Handle error (e.g., display an error message to the user).
      });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
};

export default GalleryUpload;
