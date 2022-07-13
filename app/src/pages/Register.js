import {useState, useEffect} from "react";
import authApi from './../resources/auth';

export default function () {

    const [user, setUser] = useState({
        username: '',
        fullname: '',
        email: '',
        password: ''
    })

    function onRegister (e) {
        e.preventDefault();
        // console.log(user)
        authApi.register(user)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div>
            <h1>Register</h1>
            <form action="">
                <div className="form-field">
                    <label htmlFor="first_name">Username: </label>
                    <input type="text" id="first_name"
                           value={user.username}
                           onChange={(e) => {setUser({...user, username: e.target.value})}}
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="last_name">Fullname: </label>
                    <input type="text" id="last_name"
                           value={user.fullname}
                           onChange={(e) => {setUser({...user, fullname: e.target.value})}}
                    />
                </div>
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
                <button onClick={onRegister}>Login</button>
            </form>
        </div>
    )
}