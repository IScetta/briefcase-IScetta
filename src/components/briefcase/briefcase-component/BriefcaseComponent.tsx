"use client";

import { useState } from "react";
import BriefcaseCard from "../briefcase-card";
import { IProyect } from "@/app/types";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { proyect, proyect2 } from "@/helper/helper.data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import BreifcaseCarousel from "../briefcase-carousel/BreifcaseCarousel";

const BriefcaseComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<IProyect>();

  const proyect_data: IProyect[] = proyect;
  const proyect_data2: IProyect[] = proyect2;

  const handleClick = (content: IProyect) => {
    setContent(content);
    if (isOpen) {
      setIsOpen(false);
      setIsOpen(true);
    } else setIsOpen(!isOpen);
    document.getElementById("CARD")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <h2 className=" flex justify-center sm:justify-start sm:items-center text-[35px] border-b-4 border-offRed">
        {" "}
        <div className="text-offRed pr-2">&lt;</div>Portfolio
        <div className="text-offRed pl-2">&gt;</div>
      </h2>

      <div className="flex flex-col sm:flex-row  w-full h-screen sm:h-[300px] mt-6">
        {proyect_data.map((content, intex) => (
          <BriefcaseCard
            key={intex}
            content={content}
            handleClick={handleClick}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row  w-full h-screen sm:h-[300px] sm:mt-6">
        {proyect_data2.map((content, index) => (
          <BriefcaseCard
            key={index}
            content={content}
            handleClick={handleClick}
          />
        ))}
      </div>

      {isOpen ? (
        <div id="CARD" className=" py-24">
          <div className=" flex flex-col border-4 border-white w-full h-auto  rounded-xl animate-fade-down animate-once animate-duration-[1100ms] ">
            <div className="  flex justify-end ">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  document
                    .getElementById("PORTFOLIO")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <MdClose className=" text-[35px] mx-2 sm:text-[55px] w-full hover:text-offRed " />
              </button>
            </div>

            <h1 className="text-[40px] sm:text-start text-center border-b-4 border-offRed mx-4 sm:mx-10">
              {content?.title}
            </h1>
            <div className=" flex flex-row mx-4 sm:mx-10">
              <div className="flex flex-col h-auto sm:flex-row">
                <div className=" w-full sm:w-[25%] ">
                  <Image
                    className="my-5 mr-5 rounded-2xl "
                    src={content?.image!}
                    alt=""
                    width={300}
                    height={400}
                  />
                </div>
                <div className=" flex flex-col  sm:w-[75%] sm:mt-5 sm:ml-5">
                  <h3>{content?.description}</h3>
                  <div className=" flex flex-row justify-center mr-11 mt-5 mb-5 sm:mb-10">
                    {content?.link && (
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
            </div>
            <BreifcaseCarousel imageList={content?.image_list}/>
          </div>
        </div>
      ) : (
        <div id="CARD"></div>
      )}
    </section>
  );
};

export default BriefcaseComponent;
