import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { createpostschema } from "@saichandra1121/common";


// Parent Component
export function Publish() {
  const [blog, setBlog] = useState<createpostschema>({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  async function postRequest() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const response = await axios.post(
        `${BACKEND_URL}/blog/post`,
        {
          title: blog.title,
          content: blog.content,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data) {
        navigate(`/blog/${response.data.id}`);
      }
    } catch (error) {
      console.error(error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  }

  return (
    <div>
      <div>
        {/* Pass setBlog to TitleInput */}
        <TitleInput setBlog={setBlog} />
      </div>
      <div>
        {/* Pass setBlog to BodyInput */}
        <BodyInput setBlog={setBlog} />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-gray-900 bg-gray-300 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
          onClick={postRequest}
        >
          Publish
        </button>
      </div>
    </div>
  );
}

// TitleInput Component
type TitleInputProps = {
  setBlog: React.Dispatch<React.SetStateAction<createpostschema>>;
};

function TitleInput({ setBlog }: TitleInputProps) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-6 w-4/6">
          <label className="block mb-2 text-3xl font-semibold text-gray-900">
            Enter Title here
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border rounded-lg bg-gray-100 text-2xl outline-none"
            onChange={(e) => {
              setBlog((prevBlog:any) => ({
                ...prevBlog,
                title: e.target.value,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

// BodyInput Component
type BodyInputProps = {
  setBlog: React.Dispatch<React.SetStateAction<createpostschema>>;
};

function BodyInput({ setBlog }: BodyInputProps) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-6 w-4/6">
          <label className="block mb-2 text-3xl font-semibold text-gray-900">
            Enter body for notion Doc
          </label>
          <textarea
            className="resize block w-full p-4 text-gray-900 bg-gray-100 text-lg outline-none"
            onChange={(e) =>
              setBlog((prevBlog:any) => ({
                ...prevBlog,
                content: e.target.value,
              }))
            }
          ></textarea>
        </div>
      </div>
    </div>
  );
}
