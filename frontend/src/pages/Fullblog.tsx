import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { MakeFullblog } from "../components/MakeFullblog";
import { BACKEND_URL } from "../config";
import { BlogSkeleton } from "../components/BlogSkeleton";
import axios from "axios";
import { Blog } from "./Blogs";
import { useParams } from "react-router-dom";


export function Fullblog(){
    const { id } = useParams<{ id: string }>(); 
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | undefined>();


    useEffect(() => {
        if (id) {  // Check if id is defined
          axios
            .get(`${BACKEND_URL}/blog/${id}`, {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            })
            .then((res) => {
              setBlog(res.data.blog);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching blog:", error);
              setLoading(false);
            });
        }
      }, [id]);

      if (loading) {
        return (
          <div className="flex justify-center">
            <div className="w-2/5 max-w-4xl flex flex-col gap-10">
              <BlogSkeleton />
            </div>
          </div>
        );
      }
    
      if (!blog) {
        return (
          <div className="flex justify-center">
            <div className="w-2/5 max-w-4xl flex flex-col gap-10">
              <p>Blog not found.</p>
            </div>
          </div>
        );
      }

    return (
        <div className="w-screen">
        <div>
          <Appbar/>
        </div>
        <div className="flex justify-center">
          <div className="w-3/5 max-w-7xl flex flex-col gap-10">
           <MakeFullblog  name={blog.author.name} title={blog.title} content={blog.content}/>
          </div>
        </div>
      </div>
    )
} 