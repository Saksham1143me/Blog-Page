import { useLocation, useNavigate } from "react-router-dom"
import Header from "../components/header"
import Blogs from "../components/blogs"
import Paginations from "../components/paginations"

function CategoryPage () {
    const Navigate=useNavigate()
    const location =useLocation()
    const category=location.pathname.split("/").at(-1)
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-1 items-center">
      <Header>
      </Header>
        <div className="w-11/12 max-w-[550px] mt-[50px] py-3 flex flex-col gap-7 ">
            <button className="border  border-gray-700 p-1 rounded-lg w-[70px]" onClick={()=>Navigate(-1)}>Back</button>
            <h2 className="font-bold text-3xl">Blogs on <span>{category}</span></h2>
        </div>
      <Blogs></Blogs>
      <Paginations></Paginations>
    </div>
  )
}
export default CategoryPage