
"use client"

import { Canvas } from "@react-three/fiber";
import Bedroom3D from "../bedroom-3d/Bedroom3D";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";



const AboudMe = () => {
  return (
    <div className="  flex flex-row w-full h-[70vh]">
      <div className=" w-[100%] sm:w-[50%] sm:pr-10 ">
        <h2 className=" flex justify-center sm:justify-start items-center text-[35px] border-b-4 border-offRed">
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


      </div>

      <div className=" hidden sm:block w-[50%] h-auto ">
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
