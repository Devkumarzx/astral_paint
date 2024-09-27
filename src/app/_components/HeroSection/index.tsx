import Image from "next/image";
import img1 from "@/assets/img1.png";
import RainbowImg from "@/assets/rainbow.png";

export default function HeroSection() {
  return (
    <div className="w-full h-[666px] bg-red-100 relative">
      <Image src={img1} alt="hello" className="w-full h-full" />

      <Image
        src={RainbowImg}
        alt="rainbow.png"
        className="w-full h-full absolute -bottom-60"
      />
    </div>
  );
}
