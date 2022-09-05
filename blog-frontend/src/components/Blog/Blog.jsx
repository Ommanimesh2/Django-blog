import React from 'react'
import './blog.css'
import dataContext from '../../context'
import { useContext } from 'react'

const Blog = (props) => {
  const {title,id,author,body,detail} = props
  const {blogHome,setblogHome,BlogDetail,setBlogDetail}=useContext(dataContext)

  const handleDelete=async (id)=>{
  const resp=await fetch(`http://127.0.0.1:8000/blogs/${id}/`,{
    method: 'DELETE'
  });
  }
  const showDetails=()=>{
  setBlogDetail(detail)
  }
  return (
    <div className='blog-container'>
      <p className='title'>{title}</p>
      <p className='author'>By-{author}</p>
      <button onClick={()=>handleDelete(id)}>delete</button>
      <button onClick={()=>showDetails()}>Read</button>
    </div>
  )
}

export default Blog
