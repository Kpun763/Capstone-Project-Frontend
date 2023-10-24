import React from 'react';

const NotificationItem = ({ notification, onAccept, onReject }) => {
  return (
    <li>
      <div className="notification-content">
        <span>{notification.text}</span>
        <div className="notification-actions">
          <button onClick={() => onAccept(notification.id)}>Accept</button>
          <button onClick={() => onReject(notification.id)}>Reject</button>
        </div>
      </div>
    </li>
  );
};

export default NotificationItem;