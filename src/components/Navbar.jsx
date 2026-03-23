import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <div className='bg-amber-300 flex justify-between px-7'>
            <Link to='/'><h1>Home</h1></Link>
            <Link to='/about'> <h1>About</h1></Link>
            <Link to={'/service'}><h1>Service</h1></Link>
        </div>
      
    </div>
  )
}

export default Navbar
