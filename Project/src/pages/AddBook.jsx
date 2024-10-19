import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
      <div className='container mx-auto p-6'>
      <h2 className="text-2xl font-bold mb-4">Book Information</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" className='border border-black' value={object.title} placeholder="Title" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" className='border border-black' value={object.author} placeholder="Author" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input type="text" name="genre" className='border border-black' value={object.genre} placeholder="Genre" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input type="number" name="year" className='border border-black' value={object.year} placeholder="Year" onChange={handleChange} />
        </div>
        <button type="submit">Add Book</button>
        <button onClick={cancel}>Cancel</button>
      </form>
      </div>
    </div>    
  )
}

export default AddBook
