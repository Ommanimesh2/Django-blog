import React, { useState } from 'react'
import dataContext from './context'
const ContextProvider = (props) => {
const [data,setData]=useState('')



  return (
    <div>
      <dataContext.Provider value={{data,setData}} >
        {props.children}
      </dataContext.Provider>
    </div>
  )
}

export default ContextProvider
