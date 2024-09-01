import { useState, ChangeEvent } from "react";
import axios from "axios";
import { signupinputschema } from "@saichandra1121/common";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Account } from "./Account";

export function SignupAccount(){
    const navigate=useNavigate();

    const [signupinput, setsignupinput] = useState<signupinputschema>({
        email: "",
        name: "",
        password: "",
    });

    const [errors,seterrors]=useState(false);
    const [load,setload]=useState(false);

    async function signupRequest() {
        try {
            const response = await axios.post(
                `${BACKEND_URL}/user/signup`,
                {
                    email: signupinput.email,
                    name: signupinput.name,
                    password: signupinput.password,
                }
            );
            setload(true);
            const jwt=response.data;
            localStorage.setItem('token',jwt);
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
        setsignupinput((prev:signupinputschema) => ({
            ...prev,
            [name]: value,
        }));
    };

    return(
        <Account load={load} accountcreate={signupRequest} handleChange={handleChange} errors={errors} setload={setload} type={"signup"} />
    )
}