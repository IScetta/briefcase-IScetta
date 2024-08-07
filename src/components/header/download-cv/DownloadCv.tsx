// "use client"

import React from 'react';

const DownloadCv = () => {
  const handleDownload = () => {
    const url = 'CV - Scetta Isaias.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV - Scetta Isaias.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="flex w-fit sm:items-center ml-10 mt-4 sm:ml-0 sm:mt-0 p-2 text-[20px] sm:text-[12px] font-bold sm:font-normal border-4 border-white rounded-md hover:border-offRed">
      CV
    </button>
  );
};

export default DownloadCv;
