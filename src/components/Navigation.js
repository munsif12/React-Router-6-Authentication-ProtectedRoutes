import React from 'react'
import { NavLink } from 'react-router-dom';
import useAuth from '../AuthProvider/useAuth';
function Navigation() {
    // const { Token, signInAndGetToken: onLogin, handleLogout: onLogout } = useContext(AuthContext);
    const { Token, Signin: onLogin, Logout: onLogout } = useAuth();
    return (
        <>
            <NavLink style={{ padding: "8px" }} to="/">Home</NavLink>
            <NavLink style={{ padding: "8px" }} to="/dashboard">Dashboard</NavLink>
            <NavLink style={{ padding: "8px" }} to="/about">About</NavLink>
            {
                Token ? (
                    <>
                        <NavLink style={{ padding: "8px" }} to="/profile">Profile</NavLink>
                        <button style={{ padding: "8px" }} type="button" onClick={onLogout}>
                            Sign Out
                        </button>
                    </>
                ) :
                    (
                        <button style={{ padding: "8px" }} type="button" onClick={onLogin}>
                            Sign In
                        </button>
                    )
            }
        </>
    )
}

export default Navigation