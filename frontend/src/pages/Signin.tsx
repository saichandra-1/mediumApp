import { Quot } from "../components/Quot";
import { SigninAccount } from "../components/SigninAccount";


export function Signin(){


    return <div>
    <div className="grid  lg:grid-cols-2 grid-cols-1 ">
        <div className="">
            <SigninAccount />
        </div>
        <div className="invisible lg:visible">
            <Quot />
        </div>
    </div>
</div>  
}