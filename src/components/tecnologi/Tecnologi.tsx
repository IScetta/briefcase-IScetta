import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiTailwindcss, SiWebpack } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Tecnologi = ()=>{
    return(
        <div>
            <h2 className=" flex justify-center sm:justify-start items-center text-[35px] border-b-4 border-offRed">
          {" "}
          <div className="text-offRed pr-2">&lt;</div>Tecnologias
          <div className="text-offRed pl-2">&gt;</div>
        </h2>
        <div className="flex flex-col ">
            
            <div className=" mt-[40px] w-[100%] ">
              <h2 className=" text-[25px] flex justify-center sm:justify-start">Frontend</h2>
              <div className=" mb-6 sm:mb-20 p-5 flex flex-wrap justify-between bg-blueDark border-4 border-white rounded-xl">
              <RiNextjsFill className="text-offRed text-7xl m-3 hover:text-white hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaReact className="text-offRed text-7xl m-3 hover:text-blue-400 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaCss3Alt className="text-offRed text-7xl m-3 hover:text-blue-700 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaHtml5 className="text-offRed text-7xl m-3 hover:text-red-600 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaJsSquare className="text-offRed text-7xl m-3 hover:text-yellow-400 hover:transform hover:scale-125 ease-linear duration-200"/>
              <BiLogoTypescript className="text-offRed text-7xl m-3 hover:text-blue-600 hover:transform hover:scale-125 ease-linear duration-200"/>
              <SiTailwindcss className="text-offRed text-7xl m-3 hover:text-blue-400 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaBootstrap className="text-offRed text-7xl m-3 hover:text-purple-600 hover:transform hover:scale-125 ease-linear duration-200"/>
              </div>
            </div>

            <div className=" w-[100%]">
              <h2 className=" text-[25px] flex justify-center sm:justify-start ">Backend</h2>
              <div className=" p-5 flex flex-wrap justify-between bg-blueDark border-4 border-white rounded-xl">
              <FaJsSquare className="text-offRed text-7xl m-3 hover:text-yellow-400 hover:transform hover:scale-125 ease-linear duration-200"/>
              <BiLogoTypescript className="text-offRed text-7xl m-3 hover:text-blue-600 hover:transform hover:scale-125 ease-linear duration-200"/>
              <BiLogoPostgresql className="text-offRed text-7xl m-3 hover:text-blue-400 hover:transform hover:scale-125 ease-linear duration-200"/>
              <SiMongodb className="text-offRed text-7xl m-3 hover:text-green-500 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaNodeJs className="text-offRed text-7xl m-3 hover:text-green-600 hover:transform hover:scale-125 ease-linear duration-200"/>
              <SiExpress className="text-offRed text-7xl m-3 hover:text-white hover:transform hover:scale-125 ease-linear duration-300"/>
              </div>
            </div>

          </div>
        </div>
    )
}

export default Tecnologi;