import React from 'react'
import { useState } from 'react'

function DeleteRow() {
    const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || [])
    
  return (
    <div>
      
    </div>
  )
}

export default DeleteRow
