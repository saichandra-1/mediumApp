import { useEffect, useState } from "react";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";
import { Makeblogs } from "../components/Makeblogs";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
  title: string;
  content: string;
  id: string;
  author: {
    name: string;
  };
}

export function Blogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlog] = useState<Blog[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/blog/bulk`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then((res) => {
      setBlog(res.data.blogs);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <Appbar/>
          <div className="flex justify-center">
            <div className="w-2/5 max-w-4xl flex flex-col gap-10"> 
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </div>
        </div>
      </div>
    );
  }




  return (
    <div className="w-screen">
      <div>
        <Appbar />
      </div>
      <div className="flex justify-center">
        {/* New container to control width */}
        <div className="w-2/5 max-w-4xl flex flex-col gap-10"> 
          {blogs.map((blog) => (
            <Makeblogs
              key={blog.id} 
              name={blog.author.name}
              title={blog.title}
              content={blog.content}
              id={blog.id}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
}