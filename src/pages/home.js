import Blogs from "../components/blogs"
import Header from "../components/header"
import Paginations from "../components/paginations"

function Home () {
  return (
      <div className="App min-h-screen w-full flex flex-col gap-y-1 items-center">
      <Header></Header>
      <div className="mt-[50px]"></div>
      <Blogs></Blogs>
      <Paginations></Paginations>
    </div>
  )
}
export default Home