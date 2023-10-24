import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ImageForm = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [user, token] = useAuth();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadClick = async () => {
    if (selectedFile) {
      try {
        // Create a FormData object and append the selected image
        const formData = new FormData();
        formData.append("image", selectedFile);

        // Make an API request to upload the image
        const response = await axios.post(
          "https://localhost:5001/api/gallery",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
          }
        );

        // Call the onImageUpload callback with the uploaded image data (if needed)
        onImageUpload(response.data);

        // Optionally, you can reset the selected file state
        setSelectedFile(null);

        // Handle any success message or further actions
        alert("Image uploaded successfully!");
      } catch (error) {
        // Handle errors (e.g., show an error message to the user)
        console.error("Error uploading image", error);
      }
    } else {
      alert("Please select an image file to upload.");
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input
        type="file"
        name="Images"
        accept="image/jpeg,image/png,image/gif"
        onChange={handleFileChange}
      />
      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
};

export default ImageForm;
