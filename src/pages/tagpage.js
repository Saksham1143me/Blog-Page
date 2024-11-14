import { useLocation, useNavigate } from "react-router-dom"
import Paginations from "../components/paginations"
import Blogs from "../components/blogs"
import Header from "../components/header"

function TagPage () {
    const Navigate=useNavigate()
    const location=useLocation()
    const tag=location.pathname.split("/").at(-1)
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-1 items-center">
      <Header>
      </Header>
        <div className="w-11/12 max-w-[550px] mt-[50px] py-3 flex flex-col gap-7 "><button className="border border-gray-700 p-1 rounded-lg w-[70px]" onClick={()=>Navigate(-1)}>
            Back</button>
        <h2 className=" font-bold text-3xl">Blogs Tagged <span>#{tag}</span></h2>
        </div>
      <Blogs></Blogs>
      <Paginations></Paginations>
    </div>
  )
}
export default TagPage