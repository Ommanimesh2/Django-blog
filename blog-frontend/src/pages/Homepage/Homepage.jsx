import React, { useEffect, useState } from 'react'
import Blog from '../../components/Blog/Blog'
import BlogPost from '../../components/BlogPost/BlogPost'
import './homepage.css'
const Homepage = () => {
const [blog,setBlogs]=useState([])
  const fetchAllBlogs=async () => {
    const response = await fetch('http://127.0.0.1:8000/blogs/');
    const data= await response.json();
    console.log(data);
    setBlogs(data)

  }
  useEffect(()=>{
    fetchAllBlogs();
  },[])
  return (
    <>
    <BlogPost/>
    {blog ? 
    <div className="blog">
    {blog.map((e)=>{
      return (
        <Blog title={e.title} body={e.body} author={e.author}/>
      )
    })}
    </div> : <div>Loading</div> }
    </>
  )
}

export default Homepage
