import axios from "axios";
import {useEffect, useState} from "react";

export default function () {

    const [user, setUser] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5005/user/taruk').then(res => {
            setUser(res.data.user)
        })
    }, [])

    return (
        <>
            <h1>Profile</h1>
            <div className="page-profile">
                {user ? (
                    <div className="info">
                        <h1>Info</h1>
                        <p>fullname: {user.fullname}</p>
                        <p>email: {user.email}</p>
                    </div>
                ) : null}
                <div className="friends">
                    <h1>friends</h1>
                </div>
                <div className="group">
                    <h1>group</h1>
                </div>
            </div>
        </>
    )
}