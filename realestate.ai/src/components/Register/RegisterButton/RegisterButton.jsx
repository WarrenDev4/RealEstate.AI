import React from 'react';
import { Link } from 'react-router-dom';
import "./RegisterButton.css"

const RegisterButton = () => {
    return (
        <Link to="/register">
            <button className='register-button'>Register Here</button>
        </Link>
    )
}

export default RegisterButton