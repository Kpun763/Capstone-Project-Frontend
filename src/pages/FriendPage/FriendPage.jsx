import React, {useEffect, useState} from "react";
import axios from "axios";

const FriendsPage = () => {
    const [friends, setFriends] = useState([]);

    useEffect (() => {
        axios.get("/api/friend").then((response) => {
            setFriends(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h1>Friends</h1>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>
                        <a href={'/friends/${friend.id}/homepage'}>{friend.userName}'s' Homepage</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default FriendsPage;