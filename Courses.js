import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
      <h1>You are in the Courses Pages!</h1>
      <h3>URL : localhost :3000/courses</h3>

      <div>
        <Link to='/courses/search'> Search</Link>
        <Link to="/courses/list"> Link</Link>
      </div>

      <h3 >
        hello this is the content :</h3>
      <Outlet />
    </div>
  )
}

export default Courses