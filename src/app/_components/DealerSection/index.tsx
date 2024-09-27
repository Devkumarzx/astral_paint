import bg1 from "@/assets/bg1.png";
import Button from "@/components/Button";
import { latoFont } from "@/Utils";

export default function DealerSection() {
  return (
    <div id="become_a_dealer"
      className="  w-full h-358px bg-cover bg-center flex items-center justify-center flex-col text-white space-y-5"
      style={{ backgroundImage: `url(${bg1.src})` }}
    >
      <div className="font-medium text-lg">Join the Success Journey</div>

      <div className="font-bold text-3xl">Popular Colours</div>

      <p className={` ${latoFont.className} text-base font-normal w-1/3`}>
        Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi in ornare.
        Nec in tristique et ultrices sit ullamcorper massa tempor et.
      </p>

      <Button className="text-black">Read More</Button>
    </div>
  );
}
