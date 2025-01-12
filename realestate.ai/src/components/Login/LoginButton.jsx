import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginButton.css"

const LoginButton = () => {
    return (
        <Link to="/login">
            <button className="login-button">Log In</button>
        </Link>
    )
}

export default LoginButton