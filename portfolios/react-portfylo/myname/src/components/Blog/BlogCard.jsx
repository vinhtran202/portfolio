import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaRightLong } from "react-icons/fa6";

export default function BlogCard({
  imgSrc,
  date,
  title,
  description,
  likes,
  views,
}) {
  return (
    <div className="flex-1 min-w-[calc(33.333%-30px)] text-left text-gray-500 text-lg">
      <div className="w-full h-[250px] rounded-lg mb-5 overflow-hidden flex justify-center items-center">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-5 border-b border-black/10">
        <div className="text-xl text-black/50">
          <p>{date}</p>
        </div>
        <div className="text-2xl mb-5">
          <h3>{title}</h3>
        </div>
        <div className="text-base text-gray-700">
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <CiHeart />
            <span className="text-lg">{likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoEyeOutline />
            <span className="text-lg">{views}</span>
          </div>
        </div>
        <button className="py-2 px-5 text-lg border-none bg-none cursor-pointer">
          <a
            href="#"
            className="flex items-center font-normal no-underline text-lg"
          >
            Read More <FaRightLong className="ml-2" />
          </a>
        </button>
      </div>
    </div>
  );
}
