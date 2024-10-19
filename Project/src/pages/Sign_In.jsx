import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sign_In() {
  const navigate = useNavigate();
  const users = (JSON.parse(localStorage.getItem("users")) || [])
  console.log(users)
  const [user, setUser] = useState({});

  const Validateuser = () => {
    const userFound = users.find(u => u.email === user.email && u.password === user.password);

    if (!userFound) {
      alert(' Please check your credentials.');
      return false;
    }
    return true;
  }
  const handleChange = (e) => {
    const obj = {
      ...user,
      [e.target.name]: e.target.value
    }
    setUser(obj);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validateuser()) {
      navigate('/BookTable')
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-sm'>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
            <input type="email" name="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200' placeholder="Enter your email" required id="" value={user.name} onChange={handleChange} />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
            <input type="password" name="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200' placeholder="Enter your password" required id="" value={user.password} onChange={handleChange} />
          </div>

          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Log In</button>
          </div>
        </form>
        <p className='mt-4 text-center text-gray-600 text-sm'>Don't have an account? <a className='text-blue-500 hover:text-blue-700' href="/Sign_up">Sign Up</a></p>
      </div>
    </div>
  )
}

export default Sign_In
