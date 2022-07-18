import axios from "axios";
import {useEffect, useState} from "react";

export default function () {

    const [friends, setFriends] = useState([])

    useEffect(() => {

    }, [])

    const fr =  Array.isArray(friends) ? friends.map((friend => {

        return (
            <div key={friend.username}>
                {friend.username}
            </div>
        )
    })): []

    return (
        <div>{fr}</div>
    )
}