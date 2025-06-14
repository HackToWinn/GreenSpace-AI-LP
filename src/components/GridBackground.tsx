import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-[88rem] w-full items-center justify-center bg-[#E6F4EC]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 px-32 py-8">
        <p className="text-4xl text-center font-bold text-gray-900 sm:text-7xl sm:leading-20 mb-8">Bring Nature Closer with GreenSpace</p>
        <p className="text-sm text-center text-gray-600 sm:text-xl mb-8">GreenSpace empowers you to reconnect with nature through smart, eco-friendly tools — identify plants with AI, track your green habits, and live more sustainably, one step at a time.</p>
        <div className="flex justify-center items-center gap-x-8 mb-8">
          <Image src={'/icons/AppStore.svg'} alt="App Store Logo" width={100} height={100} className="w-40" />
          <Image src={'/icons/PlayStore.png'} alt="Play Store Logo" width={100} height={100} className="w-44" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={'/images/mockup.png'} alt="Mockup" width={640} height={640} />
        </div>
      </div>
    </div>
  );
}
