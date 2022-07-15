import {useState} from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import {Link, useNavigate} from 'react-router-dom'

export default function () {

    const { login } = useAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        fullname: '',
        gender: null,
    })

    function onLogin (e) {
        e.preventDefault()

        axios.post('http://localhost:5005/register', user).then(res => {
            navigate("/login", { replace: true });
        })
    }

    return (
        <form action="">
            <span className="form-title">Registration</span>
            <div className="form-field">
                <label htmlFor="username">Username:</label>
                <input type="text"
                       value={user.username}
                       id="username"
                       onInput={(e) => {setUser({...user, username: e.target.value})}}/>
            </div>
            <div className="form-field">
                <label htmlFor="fullname">Fullname:</label>
                <input type="text"
                       value={user.fullname}
                       id="fullname"
                       onInput={(e) => {setUser({...user, fullname: e.target.value})}}/>
            </div>
            <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input type="text"
                       value={user.email}
                       id="email"
                       onInput={(e) => {setUser({...user, email: e.target.value})}}/>
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input type="password" value={user.password} id="password" onInput={(e) => {setUser({...user, password: e.target.value})}}/>
            </div>
            <div className="form-field">
                <label htmlFor="password">Gender:</label>
                <input type="radio" value="male" name={user.gender} id="password" onInput={(e) => {setUser({...user, gender: e.target.value})}}/>
                <input type="radio" value="female" name={user.gender} id="password" onInput={(e) => {setUser({...user, gender: e.target.value})}}/>
            </div>
            <button onClick={onLogin}>Registration</button>
            <Link to="/login">Login</Link>
        </form>
    )
}