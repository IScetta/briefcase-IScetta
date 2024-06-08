import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";


const ContactIcons = ()=>{
    return (
        <div className="flex flex-row my-6">
            <Link href={""}><FaGithub className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-300"/></Link>
            <Link href={""}><FaLinkedin className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-300"/></Link>
            <Link href={""}><FaTwitterSquare className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-300"/></Link>
            <Link href={""}><IoMailOpenOutline className="text-offRed text-5xl mx-3 hover:transform hover:scale-125 ease-linear duration-300"/></Link>
        </div>
    )
}

export default ContactIcons;