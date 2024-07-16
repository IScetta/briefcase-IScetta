"use client"

import Link from "next/link"

const title = [
    "INICIO",
    "SOBRE MI",
    "TECNOLOGIAS",
    "PORTFOLIO",
    "CONTACTO",
]


const NavBar = ()=>{

const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

    return(
        <div className="fixed top-0 right-0 w-full z-50 ">
        <div className=" flex flex-row justify-end p-4 w-screen bg-blueDark "> 
        <div className=" flex flex-row items-center mr-32">
           {title.map( (item, index)=>{
            return(
                <div className=" mx-2 p-2" key={index}>
                <button onClick={() => scrollToSection(item)} className="hover:border-b-4 border-offRed">{item}</button>
                </div>
            )
        })

            }
            <Link href={""} className="flex items-center p-2 border-4 border-white rounded-md hover:border-offRed">CV</Link>
        </div> 
        </div>
        
        </div>
    )
}

export default NavBar