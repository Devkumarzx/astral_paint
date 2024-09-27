import GreenLine from "@/assets/green_line.png";
import Button from "@/components/Button";
import { latoFont } from "@/Utils";
import Image from "next/image";

export default function ColorSection() {
  return (
    <div id="colours" className=" pl-16 pr-20">
      <div className="font-medium text-lg mb-6">Colours</div>
      <div className="mb-7 flex items-center justify-between">
        <div className="font-bold text-3xl flex items-center gap-x-3">
          Popular Colours
          <Image src={GreenLine} alt="green line" />
        </div>
        <Button className="bg-transparent border border-ap-green text-ap-green">
          Explore more
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-x-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="space-y-3 flex flex-col items-center group hover:shadow-ap-shadow rounded-20px py-4"
          >
            <div className="text-xs font-semibold text-black opacity-0 group-hover:opacity-100">
              Astral Paint
            </div>
            <div className="w-178px h-148px bg-red-500 ring-4 ring-red-500 ring-offset-2"></div>
            <div className="font-normal text-base text-black"> Color Name</div>
            <div
              className={`font-normal text-sm text-ap-gray ${latoFont.className}`}
            >
              Colour Code
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
