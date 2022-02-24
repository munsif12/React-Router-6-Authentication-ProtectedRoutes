import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../AuthProvider/useAuth';
function Index({ children }) {
    const Location = useLocation();
    const { Token } = useAuth();
    if (!Token) {
        return <Navigate to="/" replace state={{ from: Location }} />
    }

    return children;
}

export default Index