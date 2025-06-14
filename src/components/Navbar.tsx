import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <div className="flex items-center gap-x-1">
        <Image src={"/icons/favicon.png"} alt="GreenSpace Logo" width={32} height={32} className="w-10" />
        <h1 className="font-bold text-xl">GreenSpace</h1>
      </div>
      {/* Todo: Add links */}
    </nav>
  );
}