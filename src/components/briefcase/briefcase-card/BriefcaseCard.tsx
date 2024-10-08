import { IProyect } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

const BriefcaseCard = ({
  content,
  handleClick,
}: {
  content: IProyect;
  handleClick: (data: IProyect) => void;
}) => {
  return (
    <div className="relative flex  flex-1 hover:flex-[3] m-2 rounded-xl  border-4 border-white bg-transparent h-full transition-all duration-500 ease-out">
      <div className="absolute inset-0 flex items-center rounded-xl bg-black justify-center transition-opacity duration-200 ease-in-out opacity-100 hover:hidden">
        <Image
          className="object-cover w-full h-full rounded-xl"
          src={content.image}
          alt="pt"
          width={600}
          height={300}
        />
      </div>
      <div className="absolute p-6 inset-0 flex flex-col items-center rounded-xl bg-black bg-opacity-70 transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100">
        <h2 className="text-[24px] border-b-4 border-white">{content.title}</h2>
        <h3 className="">{content.description.slice(0,150)} ...</h3>
        {/* <h3 className="text-[24px]">...</h3> */}
        <div className=" flex flex-col justify-center items-center sm:flex-row sm:justify-end sm:items-end w-full h-full p-2">
            <button
            onClick={() => handleClick(content)}
            className=" text-black bg-white text-[17px] m-2 p-1 rounded-md hover:scale-110 duration-200 ease-in-out hover:bg-offRed cursor-pointer"
          >
            Mas Informacion
          </button>
          
          <div className=" flex flex-wrap">
            {content.link && (
            <Link href={content?.link!} className=" flex flex-row justify-center items-center text-black bg-white text-[25px] m-2 p-1 px-1 rounded-md hover:scale-125 duration-200 ease-in-out hover:bg-offRed cursor-pointer">
              <IoLink  />
            </Link>
          )}
          <Link href={content?.link_github!} className="text-black bg-white text-[25px] m-2 p-1 rounded-md hover:scale-125 duration-200 ease-in-out hover:bg-offRed cursor-pointer">
            <FaGithub  />
          </Link>
          
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default BriefcaseCard;
