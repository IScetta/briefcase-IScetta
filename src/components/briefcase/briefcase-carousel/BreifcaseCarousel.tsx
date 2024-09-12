"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useState } from "react";
import BriefcaseModalImg from "../briefcase-modal-img/BriefcaseModalImag";

export default function BreifcaseCarousel({imageList}:{imageList:string[] | undefined}){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string>("");
  
    const openModal = (url: string) => {
      setModalImage(url);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setModalImage("");
    };

  return (
    <div className=" mx-16 mb-10">
        <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
            {imageList?.map((img)=>(
        <SwiperSlide key={img} className="">
            <button onClick={() => openModal(img)} className=" my-10">
                <Image
                  className="flex justify-center items-center w-[200px] h-[100px] rounded-md border-4 border-white hover:scale-105"
                  alt="img"
                  width={2000}
                  height={2000}
                  src={img}
                />
          </button>
        </SwiperSlide>
            ))
            }
      </Swiper>
        </div>
        <BriefcaseModalImg isOpen={isModalOpen} onClose={closeModal} image={modalImage}/>
    </div>
  );
};
