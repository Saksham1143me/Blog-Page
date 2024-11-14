import './App.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/appcontext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/home';
import BlogPage from './pages/blogpage';
import TagPage from './pages/tagpage';
import CategoryPage from './pages/categorypage';
function App() {
  const {fetchPosts}=useContext(AppContext)
  const [searchParams,setsearchParams]=useSearchParams()
  const location=useLocation()
  useEffect(()=>{
      const page=searchParams.get("page") ?? 1
      if(location.pathname.includes("tags")){
        const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchPosts(Number(page),tag)
      }
      else if(location.pathname.includes("categories")){
        const category=location.pathname.split("/").at(-1).replaceAll("-"," ")
        fetchPosts(Number(page),null,category)
      }
      else{
        fetchPosts(Number(page));
      }
  },[location.pathname,location.search])
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
        <Route path='/tags/:tag' element={<TagPage/>}></Route>
        <Route path='/categories/:category' element={<CategoryPage/>}></Route>
      </Routes>
  );
}

export default App;
