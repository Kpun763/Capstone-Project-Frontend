import React, { useEffect, useState } from "react";
import axios from "axios";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    // Fetch the user's friends and friend requests from the backend
    axios.get("/api/friend").then((response) => {
      setFriends(response.data.friends);
      setFriendRequests(response.data.friendRequests);
    });
  }, []);

  const acceptFriendRequest = (friendId) => {
    // Make an API request to accept the friend request
    axios.put(`/api/friend/${friendId}/accept`).then(() => {
      // After the request is accepted, update the UI accordingly
      // You may want to remove the request from the friendRequests state
    });
  };

  const rejectFriendRequest = (friendId) => {
    // Make an API request to reject the friend request
    axios.delete(`/api/friend/${friendId}`).then(() => {
      // After the request is rejected, update the UI accordingly
      // You may want to remove the request from the friendRequests state
    });
  };

  return (
    <div className="container">
      <h1>Friends</h1>
      <h2>Friend Requests</h2>
      <ul>
        {friendRequests.map((request) => (
          <li key={request.id}>
            {request.requester.userName} sent you a friend request.
            <button onClick={() => acceptFriendRequest(request.id)}>
              Accept
            </button>
            <button onClick={() => rejectFriendRequest(request.id)}>
              Reject
            </button>
          </li>
        ))}
      </ul>

      <h2>Your Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <a href={`/friends/${friend.id}/homepage`}>
              {friend.userName}'s Homepage
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsPage;
