import { IProyect } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const BriefcaseCard = ({
  content,
  handleClick,
}: {
  content: IProyect;
  handleClick: (data: IProyect) => void;
}) => {
  return (
    <div className="relative flex flex-1 hover:flex-[3] m-2 rounded-xl border-4 border-white bg-transparent h-full transition-all duration-500 ease-out">
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out opacity-100 hover:hidden">
        <Image
          className="object-cover w-full h-full rounded-xl"
          src={content.image}
          alt="pt"
          width={600}
          height={300}
        />
      </div>
      <div className="absolute p-6 inset-0 flex flex-col items-center rounded-xl  bg-black bg-opacity-70 transition-opacity duration-200 ease-in-out opacity-0 hover:opacity-100">
        <h2 className="text-[24px] ">{content.title}</h2>
        <h3 className="line-clamp-6">{content.description}</h3>
        <h3 className="text-[22px]">...</h3>
        <div className=" flex flex-row justify-end items-end w-full h-full">
          <button
            onClick={() => handleClick(content)}
            className=" text-black bg-white text-[17px] m-2 p-1 rounded-md hover:scale-110 duration-200 ease-in-out hover:bg-offRed cursor-pointer"
          >
            Mas Informacion
          </button>
          {content.link && (
            <Link href={content?.link!}>
              <FaExternalLinkAlt className="text-black bg-white text-[30px] m-2 p-1 px-1 rounded-md hover:scale-125 duration-200 ease-in-out hover:bg-offRed cursor-pointer" />
            </Link>
          )}
          <Link href={content?.link_github!}>
            <FaGithub className="text-black bg-white text-[30px] m-2 p-1 rounded-md hover:scale-125 duration-200 ease-in-out hover:bg-offRed cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BriefcaseCard;
