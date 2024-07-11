// https://sketchfab.com/3d-models/low-poly-room-a6bf7976f3ac401e96907aa5b8a0c1c1
// https://sketchfab.com/3d-models/isometric-bedroom-e5216b41fc4a4fb0a49ce7d4b5795248
// FAF7D5

"use client"

import { Canvas } from "@react-three/fiber";
import Bedroom3D from "../bedroom-3d/Bedroom3D";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiTailwindcss, SiWebpack } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";


const AboudMe = () => {
  return (
    <div className="  flex flex-row w-full h-[70vh]">
      <div className=" w-[50%] pr-10 ">
        <h2 className=" flex items-center text-[35px] border-b-4 border-offRed">
          {" "}
          <div className="text-offRed pr-2">&lt;</div>Sobre Mi
          <div className="text-offRed pl-2">&gt;</div>
        </h2>
        <h3 className=" my-10">
          ¡Buenas! Soy Isaías, un apasionado programador FullStack especializado
          en el desarrollo web Front End. A lo largo de mi carrera, he dominado
          tecnologías como JavaScript, React, Next.js, Tailwind CSS, Express y
          TypeScript, además de trabajar con bases de datos SQL como PosgreSQL y
          NoSQL como MongoDB.
        </h3>
        <h3>
          Estudié Ingeniería en Informática en la Facultad Nacional del Litoral
          hasta el tercer año. Desde pequeño, siempre me ha fascinado la
          tecnología y tengo la intención de continuar mis estudios
          universitarios en el futuro.
        </h3>

          <div className="flex flex-row  mt-10 ">
            
            <div className=" mr-10 w-[50%]">
              <h2 className=" text-[25px] border-b-4 border-offRed">Frontend</h2>
              <div className=" m-2 p-2 flex flex-wrap justify-between ">
              <RiNextjsFill className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaReact className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaCss3Alt className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaHtml5 className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaJsSquare className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <BiLogoTypescript className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <SiTailwindcss className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaBootstrap className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <SiWebpack className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              </div>
            </div>

            <div className=" w-[50%]">
              <h2 className=" text-[25px] border-b-4 border-offRed">Backend</h2>
              <div className="m-2 p-2 flex flex-wrap justify-between ">
              <FaJsSquare className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <BiLogoTypescript className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <BiLogoPostgresql className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <SiMongodb className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <FaNodeJs className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-200"/>
              <SiExpress className="text-offRed text-5xl mx-3 mb-4 hover:transform hover:scale-125 ease-linear duration-300"/>
              </div>
            </div>

          </div>

      </div>

      <div className="w-[50%] h-auto ">
      {/* <Canvas camera={{ zoom: 2.1, position: [-36.958, 32.254, -30.532] }} shadows> */}
      <Canvas camera={{ zoom: 2.1, position: [300, 220, 200] }} shadows>
        <ambientLight intensity={0.2} />
        <pointLight position={[55, 55, -130]} intensity={100000} color={"#729AFF"} decay={2}  castShadow />
        <pointLight position={[-78.454, 15.131, -22.837]}  intensity={100000} decay={3.1} castShadow/>
        <pointLight position={[155, 155, 155]} intensity={20000} castShadow />
        <Suspense fallback={null}>
          <Bedroom3D receiveShadow={true}/>
        </Suspense >
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </div>

    </div>
  );
};

export default AboudMe;
