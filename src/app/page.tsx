import AboudMe from "@/components/aboud/aboud-me";
import ContactIcons from "@/components/aboud/contact-icons";
import HeaderComponent from "@/components/header/header-component";
import Image from "next/image";
import { IoCodeSlashSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <HeaderComponent />

        <section className="flex flex-col h-screen ">
          <div className=" ">
            <Image
              className=" absolute w-full h-full opacity-10"
              src="/PuenteColganteEdit.png"
              alt="Bg"
              width={1600}
              height={900}
            />
          </div>
          <div className=" flex flex-row justify-items-start items-center z-10 mt-[20%] ">
             <div className="ml-60 w-[30%] ">
            <h1 className=" flex flex-row text-[70px] w-fit ">
              <div className=" text-offRed ">I </div>saías{" "}
              <div className=" text-offRed ml-5">S</div>cetta
            </h1>
            <h2 className=" flex items-center text-[35px] w-fit">
              Programador Web FullStack{" "}
              <IoCodeSlashSharp className="text-offRed mx-2" />
            </h2>
            <h3 className=" text-[20px] ">
              Mi objetivo es seguir creciendo profesionalmente y aportar
              soluciones innovadoras en cada proyecto que emprendo.
            </h3>
            <ContactIcons/>
          </div>  
            <Image className=" rounded-full w-[15%] " src="/Img-Perfil.jpg" alt="perfil" width={719} height={720}/>
          </div>
         
        </section>

        {/* <div className="w-screen"></div> */}

        <section className="mx-60 my-96">
          <AboudMe/>
        </section>

        <section className="mx-60 my-96">
          <div className=" h-[400px] border-2 border-white">

          </div>
        </section>

      </div>
    </main>
  );
}
