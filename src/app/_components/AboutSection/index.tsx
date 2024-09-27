import Image from "next/image";
import vidImg from "@/assets/videoimg.png";
import Button from "@/components/Button";
import redLine from "@/assets/red_line.png";
import { latoFont } from "@/Utils";

export default function AboutSection() {
  return (
    <div id="about" className="grid grid-cols-2 gap-x-73px pl-16 pr-20">
      <div className="pt-32">
        <div className="font-medium text-lg mb-6">About Astral Paints</div>
        <div className="font-bold text-3xl mb-7 flex items-center gap-x-3">
          Bringing your dreams to life
          <Image src={redLine} alt="red line" />
        </div>
        <p
          className={` ${latoFont.className} text-ap-gray text-base font-normal mb-3`}
        >
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>
        <p
          className={` ${latoFont.className} text-ap-gray text-base font-normal mb-6 `}
        >
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>
        <Button className="bg-transparent border border-ap-red text-ap-red">
          Read more
        </Button>
      </div>
      <Image src={vidImg} alt="vid img" className="w-full" />
    </div>
  );
}
