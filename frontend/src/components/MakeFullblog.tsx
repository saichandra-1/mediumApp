import { Cricle } from "./BlogSkeleton";



type Types = {
    name: string;
    title: string;
    content: string;
  };

export function MakeFullblog({ name, title, content }: Types){
    return(
        <div className="grid grid-cols-12 p-3" >
            <div className="grid col-span-9 ">
                <div className="flex flex-col gap-3 pr-3">
                    <div className="text-4xl font-extrabold">
                        {title}
                    </div>
                    <span className="text-lg font-medium text-gray-500 ">Posted on </span>
                    <div>
                        {content}                           
                    </div>
                </div>
            </div>
            <div className="grid col-span-3 ">
                <div className="flex flex-col gap-3">
                    <div className="text-lg font-medium text-gray-600">
                        Author
                    </div>
                    <div className="flex gap-3  ">
                        <div>
                            <Cricle />
                        </div>
                        <div>
                           <span className="text-2xl">
                            {name}
                            </span>
                           <div className="text-gray-500 font-medium">
                                 necessitatibus pariatur accusantium. Eius earum assumenda
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}