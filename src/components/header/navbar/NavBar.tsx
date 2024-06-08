import Link from "next/link"

const title = [
    "INICIO",
    "SOBRE MI",
    "SKILLS",
    "PORTFOLIO",
    "CONTACTO",
]

const NavBar = ()=>{
    return(
        <div className="fixed top-0 right-0 w-full z-50 ">
        <div className=" flex flex-row justify-end p-4 w-screen dark:bg-blueDark bg-white"> 
        <div className=" flex flex-row items-center mr-60">
           {title.map( (item, index)=>{
            return(
                <div className=" mx-2 p-2" key={index}>
                <Link href={`/`} className="hover:border-b-4 border-offRed">{item}</Link>
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