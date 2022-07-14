import {Link, Navigate} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function (props) {

    const { logout } = useAuth();
    const user = props.username

    function onLogout() {
        localStorage.setItem('user', null)
        logout()
    }

    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/profile">Profile</Link>
                {/*<Link to="/login">Login</Link>*/}
                {/*<Link to="/register">Register</Link>*/}
            </nav>
            {user ? (
               <div>
                   <span>{user}</span>
                   <button onClick={onLogout}>Logout</button>
               </div>
            ) : ''}
        </header>
    )
}