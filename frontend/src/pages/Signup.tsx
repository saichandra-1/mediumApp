import { Quot } from "../components/Quot"
import { SignupAccount } from "../components/SignupAccount"

export function Signup(){

    return <div>
    <div className="grid  lg:grid-cols-2 grid-cols-1 ">
        <div className="">
            <SignupAccount />
        </div>
        <div className="invisible lg:visible">
            <Quot />
        </div>
    </div>
</div>  
}