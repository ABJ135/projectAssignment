import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Sign_up() {
    const [form, setForm] = useState(JSON.parse(localStorage.getItem("users")) ||[]);
    const [object, setObject] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const { email, username, password } = object;
        
        if (!email || !username || !password ) { //helped from gpt
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
        <div>
            <form onSubmit={handleform}>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" className='border border-black' name="username" id="un" value={object.name} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='border border-black' name="email" id="em" value={object.email} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='border border-black' name="password" id="pwd" value={object.password} onChange={handleInput} />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <p>Already have account? <a href="Sign_In">Login</a></p>
        </div>
    )
}

export default Sign_up
