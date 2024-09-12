import Image from 'next/image';
import React from 'react';


export default function BriefcaseModalImg({ isOpen, onClose, image}:{isOpen: boolean,onClose: () => void, image: string}){
  if (!isOpen) return null;

  return (
    <button onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-40">
      <div className="bg-grayDark  shadow-lg w-[720px] h-[400px] mx-4 z-50">
        <div className="">
          <Image className='rounded-xl' alt='' src={image} width={2000} height={2000}/>
        </div>
        <div className="flex justify-end  p-2">
        </div>
      </div>
    </button>
  );
};

