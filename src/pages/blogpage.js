import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from "../context/appcontext"
import { baseUrl } from "../baseUrl"
import Header from "../components/header"
import Spinner from "../components/spinner"
import BlogDetails from "../components/blogDetails"
const newbaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";

function BlogPage () {
    const [blog,setblog]=useState(null)
    const [relatedBlogs,setrelatedBlogs]=useState([])
    const location=useLocation()
    const Navigate=useNavigate()
    const {loading,setLoading}=useContext(AppContext)
    const blogId=location.pathname.split("/").at(-1)
    async function fetchRelatedBlogs(){
        setLoading(true)
        let url=`${newbaseUrl}?blogId=${blogId}`
        try{
            const res=await fetch(url)
            const data=await res.json()
            console.log(data)
            setblog(data.blog)
            setrelatedBlogs(data.relatedBlogs)
        }
        catch(err){
            console.log("Error is there in fetching related blogs")
            setblog(null)
            setrelatedBlogs([])
        }
        setLoading(false)
    }
    useEffect(()=>{
    if(blogId){
        fetchRelatedBlogs()
    }
    },[location.pathname])
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-1 items-center">
        <Header></Header>
       <div className="w-11/12 max-w-[550px] mt-[50px] py-3 flex flex-col gap-7 mb-[50px]">
        <button className="border  border-gray-700 p-1 rounded-lg w-[70px]" onClick={()=>Navigate(-1)}>Back</button>
       {loading?(<Spinner></Spinner>):(blog?<div ><BlogDetails post={blog}></BlogDetails>
       <h2 className="mt-[20px] font-bold text-3xl mb-4">Related Blogs</h2>
      { relatedBlogs.map((post)=>{
        return <div key={post.id}><BlogDetails post={post}></BlogDetails></div>
       })}
       </div>:<p>No blog found</p>)}
    </div></div> 
  )
}
export default BlogPage