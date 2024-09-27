import yellowLine from "@/assets/yellow_line.png";
import Image from "next/image";
import img2 from "@/assets/img2.png";
import Button from "@/components/Button";
import { latoFont } from "@/Utils";

export default function ServicesSection() {
  return (
    <div id="services" className=" pl-16 pr-20">
      <div className="font-medium text-lg mb-6">Services</div>

      <div className="font-bold text-3xl mb-7 flex items-center gap-x-3">
        make your life comfortable
        <Image src={yellowLine} alt="yellow line" />
      </div>

      <div className="grid grid-cols-3 gap-x-6 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="relative">
            <Image src={img2} alt="img2" className="w-full h-full" />
            <div className="bg-ap-yellow/60 h-36 absolute bottom-0 w-full flex flex-col items-start justify-evenly px-5">
              <div className=" font-semibold text-xl text-black">
                Interior Paints
              </div>
              <div
                className={` font-normal text-base text-black ${latoFont.className}`}
              >
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <Button className=" text-black">Read more</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
