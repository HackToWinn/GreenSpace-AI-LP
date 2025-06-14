import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[50%]">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">What is GreenSpace?</h1>
        <p className="text-xl text-gray-600">
          GreenSpace is a mobile application designed to help you live more sustainably
          by connecting you with nature through technology. With features like AI-powered environment identification, eco-friendly tips,
          and habit tracking, GreenSpace empowers individuals to make small changes that lead to a greener, healthier planet.
        </p>
      </div>
      <div className="w-[50%]">
        <Image src={'/images/mockup2.png'} alt="Mockup" width={1200} height={1200} />
      </div>
    </div>
  )
}