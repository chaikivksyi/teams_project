import axios from "axios";
import {useState, useEffect} from "react";
import authApi from "../resources/auth";

export default function () {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    function onLogin (e) {
        e.preventDefault();
        authApi.login(user)
            .then(res => {
                //document.cookie = `cs_token=${res.data.access_token}`
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <div className="form-field">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email"
                           value={user.email}
                           onChange={(e) => {setUser({...user, email: e.target.value})}}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password"
                           value={user.password}
                           onChange={(e) => {setUser({...user, password: e.target.value})}}
                    />
                </div>
                <button onClick={onLogin}>Login</button>
            </form>
        </div>
    )
}