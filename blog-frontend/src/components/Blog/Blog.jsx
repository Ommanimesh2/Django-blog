import React from 'react'
import './blog.css'
const Blog = (props) => {
  const {title,author,body} = props
  return (
    <div className='blog-container'>
      <p className='title'>{title}</p>
      <p className='author'>By-{author}</p>
    </div>
  )
}

export default Blog
