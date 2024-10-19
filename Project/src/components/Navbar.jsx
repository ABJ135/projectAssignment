import React from 'react'
import { Link } from 'react-router-dom'
import { FaBook } from 'react-icons/fa'

function Navbar() {
  return (
    <div>
        <div className='w-auto bg-gray-800 top-0 p-3 h-16 flex justify-between items-center px-10'>
            <div className='flex text-white '>
                <Link to="/Home" className='p-auto text-2xl me-1'><FaBook /></Link>
                <Link to="/Home" className='p-auto text-xl' ><span>My books</span></Link>
            </div>
            <div className='text-white'>
                <Link className='mx-4 ' to="/Home">Home</Link>
                <Link className='mx-4 ' to="/BookTable" >Book Table</Link>
                <Link className='mx-4 ' to="/AddBook">Add Books</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
