import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth";
import Header from "../components/Header";

export const ProtectedLayout = () => {
    const {user} = useAuth()
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Header username={user.username} />
            {outlet}
        </div>
    );
};