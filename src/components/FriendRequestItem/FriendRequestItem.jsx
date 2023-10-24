import React from "react";

const FriendRequestItem = ({ request, onAccept, onDecline }) => {
  const { id, userName } = request;

  return (
    <div className="friend-request-item">
      <p>{userName} sent you a friend request</p>
      <button onClick={() => onAccept(id)}>Accept</button>
      <button onClick={() => onDecline(id)}>Decline</button>
    </div>
  );
};

export default FriendRequestItem;