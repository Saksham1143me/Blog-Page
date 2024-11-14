import { useContext } from "react"
import { AppContext } from "../context/appcontext"

function Paginations () {
    const {totalPages,page,handlePageChange}=useContext(AppContext)
  return (
    <div className="w-full  bg-white flex items-center fixed bottom-0">
      <div className="flex w-full justify-evenly h-[60px] items-center border-2" >
        <div className="flex gap-x-4 ">
        {  page>1 &&
            <button className="border border-gray-700 p-1 rounded-lg w-[70px]" onClick={()=>handlePageChange(page-1)}>Previous</button>
        }
        {
            page<totalPages &&
            <button className="border border-gray-700 p-1 rounded-lg w-[70px]" onClick={()=>handlePageChange(page+1)}>Next</button>
        }
        </div>
        <p className="font-bold text-sm">Page {page} of {totalPages}</p>
      </div>  
    </div>
  )
}
export default Paginations