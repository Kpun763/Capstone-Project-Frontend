import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications, onAccept, onReject }) => {
  return (
    <div className="notifications">
      <h2>Friend Requests</h2>
      <ul>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onAccept={onAccept}
            onReject={onReject}
          />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;