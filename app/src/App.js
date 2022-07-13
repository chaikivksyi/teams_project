import {Route, Routes, Navigate, Link} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
            <Route path="/" exact element={<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
