import React from 'react'
import { Link } from 'react-router-dom'
import "./left_sidebar.css"

function left_sidebar() {
    return (
        <div className="loginText">
            <Link to="/login">Login</Link>
        </div>
    )
}

export default left_sidebar
