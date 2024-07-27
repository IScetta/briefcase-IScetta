"use client"

import Link from "next/link";
import { FaGithubSquare, FaHeart, FaLinkedin, FaMapMarkerAlt, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {

    const scrollToSection = (id:string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };
      
  return (
    <section className="bg-blueDark">
      <div className="flex flex-row justify-around items-start px-32  bg-blueDark">
        <h1 className=" flex flex-col text-[40px] mt-20">
          <div className="flex flex-row">
            <div className=" text-offRed ">I </div>saías{" "}
          </div>
          <div className="flex flex-row">
            <div className=" text-offRed ">S</div>cetta
          </div>
        </h1>

        <ul className="mt-20">
          <li className="text-offRed font-bold text-[20px]">Navegación</li>
          <li>
            <button onClick={() => scrollToSection("INICIO")}>
              <h1 className="m-1 border-b-2 hover:border-offRed border-blueDark">Inicio</h1>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("SOBRE MI")}>
              <h1 className="m-1 border-b-2 hover:border-offRed border-blueDark">Sobre mi</h1>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("TECNOLOGIAS")}>
              <h1 className="m-1 border-b-2 hover:border-offRed border-blueDark">Tecnologias</h1>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("PORTFOLIO")}>
              <h1 className="m-1 border-b-2 hover:border-offRed border-blueDark">Portfolio</h1>
            </button>
          </li>
        </ul>

        <ul className="mt-20">
          <li className="text-offRed font-bold text-[20px]">Redes Sociales</li>
          <li>
            <Link href={"https://github.com/IScetta"}>
              <h1 className="flex flex-row m-1 border-b-2 hover:border-offRed border-blueDark"><FaGithubSquare className="m-1"/>GitHub</h1>
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/isaias-scetta-2aa3232a1/"}>
              <h1 className=" flex flex-row m-1 border-b-2 hover:border-offRed border-blueDark"><FaLinkedin className=" m-1"/>Linkedin</h1>
            </Link>
          </li>
          <li>
            <Link href={"https://x.com/scettaisaiasok"}>
              <h1 className=" flex flex-row m-1 border-b-2 hover:border-offRed border-blueDark"><FaTwitterSquare className="m-1"/>Twitter</h1>
            </Link>
          </li>
        </ul>

        <ul className="mt-20">
          <li className="text-offRed font-bold text-[20px]">Contactos</li>
          <li>
            <h3 className=" flex flex-row m-1 border-b-2 border-blueDark"><FaMapMarkerAlt className="m-1"/>Argentina, Entre Rios</h3>
          </li>
          <li>
            <h3 className="flex flex-row m-1 border-b-2 border-blueDark"><IoMdMail className="m-1" />isaisscetta@gmail.com</h3>
          </li>
          <li>
            <h3 className="flex flex-row m-1 border-b-2 border-blueDark"><FaWhatsappSquare className="m-1" />+54 343 505-9995</h3>
          </li>
        </ul>
      </div>

      <div className="border-2 border-offRed my-2 mt-16 px-32 "></div>

      <h3 className="flex flex-row p-4 justify-center text-[15px]">Hecho con <FaHeart className="ml-2 mr-1 text-offRed"/>, © 2024 Scetta Isaias. Todos los derechos reservados.</h3>
    </section>
  );
};

export default Footer;
