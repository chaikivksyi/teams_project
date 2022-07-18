import axios from "axios";
import {useEffect, useState} from "react";

export default function () {

    const [user, setUser] = useState(null)
    const [friends, setAllFriends] = useState([])
    const [loading, setLoading] = useState(true)

    function getUser () {
        axios.get('http://localhost:5005/user/taruk').then(res => {
            setUser(res.data)
            getFriends()
        })
    }

    function getFriends () {
        axios.get('http://localhost:5005/users', ).then(res => {
            setAllFriends(res.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        getUser()
    }, [])



    function addFriend(friend_id) {
        axios.post('http://localhost:5005/users/new_friend', {
            user_id: user._id,
            friend_id
        }).then(() => getUser())
    }

    function removeFriend(friend_id) {
        axios.post('http://localhost:5005/users/remove_friend', {
            user_id: user._id,
            friend_id
        }).then(() => getUser())
    }

    return (
        <div className="page-profile">
            {!loading ? (
               <>
                   <h1>Profile</h1>
                   <div className="info">
                       <h1>Info</h1>
                       <p>fullname: {user.fullname}</p>
                       <p>email: {user.email}</p>
                   </div>
                   <div className="friends-container">
                       <h1>friends</h1>
                       <div className="friends">
                           {friends.map(friend => {
                               if(friend.username !== user.username) {
                                   return (
                                       <div className="friend" key={friend.username}>
                                           <div className="ava"></div>
                                           <span>{friend.fullname}</span>
                                           {user.friends.includes(friend._id) ? (
                                               <button onClick={() => removeFriend(friend._id)}>Remove from friend</button>
                                           ) : <button onClick={() => addFriend(friend._id)}>Add to friend</button>}
                                       </div>
                                   )
                               }
                           })}
                       </div>
                   </div>
                   <div className="group">
                       <h1>group</h1>
                   </div>
               </>
            ) : <div>Loading...</div>}
        </div>
    )
}