import React, { useEffect, useState } from 'react'
import Blog from '../../components/Blog/Blog'
import { useContext } from 'react'
import dataContext from '../../context'
import BlogPost from '../../components/BlogPost/BlogPost'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import './homepage.css'
import Loading from '../../components/Loading/Loading'
const Homepage = () => {
const {blogHome,setblogHome,BlogDetail,setBlogDetail}=useContext(dataContext)
const [blog,setBlog]=useState([])
  useEffect(()=>{
      const fetchAllBlogs=async () => {
      const response = await fetch('http://127.0.0.1:8000/blogs/');
      const data= await response.json();
      console.log(data);
      setblogHome(data)
      setBlog(data)
    
  
    }
    fetchAllBlogs();
  },[])
  return (
    <>
    <BlogPost/>
    {blogHome ? 
    <div className="contain">
    <div className="blog">
    {blogHome.map((e)=>{
      return (
        <Blog detail={e} id={e.id} title={e.title} body={e.body} author={e.author}/>
      )
    })}
    </div>
    <RightSideBar/>
    </div> : <Loading/> }
    </>
  )
}

export default Homepage
