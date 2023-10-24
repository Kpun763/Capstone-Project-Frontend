import React, { useEffect, useState } from "react";
import axios from "axios";
import NotificationItem from "../NotificationItem/NotificationItem";

const FriendRequests = () => {
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    // Fetch friend requests from the backend when the component mounts
    axios.get("/api/friend/requests").then((response) => {
      setFriendRequests(response.data);
    });
  }, []);

  const acceptFriendRequest = (requestId) => {
    // Send a request to accept the friend request to the backend
    axios.put(`/api/friend/requests/${requestId}/accept`).then((response) => {
      // Remove the request from the UI and update the state
      setFriendRequests((requests) =>
        requests.filter((request) => request.id !== requestId)
      );
    });
  };

  const declineFriendRequest = (requestId) => {
    // Send a request to decline the friend request to the backend
    axios.delete(`/api/friend/requests/${requestId}`).then((response) => {
      // Remove the request from the UI and update the state
      setFriendRequests((requests) =>
        requests.filter((request) => request.id !== requestId)
      );
    });
  };

  return (
    <div>
      <h2>Friend Requests</h2>
      {friendRequests.length > 0 ? (
        <ul>
          {friendRequests.map((request) => (
            <FriendRequestItem
              key={request.id}
              request={request}
              onAccept={acceptFriendRequest}
              onDecline={declineFriendRequest}
            />
          ))}
        </ul>
      ) : (
        <p>No friend requests at the moment.</p>
      )}
    </div>
  );
};

export default FriendRequests;