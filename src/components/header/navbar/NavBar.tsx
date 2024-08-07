"use client";

import { useState } from "react";
import DownloadCv from "../download-cv";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const title = ["INICIO", "SOBRE MI", "TECNOLOGIAS", "PORTFOLIO", "CONTACTO"];

const NavBar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenClose, setIsOpenClose] = useState<boolean>(false);

  return (
    <div className="fixed top-0 right-0 w-full z-50 ">
      <div className=" flex flex-row justify-end p-2 w-screen  bg-blueDark ">
        <div className=" hidden sm:flex sm:flex-row sm:items-center sm:mr-32 ">
          {title.map((item, index) => {
            return (
              <div className=" mx-2 p-2" key={index}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-[12px]  border-b-4 border-blueDark hover:border-offRed"
                >
                  {item}
                </button>
              </div>
            );
          })}
          <DownloadCv/>
        </div>

        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden text-white text-[35px] "
          >
            <GiHamburgerMenu />
          </button>
        )}

        {isOpen ? (
          <div className="flex flex-row">
          <div className="flex flex-row fixed top-0 left-0 bg-[#00183E] w-[70%] h-full animate-fade-right animate-duration-500 animate-ease-linear animate-fill-both ">
            <div className="flex flex-col mt-10 font-bold">
              {title.map((item, index) => {
                return (
                  <div className=" mx-8 p-2" key={index}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-[20px]  border-b-4 border-[#00183E] hover:border-offRed"
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
              <DownloadCv/>
            </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" text-white text-[55px] flex justify-end w-full font-bold"
              >
                <IoIosClose />
              </button>
          </div>
              <button onClick={()=>setIsOpen(!isOpen)} className="flex  fixed top-0 left-[70%] backdrop-blur-[5px] w-[30%] h-full animate-fade-right animate-duration-500 animate-ease-linear animate-fill-both  ">
                
              </button>


          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavBar;
