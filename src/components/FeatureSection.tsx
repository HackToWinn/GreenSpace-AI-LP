import Image from "next/image";

export default function FeatureSection() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">Discover Our Features</h1>
        <p className="text-xl text-gray-600 mb-8">Explore powerful tools designed to help you live sustainably</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#0F2612] rounded-3xl px-8 pt-8 flex flex-col gap-y-4">
          <h2 className="text-2xl text-gray-100 font-bold">Smart Environment Detection</h2>
          <p className="text-lg text-gray-200 mb-4">GreenSpace uses advanced AI technology to identify the environment you&apos;re in.</p>
          <Image src={'/images/feature_img1.png'} alt="Feature Image 1" width={600} height={600} className="self-end object-cover" />
        </div>
        {/* Todo: 4 more features */}
        <div className="bg-[#0F2612] rounded-3xl px-8 pt-8 flex flex-col gap-y-4">
        </div>
      </div>
    </>
  )
}