import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AddBook() {
  const [book, setBook] = useState(JSON.parse(localStorage.getItem("books")) || [])
  const [object, setObject] = useState({});
  const navigate = useNavigate();

  const formValidated = () => {
    const {title, author, genre, year}=object;

    if (!title ||!author ||!genre ||!year) {
      alert("Please fill all the fields");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidated()){
      const newBooks = [...book, object];
      setBook(newBooks);
      localStorage.setItem("books", JSON.stringify(newBooks));
      // setObject({});
      navigate("/BookTable");
      console.log(book)
      // e.target.reset();
    }
  };
  const cancel = (e)=>{
    navigate("/BookTable");
    e.target.reset();
  }

  const handleChange = (e) => {
    setObject({ ...object, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className='container mx-auto p-6'>
      <h2 className="text-2xl font-bold mb-4">Book Information</h2>

      <form className='bg-white shadow-md rounded-lg p-6' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">Title</label>
          <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="title"  value={object.title} placeholder="Title" onChange={handleChange} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="author">Author</label>
          <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="author"  value={object.author} placeholder="Author" onChange={handleChange} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="genre">Genre</label>
          <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="genre"  value={object.genre} placeholder="Genre" onChange={handleChange} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="year">Year</label>
          <input type="number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name="year"  value={object.year} placeholder="Year" onChange={handleChange} />
        </div >
        <div className='flex items-center justify-center'>
        <button className='border rounded-lg p-3 m-2 bg-green-500' type="submit">Add Book</button>
        <button className='border rounded-lg p-3 m-2 bg-red-500' onClick={cancel}>Cancel</button>
        </div>
      </form>
      </div>
    </div>    
  )
}

export default AddBook
