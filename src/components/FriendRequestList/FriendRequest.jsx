import React from 'react';

const FriendRequestsList = ({ friendRequests, onAccept, onReject }) => {
  return (
    <div>
      <h2>Friend Requests</h2>
      <ul>
        {friendRequests.map((request) => (
          <FriendRequestItem
            key={request.id}
            request={request}
            onAccept={() => onAccept(request.id)}
            onReject={() => onReject(request.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendRequestsList;