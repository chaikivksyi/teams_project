import {useState} from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import {Link} from 'react-router-dom'

export default function () {

    const { login } = useAuth();

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    function onLogin (e) {
        e.preventDefault()

        axios.post('http://localhost:5005/login', user).then(res => {
            localStorage.setItem('user', res.data.token)
            login(user);
        })
    }

    return (
        <form action="">
            <span className="form-title">Login</span>
            <div className="form-field">
                <label htmlFor="username">Username:</label>
                <input type="text"
                       value={user.username}
                       id="username"
                       onInput={(e) => {setUser({...user, username: e.target.value})}}/>
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input type="password" value={user.password} id="password" onInput={(e) => {setUser({...user, password: e.target.value})}}/>
            </div>
            <button onClick={onLogin}>Login</button>
            <Link to="/register">Registration</Link>
        </form>
    )
}