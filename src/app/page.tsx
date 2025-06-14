import Container from "@/components/Container";
import FeatureSection from "@/components/FeatureSection";
import { GridBackgroundDemo } from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-jakarta-sans)]">
      <Navbar />
      <GridBackgroundDemo />
      <Container>
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
      </Container>
      <Container>
        <div className="w-full px-20 py-4 flex justify-between items-center gap-x-4 bg-gradient-to-r from-violet-500 to-indigo-700 rounded-4xl">
          <div className="w-1/2">
            <Image src={'/icons/internet-computer-icp-logo.png'} alt="Internet Computer Logo" width={300} height={400} />
          </div>
          <div>
            <h2 className="text-4xl text-gray-100 font-bold mb-4">Powered by Internet Computer</h2>
            <p className="text-xl text-gray-100 mb-4">GreenSpace is built on the Internet Computer blockchain, a decentralized platform for building decentralized applications.</p>
            <Link href="https://internetcomputer.org/" target="_blank">
              <button className="bg-white font-semibold text-indigo-700 px-4 py-2 rounded-full mt-4 hover:bg-indigo-700 hover:text-white hover:cursor-pointer transition duration-300 ease-in-out">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </Container>
      <Container>
        <FeatureSection />
      </Container>
      <footer className="w-full p-4">
        <div className="py-4 flex justify-between items-center border-t border-gray-200">
          <div className="flex items-center gap-x-1">
            <Image src={"/icons/favicon.png"} alt="GreenSpace Logo" width={32} height={32} className="w-10" />
            <h1 className="font-bold text-xl">GreenSpace</h1>
          </div>
          <p className="text-md text-gray-600">© 2025 GreenSpace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
