import AboudMe from "@/components/aboud/aboud-me";
import ContactIcons from "@/components/aboud/contact-icons";
import BriefcaseComponent from "@/components/briefcase/briefcase-component";
import HeaderComponent from "@/components/header/header-component";
import Image from "next/image";
import { IoCodeSlashSharp } from "react-icons/io5";


export default function Home() {
  return (
    <main className="">
      <div id="INICIO" className="">
        <HeaderComponent />

          <section className="flex flex-col h-screen ">
          <div className="">
            <Image
              className=" absolute w-full h-full darck:opacity-10 opacity-20"
              src="/PuenteColganteEdit.png"
              alt="Bg"
              width={1600}
              height={900}
            />
          </div>
          <div className=" flex flex-row justify-items-start items-center z-10 mt-[10%] animate-fade-up animate-once animate-duration-[1100ms]">
            <div className="ml-32 w-[50%]">
              <Image
                className=" rounded-full w-[20%] "
                src="/Img-Perfil.jpg"
                alt="perfil"
                width={719}
                height={720}
              />
              <h1 className=" flex flex-row text-[70px]  ">
                <div className=" text-offRed ">I </div>saías{" "}
                <div className=" text-offRed ml-5">S</div>cetta
              </h1>
              <h2 className=" flex items-center text-[35px]">
                Programador Web FullStack{" "}
                <IoCodeSlashSharp className="text-offRed mx-2" />
              </h2>
              <h3 className=" text-[20px] ">
                Mi objetivo es seguir creciendo profesionalmente y aportar
                soluciones innovadoras en cada proyecto que emprendo.
              </h3>
              <div className="animate-fade-up animate-once animate-duration-[1300ms]">
              <ContactIcons />
              </div>
            </div>
          </div>
        </section>

        
        <section id="SOBRE MI" className="mx-32 my-72 py-24">
          <AboudMe />
        </section>

        <section id="PORTFOLIO" className="mx-32 mt-72 py-24">
          <div className="">
            <BriefcaseComponent />
          </div>
        </section>

      </div>
    </main>
  );
}
