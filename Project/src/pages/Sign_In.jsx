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
    if(Validateuser()){
      navigate('/BookTable')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className='border border-black' id="" value={user.name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className='border border-black' id="" value={user.password} onChange={handleChange}/>
        </div>
        <button type='submit'>Log In</button>
      </form>
      <p>Don't have an account? <a href="/Sign_up">Sign Up</a></p>
    </div>
  )
}

export default Sign_In
