import {Link, Navigate} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {useState} from "react";

export default function (props) {

    const { logout } = useAuth();
    const user = props.username

    const [profileMenu, toggleProfileMenu] = useState(false)

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
                   <div className="profile">
                       <span>{user}</span>
                       <div className="ava" onClick={() => toggleProfileMenu(!profileMenu)}></div>
                       {profileMenu ? (
                           <ul className="profile-menu" >
                               <li>Profile</li>
                               <li onClick={onLogout}>Logout</li>
                           </ul>
                       ) : ''}

                   </div>
               </div>
            ) : ''}
        </header>
    )
}