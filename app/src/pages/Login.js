import {useState} from "react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

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

    function checkAuth(e) {
        e.preventDefault()
        const token = localStorage.getItem('user')
        axios.get('http://localhost:5005/protected', {
            headers: {
                Authorization: token
            }
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <div>Login</div>
            <form action="">
                <div>
                    <input type="text" value={user.username} onInput={(e) => {setUser({...user, username: e.target.value})}}/>
                </div>
                <div>
                    <input type="password" value={user.password} onInput={(e) => {setUser({...user, password: e.target.value})}}/>
                </div>
                <button onClick={onLogin}>Login</button>
                <button onClick={checkAuth}>checkAuth</button>
            </form>
        </div>
    )
}