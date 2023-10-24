import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import axios from "axios";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleAccept = (notificationId) => {
    // Assuming you have an API endpoint to accept a friend request
    axios
      .put(`/api/friend/${notificationId}/accept`)
      .then((response) => {
        // Handle success, e.g., remove the notification from the list
        // and update your UI to reflect the friend request acceptance
        const updatedNotifications = notifications.filter(
          (notification) => notification.id !== notificationId
        );
        setNotifications(updatedNotifications); // Set the updated notifications
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error accepting friend request:", error);
      });
  };

  const handleReject = (notificationId) => {
    // Assuming you have an API endpoint to reject a friend request
    axios
      .delete(`/api/friend/${notificationId}`)
      .then((response) => {
        // Handle success, e.g., remove the notification from the list
        // and update your UI to reflect the friend request rejection
        const updatedNotifications = notifications.filter(
          (notification) => notification.id !== notificationId
        );
        setNotifications(updatedNotifications); // Set the updated notifications
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error rejecting friend request:", error);
      });
  };

  useEffect(() => {
    if (showResults && searchResults.length > 0) {
      setShowResults(false);
    }
  }, [showResults, searchResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      // Use the to prop of the Link component to navigate with route parameters
      navigate(`/search?anime=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>{user ? `Welcome, ${user.userName}!` : "Kyle's Capstone"}</b>
          </Link>
        </li>
        {user && (
          <>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>{" "}
              {/* Add this line for Friends */}
            </li>

            <li>
              <input
                type="text"
                placeholder="Search for anime..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </li>
          </>
        )}

        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
      {/* Pass notifications and handling functions to the Notifications component */}
    </div>
  );
};

export default Navbar;
