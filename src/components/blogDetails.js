import { NavLink } from "react-router-dom"

function BlogDetails ({post}) {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
        <p className="text-s font-bold">{post.title}</p>
        </NavLink>
      <div key={post.id}>
            <p className="text-[14px] ">
                By <span className="italic">{post.author}</span>
                 on <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><span className="underline font-bold">{post.category}</span></NavLink>
            </p>
            <p className="text-[13px]">Posted on <span>{post.date}</span></p>
            <p className="text=[8px] mt-[10px]">{post.content}</p>
            <div className="flex gap-x-3 flex-wrap gap-y-1">
                {post.tags.map((tag,index)=>(
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}><span className="text-blue-600 underline  font-bold text-[13px] leading-6" >
                        {`#${tag}`}
                    </span>
                    </NavLink>
                ))}
            </div>
            </div>
    </div>
  )
}
export default BlogDetails