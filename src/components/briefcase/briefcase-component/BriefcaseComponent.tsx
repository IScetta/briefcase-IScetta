"use client";

import { useState } from "react";
import BriefcaseCard from "../briefcase-card";
import { IProyect } from "@/app/types";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { proyect, proyect2 } from "@/helper/helper.data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";



const BriefcaseComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<IProyect>()

  const proyect_data:IProyect[] = proyect;
  const proyect_data2:IProyect[] = proyect2;

  const handleClick = (content:IProyect)=>{
    setContent(content);
    if(isOpen){
      setIsOpen(false)
      setIsOpen(true)
    }
    else setIsOpen(!isOpen)
    document.getElementById("CARD")?.scrollIntoView({ behavior: 'smooth' });
}
  return (
    <section>
      <h2 className=" flex items-center text-[35px] border-b-4 border-offRed">
        {" "}
        <div className="text-offRed pr-2">&lt;</div>Portfolio
        <div className="text-offRed pl-2">&gt;</div>
      </h2>

      <div className="flex flex-row  w-full h-[300px] mt-6">
        {proyect_data.map((content, intex) => (
          <BriefcaseCard key={intex} content={content} handleClick={handleClick} />
        ))}
      </div>

      <div className="flex flex-row  w-full h-[300px] mt-6">
        {proyect_data2.map((content, index) => (
            <BriefcaseCard key={index} content={content} handleClick={handleClick} />
        ))}
      </div>

        {isOpen ? 
        <div id="CARD" className=" py-24">
        <div  className=" flex flex-col border-4 border-white w-full h-auto p-10 rounded-xl animate-fade-down animate-once animate-duration-[1100ms] ">
          <div  className="  flex justify-end ">
          <button onClick={()=>setIsOpen(!isOpen)} ><MdClose  className="text-[55px] w-full hover:text-offRed "/></button>
          </div>

          <h1 className="text-[40px] border-b-4 border-offRed">{content?.title}</h1>
          <div className=" flex flex-row">

          <div className=" w-[25%] ">
          <Image className="my-5 mr-5 rounded-2xl" src={content?.image!} alt="" width={300} height={400}/>
          </div>

          <div className=" w-[75%] mt-5 ml-5">
          <h3>{content?.description}</h3>
          <div className=" flex flex-row">
          {content?.link &&
          <Link href={content?.link!}><FaExternalLinkAlt  className="text-black bg-white text-[30px] m-2 p-1 px-1 rounded-md hover:scale-125 duration-200 ease-in-out hover:bg-offRed cursor-pointer"/></Link> 
          }
          <Link href={content?.link_github!} ><FaGithub className="text-black bg-white text-[30px] m-2 p-1 rounded-md hover:scale-125 duration-200 ease-in-out hover:bg-offRed cursor-pointer"/></Link>
          </div>
          
          </div>
          </div>

        </div>
        </div>
          :
          <div id="CARD"></div>
        }


    </section>
  );
};

export default BriefcaseComponent;
