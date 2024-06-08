import NavBar from "../navbar/NavBar"

const HeaderComponent = ()=>{
    return (
        <div className="flex justify-between items-center mx-60">
            <div className=" text-2xl p-2 my-4"></div>
            <NavBar/>
        </div>
    )
}

export default HeaderComponent