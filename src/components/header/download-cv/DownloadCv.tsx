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
    <button onClick={handleDownload} className="flex items-center p-2 text-[12px] border-4 border-white rounded-md hover:border-offRed">
      CV
    </button>
  );
};

export default DownloadCv;
