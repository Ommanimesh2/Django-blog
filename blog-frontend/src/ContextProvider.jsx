import React, { useState } from 'react'
import dataContext from './context'
const ContextProvider = (props) => {
const [blogHome,setblogHome]=useState([])
const [BlogDetail,setBlogDetail] = useState([])



  return (
    <div>
      <dataContext.Provider value={{blogHome,setblogHome,BlogDetail,setBlogDetail}} >
        {props.children}
      </dataContext.Provider>
    </div>
  )
}

export default ContextProvider
