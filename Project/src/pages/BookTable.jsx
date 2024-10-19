import React from 'react'
import { useState } from 'react'

function BookTable() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || [])
  console.log(books,"fetched books")

  const populateBook = ()=> { 
    return books.map((book, index) => (
      <tr key={index}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
        <td>{book.year}</td>
        <td> <button onClick={()=>delet(index)}>delete</button></td>
      </tr>
    ))
  }
  const delet = (index)=>{
    const updatedBooks = books.filter((_, i) => i !== index); //this line from gpt
    setBooks(updatedBooks); 
    localStorage.setItem("books", JSON.stringify(updatedBooks)); 
  }
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
          {populateBook()}
        </tbody>
      </table>
      <a href="/AddBook">Add</a>
    </div>
  )
}

export default BookTable
