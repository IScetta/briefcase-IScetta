"use client";

import Link from "next/link";
import { useState } from "react";
import DownloadCv from "../download-cv";

const title = ["INICIO", "SOBRE MI", "TECNOLOGIAS", "PORTFOLIO", "CONTACTO"];

const NavBar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            className="sm:hidden text-white text-[20px] "
          >
            X
          </button>
        )}

        {isOpen ? (
          <div className="flex fixed top-0 bg-blueDark  w-[80%] h-full ">
            <div className="flex flex-col  ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="sm:hidden text-white text-[20px] flex justify-end border-2 border-white "
              >
                X
              </button>
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
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavBar;
