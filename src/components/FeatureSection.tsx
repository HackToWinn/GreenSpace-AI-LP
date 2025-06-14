import Image from "next/image";

export default function FeatureSection() {
  return (
    <>
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold mb-3 sm:mb-4 lg:mb-6">
          Discover Our Features
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Explore powerful tools designed to help you live sustainably
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="bg-[#0F2612] rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-0 flex flex-col gap-y-3 sm:gap-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-bold">
            Environment Tracking
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3 sm:mb-4 leading-relaxed">
            GreenSpace uses Expo Location to Track User current location and environment as soon As the User Submit their report
          </p>
          <div className="flex justify-end">
            <Image 
              src={'/images/feature_img1.png'} 
              alt="Feature Image 1" 
              width={600} 
              height={600} 
              className="w-full max-w-[420px] sm:max-w-[550px] lg:max-w-[600px] h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="bg-[#0F2612] rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-0 flex flex-col gap-y-3 sm:gap-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-bold">
            Environment Detection
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3 sm:mb-4 leading-relaxed">
            GreenSpace uses Advance AI to describe the Image That the user submitted, while also predict the upcoming that are possibly caused by the disaster that the had reported
          </p>
          <div className="flex justify-end">
            <Image 
              src={'/images/feature_img2.png'} 
              alt="Feature Image 2" 
              width={600} 
              height={600} 
              className="w-full max-w-[420px] sm:max-w-[550px] lg:max-w-[600px] h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="bg-[#0F2612] rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-0 flex flex-col gap-y-3 sm:gap-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-bold">
            Statistics
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3 sm:mb-4 leading-relaxed">
            GreenSpace also gives the user the data about the danger and clear area from the disaster that are happening around the world through pinning specific Location on the map
          </p>
          <div className="flex justify-end">
            <Image 
              src={'/images/feature_img3.png'} 
              alt="Feature Image 3" 
              width={600} 
              height={600} 
              className="w-full max-w-[420px] sm:max-w-[550px] lg:max-w-[600px] h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="bg-[#0F2612] rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-0 flex flex-col gap-y-3 sm:gap-y-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-bold">
            Reward
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3 sm:mb-4 leading-relaxed">
            GreenSpace also grants reward for every User that has achive their daily goal, what kind of reward do the user achive?, the very common reward is bitcoin
          </p>
          <div className="flex justify-end">
            <Image 
              src={'/images/feature_img4.png'} 
              alt="Feature Image 4" 
              width={600} 
              height={600} 
              className="w-full max-w-[420px] sm:max-w-[550px] lg:max-w-[600px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}