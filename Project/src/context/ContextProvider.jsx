import React, { Children } from 'react'
import webContext from './Context'
import { useState } from 'react'

function ContextProvider() {
  const [title, setTitle] = useState("anmol");
  const [author, setAuthor] = useState("nimra")
  const [genre, setGenre] = useState("fiction");
  const [year, setYear] = useState("2022");
  const [form, setForm] = useState(JSON.parse(localStorage.getItem("users")) || []);
  return (
    <webContext.Provider value={{
      title,
      setTitle,
      author,
      setAuthor,
      genre,
      setGenre,
      year,
      setYear,
      form,
      setForm
    }}>
      {Children}
    </webContext.Provider>
  )
}

export default ContextProvider
