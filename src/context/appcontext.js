import {createContext, useState} from 'react'
//context creation
import { baseUrl } from '../baseUrl'
import { useNavigate } from 'react-router-dom'
export  const  AppContext=createContext()

//context provider
export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])
    const [page,setPage]=useState(1)
    const [totalPages,setTotalPages]=useState(null)

    const Navigate=useNavigate()
// data fetch and fill:
async function fetchPosts(page=1,tag=null,category){
setLoading(true)
    let url=`${baseUrl}?page=${page}`
    if(tag){
        url+=`&tag=${tag}`
    }
    if(category){
        url+=`&category=${category}`
    }
  try {
    console.log(url)
    const result=await fetch(url)
    const data=await result.json()
    console.log(data)
    setPage(data.page)
    setPosts(data.posts)
    setTotalPages(data.totalPages)
} catch (err) {
    console.log(err)
    console.log("error in fetching data")
    setPage(1)
    setPosts([])
    setTotalPages(null)
}
setLoading(false)
}
function handlePageChange(page){
    setPage(page)
Navigate({search:`?page=${page}`})
}

    const value={
        posts,setPosts,loading,
        setLoading,page,setPage,
        totalPages,setTotalPages,
        fetchPosts,handlePageChange
    }
    //context consumer
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}