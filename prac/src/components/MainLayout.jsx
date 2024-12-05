import React from 'react'
import { Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>Welcome to Home Page
        <nav>
            <ul>
                <li><Link to="/login">Login</Link> </li>
                <li><Link to="/registration">Regestration</Link> </li>
                
            </ul>
        </nav>
    </div>
  )
}