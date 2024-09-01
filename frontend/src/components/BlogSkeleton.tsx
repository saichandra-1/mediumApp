

    export  function BlogSkeleton(){
        return(
            <div className="animate-pulse" role="status">
                <div className="bg-white  cursor-pointer py-10" >
                <div className=" p-2 flex flex-col gap-7">
                    <div className="flex items-center gap-2">
                    <Cricle/>
                    <div className=" flex flex-col gap-2">
                    <div className="h-2 w-72 bg-gray-300 rounded-sm"></div>
                    <div className="h-2 w-56 bg-gray-300 rounded-sm  "></div>
                    </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <div className="h-3  bg-gray-300 rounded-sm "></div>
                        <div className="h-3  bg-gray-300 rounded-sm "></div>
                        <div className="h-3 w-4/5 bg-gray-300 rounded-sm "></div>   
                    </div>

                </div>
            </div>
            <span className="sr-only">Loading...</span>
            </div>
        )
    } 

   export function Cricle(){
        return <div className="p-6 h-4 w-3  bg-gray-300 rounded-full">
            
        </div>
    }