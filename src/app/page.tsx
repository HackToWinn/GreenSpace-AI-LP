import { GridBackgroundDemo } from "@/components/GridBackground";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-jakarta-sans)]">
      <Navbar />
      <GridBackgroundDemo />
    </div>
  );
}
