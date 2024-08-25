import React from 'react';

const SunriceComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white text-white">
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-white text-black">
        <div className="text-xl font-bold mb-4 md:mb-0">
          <img src="/logo.png" alt="Twitter Link" className="px-2 py-2 w-[243px] h-[43px]" />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Two buttons for Telegram and X (Twitter) and one for Buy Now */}
          <a href='https://t.me/sunricetrx' className="bg-black text-white rounded p-2">
            <img src="/telegram.svg" alt="Telegram Link" className="w-[50px] h-[50px] filter invert" />
          </a>
          <a href='https://x.com/trxlaunch' className="bg-black text-white rounded p-2">
            <img src="/X.svg" alt="Twitter Link" className="w-[50px] h-[50px]" />
          </a>
          <button className="bg-red-600 px-4 py-2 md:py-0 rounded text-white text-[24px] md:text-[36px]">Buy Now</button>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="w-full my-4">
        <img src="/main.png" alt="Main Image" className="w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="text-center font-bold text-red-700 my-4 Akaya text-[48px] md:text-[80px] lg:text-[120px] drop-shadow-[0_0_3px_rgba(0,0,0,1)]">
        Sunrice is where the rice is
      </div>

      {/* Info Section */}
      <div className="flex flex-wrap justify-center items-center w-full space-y-8 md:space-y-0 md:space-x-8 text-black py-8">
        <div className="flex flex-col items-center max-w-[150px] md:max-w-[200px] lg:max-w-[300px]">
          <img src="/1.png" alt="Seed" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[176px] lg:h-[176px]" />
          <div className="font-bold text-red-500 text-[20px] md:text-[30px] lg:text-[38px] leading-9">Seed</div>
          <div className="text-center text-[16px] md:text-[24px] lg:text-[36px] leading-9">Launching on SunPump</div>
        </div>
        <div className="flex flex-col items-center max-w-[150px] md:max-w-[200px] lg:max-w-[300px]">
          <img src="/2.png" alt="Seedling" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[176px] lg:h-[176px]" />
          <div className="font-bold text-red-500 text-[20px] md:text-[30px] lg:text-[38px] leading-9">Seed</div>
          <div className="text-center text-[16px] md:text-[24px] lg:text-[36px] leading-9">SunSwap listing and 150K MCAP</div>
        </div>
        <div className="flex flex-col items-center max-w-[150px] md:max-w-[200px] lg:max-w-[300px]">
          <img src="/3.png" alt="Harvest" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[176px] lg:h-[176px]" />
          <div className="font-bold text-red-500 text-[20px] md:text-[30px] lg:text-[38px] leading-9">Harvest</div>
          <div className="text-center text-[16px] md:text-[24px] lg:text-[36px] leading-9">Status of the ricest community on TRON</div>
        </div>
        <div className="flex flex-col items-center max-w-[150px] md:max-w-[200px] lg:max-w-[300px]">
          <img src="/4.png" alt="Lunch" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[176px] lg:h-[176px]" />
          <div className="font-bold text-red-500 text-[20px] md:text-[30px] lg:text-[38px] leading-9">Lunch</div>
          <div className="text-center text-[16px] md:text-[24px] lg:text-[36px] leading-9">A ton of rice for <br /> Xi Jinping (习近平)</div>
        </div>
      </div>
    </div>
  );
};

export default SunriceComponent;
