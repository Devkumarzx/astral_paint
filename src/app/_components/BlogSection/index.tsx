import BlueLine from "@/assets/blue_line.png";
import Image from "next/image";
import img4 from "@/assets/img4.png";
import { latoFont } from "@/Utils";

export default function BlogSection() {
  return (
    <div id="blogs" className=" pl-16 pr-20 pb-28">
      <div className="font-medium text-lg mb-6">Our Blog</div>

      <div className="font-bold mb-7  text-3xl flex items-center gap-x-3">
        Latest
        <Image src={BlueLine} alt="blue line" />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`relative ${i === 1 ? "row-span-2" : ""}`}>
            <Image src={img4} alt="img2" className="h-full w-full" />
            <div className="text-white absolute bottom-0 p-5">
              <div
                className={`${latoFont.className} font-medium text-sm  !italic`}
              >
                10 Jan 2024
              </div>
              <div className=" font-semibold text-xl">
                10 stylish cream colour combination for your home
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
