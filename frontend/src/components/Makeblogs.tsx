import { useNavigate } from 'react-router-dom';
import { Cricle } from "./BlogSkeleton";

type Types = {
  name: string;
  title: string;
  content: string;
  id:string;
};

export function Makeblogs({ name, title, content,id }: Types) {
  const navigate = useNavigate();

  return (
    <div className="w-full  border-t-[1px] border-gray-300  py-7">
      <div className="" onClick={()=>navigate(`/blog/${id}`)}>
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-2">
            <Cricle />
            <div className="">{name}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-semibold">{title}</div>
            <div className="text-mg">{content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae et deleniti quae velit perspiciatis, repellat dolores sint accusantium non perferendis, quod inventore porro numquam dolor sunt at repudiandae, neque pariatur!</div>
          </div>
        </div>
      </div>
    </div>
  );
}