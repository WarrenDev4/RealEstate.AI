import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginButton.css"

{/* Component for the Login button */}
const LoginButton = () => {
    return (
        <Link to="/login">
            <button className="login-button">Log In</button>
        </Link>
    )
}

export default LoginButton