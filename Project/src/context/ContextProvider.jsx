import React, { Children } from 'react'
import webContext from './Context'
import { useState } from 'react'

function ContextProvider({ Children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <webContext.Provider value={{
      searchTerm,
      setSearchTerm
    }}>
      {Children}
    </webContext.Provider>
  )
}

export default ContextProvider
