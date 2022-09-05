import React from 'react'
import dataContext from '../../context'
import { useContext } from 'react'
import './right-side-bar.css'
import Loading from '../Loading/Loading'
const RightSideBar = () => {
  const {blogHome,setblogHome,BlogDetail,setBlogDetail}=useContext(dataContext)
 
  return (
    
   BlogDetail.title ?
    <div className="right-side-bar">
      <p className='title-d'>{BlogDetail.title}</p>
      <p className='author-d'> <b>AUTHOR - </b> {BlogDetail.author}</p>
      <p className='body-d'>{BlogDetail.body}</p>
    </div> :<Loading/>
   
  )
}

export default RightSideBar
