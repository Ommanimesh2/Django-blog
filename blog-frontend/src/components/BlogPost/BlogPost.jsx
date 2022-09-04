import React from 'react'
import { useState } from 'react'
import './blog-post.css'
const BlogPost = () => {

  const initialState = {
    title: "",
    body: "",
    author: ""
  }
  const [data, setData] = useState(initialState)
  const [showForm,setShowForm] = useState(false)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const createBlog = async (e) => {
   e.preventDefault()
    await fetch("http://127.0.0.1:8000/blogs/", {
      method: "POST",
      body: JSON.stringify(data)
    })
  }
  
  return (
    showForm ?
    <div className="form-container">

      <form className='blog-form'>
        <button onClick={()=>setShowForm(false)}>close</button>
        <input placeholder='Title of the blog' type="text" name='title' onChange={handleChange} />
        <input placeholder='your name' type="text" name='author' onChange={handleChange} />
        <textarea  placeholder='write your blog' type="" name='body' onChange={handleChange} />
        <button type='submit' onClick={createBlog}>Create!</button>
      </form>
    </div>
    : <div className='create-blog-btn' onClick={()=>{setShowForm(true)}}>Create Your Own Blog</div>
  )
}

export default BlogPost
