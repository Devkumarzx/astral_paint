import OrangeLine from "@/assets/orange_line.png";
import Image from "next/image";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import Button from "@/components/Button";

export default function CategorySection() {
  return (
    <div id="category" className=" pl-16 pr-20">
      <div className="font-medium text-lg mb-6">Category</div>

      <div className="font-bold text-3xl mb-7 flex items-center gap-x-3">
        Wide range of Colours
        <Image src={OrangeLine} alt="orange line" />
      </div>

      <div className="grid grid-cols-2 gap-x-30px ">
        <div className="relative">
          <Image src={img2} alt="img2" className="w-full h-full" />
          <div className="bg-ap-orange/60 h-76px absolute bottom-0 w-full flex items-center justify-between px-5">
            <div className=" font-semibold text-xl text-white">
              Interior Paints
            </div>
            <Button className=" text-ap-orange">Read more</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="relative">
            <Image src={img4} alt="img2" className="h-full w-full" />
            <div className=" font-semibold text-xl text-white absolute bottom-0 p-5">
              Exterior Paints
            </div>
          </div>
          <div className="relative">
            <Image src={img3} alt="img2" className="h-full w-full" />
            <div className=" font-semibold text-xl text-white absolute bottom-0 p-5">
              Water Proofing
            </div>
          </div>
          <div className="relative">
            <Image src={img3} alt="img2" className="h-full w-full" />
            <div className=" font-semibold text-xl text-white absolute bottom-0 p-5">
              Undercoats
            </div>
          </div>
          <div className="relative">
            <Image src={img4} alt="img2" className="h-full w-full" />
            <div className=" font-semibold text-xl text-white absolute bottom-0 p-5">
              Painting Tools
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
