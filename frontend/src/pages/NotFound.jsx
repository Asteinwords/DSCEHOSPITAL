import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn purple-btn">Go to Homepage</Link>
    </div>
  )
}

export default NotFound


