"use client"

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";


const ContactIcons = ()=>{
    const scrollToSection = () => {
        document.getElementById("CONTACTO")?.scrollIntoView({ behavior: "smooth" });
      };
    return (
        <div className="flex flex-row my-6">
            <Link href={"https://github.com/IScetta"}><FaGithub className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-200"/></Link>
            <Link href={"https://www.linkedin.com/in/isaias-scetta-2aa3232a1/"}><FaLinkedin className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-200"/></Link>
            <Link href={"https://x.com/scettaisaiasok"}><FaTwitterSquare className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-200"/></Link>
            <button onClick={scrollToSection}><IoMailOpenOutline className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-200"/></button>
        </div>
    )
}

export default ContactIcons;