import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = React.createContext();
function Index({ children }) {
    const location = useLocation();

    const Navigate = useNavigate();
    const [Token, setToken] = useState('');

    function Signin() {
        fetch('http://localhost:5000/api/v1/sendToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'munsif',
                password: 'admin'
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    setToken(data.token);
                    localStorage.setItem('mern_authentication_token', data.token);

                    //this is to redirect to the page that was requested before login
                    const origin = location.state?.from?.pathname || '/dashboard';
                    Navigate(origin);
                } else {
                    alert('Network Error !! Soory we are unable to get you a signin token');
                }
            }
            );

    }

    function Logout() {
        setToken('');
        localStorage.removeItem('mern_authentication_token');
        Navigate('/');
    }
    return (
        <AuthContext.Provider value={{ Token, Signin, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Index;
export {
    AuthContext,
};