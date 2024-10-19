import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Sign_up() {
    const [form, setForm] = useState(JSON.parse(localStorage.getItem("users")) || []);
    const [object, setObject] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const { email, username, password } = object;

        if (!email || !username || !password) { //helped from gpt
            alert('Please fill in all fields');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
            return false;
        }

        return true;
    }

    const handleInput = (input) => {
        const obj = {
            ...object,
            [input.target.name]: input.target.value
        }
        setObject(obj);
    }

    const handleform = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const updatedForm = [...form, object];
            setForm(updatedForm)
            localStorage.setItem("users", JSON.stringify(updatedForm));

            setObject({
                username: "",
                email: "",
                password: "",
            })

            navigate('/Sign_In');
        }

        event.target.reset();
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-sm'>
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <form onSubmit={handleform}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="username">User Name</label>
                        <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200' name="username" placeholder='Enter your name' value={object.name} onChange={handleInput} />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                        <input type="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200' name="email" placeholder='Enter your Email' value={object.email} onChange={handleInput} />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
                        <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200' name="password" placeholder='Type your password' value={object.password} onChange={handleInput} />
                    </div>


                    <div className='flex items-center justify-between'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Submit</button>
                    </div>


                </form>
                <p className='mt-4 text-center text-gray-600 text-sm'>Already have account? <a className='text-blue-500 hover:text-blue-700' href="Sign_In">Login</a></p>
            </div>
        </div>
    )
}

export default Sign_up
