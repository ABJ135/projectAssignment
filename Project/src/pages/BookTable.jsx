import React from 'react'
import { useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import webContext from '../context/Context'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'


function BookTable() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || [])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if(books.length === 0) {
    const initialBooks = [
        {
            title: 'Harper Lee',
            author: 'To Kill a Mockingbird',
            genre: 'Fiction',
            year: 1960
        },
        {
            title: 'Jane Eyre',
            author: 'Pride and Prejudice',
            genre: 'Dystopian',
            year: 1813
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            genre: 'Classic',
            year: 1925
        },{
            title: 'Herman Melville',
            author: 'Moby Dick',
            genre: 'Classic',
            year: 1851
        }
    ]

    setBooks(initialBooks)

    localStorage.setItem("books", JSON.stringify(initialBooks));
  }

}, [books])

  const navigate = useNavigate()

  const populateBook = (data) => {
    return data.map((book, index) => (      
      <tr key={index} className='border-b hover:bg-gray-100'>
        <td className='py-2 px-4 mt-1'>{book.author}</td>
        <td className='py-2 px-4 mt-1'>{book.title}</td>
        <td className='py-2 px-4 mt-1'>{book.genre}</td>
        <td className='py-2 px-4 mt-1'>{book.year}</td>
        <td className='py-2 px-4 mt-1'>
          <button className='px-2' onClick={() => delet(index)}><FaTrash /></button>
          <button className='px-2' onClick={() => edit(index)}><FaEdit /></button>
        </td>
      </tr>
    ))
  }
  const delet = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index); //this line from gpt
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  }
  const edit = (index) => {
    navigate('/EditRow', { state: { index: index } })
  }

  const Search = (e) => {
    navigate('/BookTable');
    setSearchTerm(e.target.value);
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()) || book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className='w-auto bg-gray-200 top-0 p-3 h-16 flex justify-center'>
        <input type="text" className='border border-black w-80 p-5 rounded-xl ' placeholder='Search by title,author or genre ' name="" onChange={Search} />
        <a className='border border-white rounded-xl bg-blue-700 text-white text-xl p-1 px-3 ms-10' href="/AddBook">Add New Book</a>
      </div>
      <div className='flex justify-center m-20' >
        <table className='min-w-full bg-white border border-gray-200'>
          <tbody>
            <tr className='bg-gray-800 text-white border-b'>
              <th className='py-2 px-4 text-left font-semibold'>Title</th>
              <th className='py-2 px-4 text-left font-semibold'>Author</th>
              <th className='py-2 px-4 text-left font-semibold'>Genre</th>
              <th className='py-2 px-4 text-left font-semibold'>Year</th>
              <th className='py-2 px-4 text-left font-semibold'>Action</th>
            </tr>
            {populateBook(filteredBooks)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookTable
