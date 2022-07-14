import {Routes, Route} from 'react-router-dom'

import { ProtectedLayout } from "./layouts/ProtectedLayout";
import { LoginLayout } from "./layouts/LoginLayout";

import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

export default function App() {
    return (
        <div>
            <Routes>
                <Route element={<LoginLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>

                <Route path="/" element={<ProtectedLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}