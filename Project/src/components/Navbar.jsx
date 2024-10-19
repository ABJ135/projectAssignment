import React from 'react'
import { Link } from 'react-router-dom'
import { FaBook } from 'react-icons/fa'

function Navbar() {
  return (
    <div>
        <div className='w-auto bg-gray-800 top-0 p-3 h-16 flex justify-center'>
            <div>
                <a href="./Home"><FaBook /></a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
