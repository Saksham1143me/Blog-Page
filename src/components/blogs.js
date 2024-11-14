import { useContext } from "react"
import { AppContext } from "../context/appcontext"
import Spinner from "./spinner"
import BlogDetails from "./blogDetails"
// import Card from "./Card"
function Blogs () {
    const {loading,posts}=useContext(AppContext)
  return (
    <div className="w-11/12 max-w-[550px]  py-3 flex flex-col gap-7 mb-[50px]">
     { loading?(<Spinner></Spinner>):
     posts.length===0?(<div>No Post Found</div>):(
        posts.map((post)=>(
        <BlogDetails key={post.id} post={post}></BlogDetails>
     )))}
    </div>
  )
}
export default Blogs