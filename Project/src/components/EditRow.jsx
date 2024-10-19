import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditRow() {
    const books = JSON.parse(localStorage.getItem('books')) || []
    const location = useLocation();
    const navigate = useNavigate();
    const { index } = location.state;

    const obj = books[index];
    const [object, setObject] = useState(obj)
    // console.log(obj)

    const handleChange = (e) => {

        const obje = {
            ...object,
            [e.target.name]: e.target.value
        }
        setObject(obje)

    }

    const update = () => {
        books.splice(index, 1, object);
        localStorage.setItem('books', JSON.stringify(books))
        navigate('/BookTable')
    }
    const Cancel = () => {
        navigate('/BookTable')
    }


    return (
        <div>
            <div className='container mx-auto p-6'>
                <h2 className="text-2xl font-bold mb-4">Edit Book Information</h2>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">Title</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="title" value={object.title || ""} id="" onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="author">Author</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="author" value={object.author || ""} id="" onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="genre">Genre</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="genre" value={object.genre || ""} id="" onChange={handleChange} />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="year">Year</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="year" value={object.year || ""} id="" onChange={handleChange} />
                </div>
                <div className='flex items-center justify-center'>
                <button className='border rounded-lg p-3 m-2 bg-green-500' onClick={update}>Update</button>
                <button className='border rounded-lg p-3 m-2 bg-red-500' onClick={Cancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default EditRow
