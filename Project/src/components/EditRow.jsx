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
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={object.title || ""} id="" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input type="text" name="author" value={object.author || ""} id="" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" value={object.genre || ""} id="" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input type="text" name="year" value={object.year || ""} id="" onChange={handleChange} />
            </div>
            <button onClick={update}>update</button>
            <button onClick={Cancel}>Cancel</button>
        </div>
    )
}
export default EditRow
