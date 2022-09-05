import React from 'react'
import blog from '../../assets/blog.gif'
import './loading.css'
const Loading = () => {
  return (
    <div className="loading">
      <img src={blog} alt="nothing"/>
    </div>
  )
}

export default Loading
