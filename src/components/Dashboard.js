import React from 'react'
import useAuth from '../AuthProvider/useAuth';
function Dashboard() {
    const { Token } = useAuth()
    return (
        <>
            <div>Dashboard (Protected)</div>

            <p style={{ width: "400px", wordBreak: "break-all", margin: "0 auto" }}>{Token}</p>
        </>
    );
}

export default Dashboard