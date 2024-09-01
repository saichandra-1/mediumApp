import { InputBox } from "./InputBox";
import { Link, } from "react-router-dom";
import { Errors } from "./Errors";
import { Load } from "./Load";



export function Account({handleChange,setload,load,errors,type,accountcreate}:any) {
    

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="flex flex-col gap-4">
                    <div className="px-16">
                        <h1 className="text-3xl font-semibold">Create an account</h1>
                        <h2 className="px-4">
                            {type=="signup"?"Already have an account? ":"Dont have an account? "} 
                            <Link to={type=="signup"?"/signin":"/signup"}
                            className="underline cursor-pointer">{type=="signin"?"Signup":"login"}</Link>
                        </h2>
                    </div>
                   { type=="signup" &&
                    <InputBox  title="UserName" placeholder="Enter your username" name="name" onChange={handleChange} type={"username"} />
                   }
                    <InputBox title="Email" placeholder="xyz@gmail.com" name="email" onChange={handleChange} type={"email"}/>
                    <InputBox title="Password" placeholder="**********" name="password" onChange={handleChange} type={"password"}/>
                    <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        onClick={() => {
                            accountcreate();
                            setload(true);
                          }}
                        >
                    {(!load) && type === "signin" ? "Signin" : "Signup"}
                </button>
                    {load && <Load />}
                    {errors && <Errors />}
                </div>
            </div>
        </div>
    );
}
