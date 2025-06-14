import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex min-h-screen lg:h-[90rem] w-full items-center justify-center bg-[#E6F4EC]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px] sm:[background-size:30px_30px] lg:[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-bold text-gray-900 leading-tight sm:leading-tight lg:leading-20 mb-4 sm:mb-6 lg:mb-8">
          Bring Nature Closer with GreenSpace
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
          GreenSpace empowers you to reconnect with nature through smart, eco-friendly tools — identify environment with AI, track your green habits, and live more sustainably, one step at a time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-x-8 mb-8 sm:mb-12">
          <Image 
            src={'/icons/AppStore.svg'} 
            alt="App Store Logo" 
            width={100} 
            height={100} 
            className="w-32 sm:w-36 lg:w-40 h-auto" 
          />
          <Image 
            src={'/icons/PlayStore.png'} 
            alt="Play Store Logo" 
            width={100} 
            height={100} 
            className="w-36 sm:w-40 lg:w-44 h-auto" 
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl">
            <Image 
              src={'/images/mockup.png'} 
              alt="Mockup" 
              width={940} 
              height={940} 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}