import { useState, ChangeEvent } from "react";
import axios from "axios";
import { signininputschema} from "@saichandra1121/common";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Account } from "./Account";

export function SigninAccount(){
    const navigate=useNavigate();

    const [errors,seterrors]=useState(false);
    const [load,setload]=useState(false);


    const[signininput,setsignininput]=useState<signininputschema>({
        email:"",
        password:""
    })

    async function signinRequest() {
        try {
            const response = await axios.post(
                `${BACKEND_URL}/user/signin`,
                {
                    email:signininput.email,
                    password: signininput.password,
                }
            );
            const jwt=response.data.sigintoken;
            localStorage.setItem('token',"Bearer "+jwt);
            navigate("/blogs")
        } catch (error) {
            setload(false);
            seterrors(true);
            console.error("Signup failed", error);
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        seterrors(false)
        const { name, value } = e.target;
        setsignininput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return(
        <Account load={load} accountcreate={signinRequest} handleChange={handleChange} errors={errors} setload={setload} type={"signin"} />

    )
}