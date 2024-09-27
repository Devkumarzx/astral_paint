import footerBg from "@/assets/footerbg.png";
import Image from "next/image";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";
import AstralLogo from "@/assets/astral_logo.svg";
import { latoFont } from "@/Utils";
import LocationIcon from "@/assets/locationIcon.svg";
import CallIcon from "@/assets/callIcon.svg";
import mailIcon from "@/assets/mailIcon.svg";
import Button from "../Button";
import facebookIcon from "@/assets/facebook.png";
import twitterIcon from "@/assets/twitter.png";
import instagramIcon from "@/assets/instagram.png";
import youtubeIcon from "@/assets/youtube.png";

export default function Footer() {
  return (
    <>
      <div
      id="contact"
        className={`w-full h-689px px-20 bg-center bg-cover flex flex-col justify-center items-center text-white`}
        style={{ backgroundImage: `url(${footerBg.src})` }}
      >
        <div className="font-bold text-3xl mb-16">Group Company</div>
        <div className="flex items-center  gap-x-14 mb-14">
          <Image src={logo1} alt="logo 1" />
          <Image src={logo2} alt="logo 2" />
          <Image src={logo3} alt="logo 3" />
          <Image src={logo4} alt="logo 4" />
          <Image src={logo5} alt="logo 5" />
        </div>
        <div className="w-full border border-white bg-white mb-16"></div>

        <div className="grid grid-cols-3 gap-x-40 w-full">
          <div>
            <Image src={AstralLogo} alt="logo image" />
            <div className="font-bold text-sm text-ap-desert_sand mb-5 mt-10">
              Reach us
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-x-3">
                <Image src={LocationIcon} alt="location icon" />
                <div className={`${latoFont.className} font-normal text-xs`}>
                  #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
                  Bangalore - 560 058
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <Image src={CallIcon} alt="location icon" />
                <div className={`${latoFont.className} font-normal text-xs`}>
                  +91 – 80 – 42552555
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <Image src={mailIcon} alt="location icon" />
                <div className={`${latoFont.className} font-normal text-xs`}>
                  info@gem-paints.com
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-ap-desert_sand mb-5 mt-10">
                  sign up to our newsletter
                </div>
                <div className={`${latoFont.className} font-normal text-xs`}>
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div className="relative">
                <input
                  className="border border-ap-desert_sand rounded-30px outline-none bg-transparent p-4 w-72"
                  placeholder="Enter email address"
                />
                <Button className="bg-ap-blue text-white py-[30px] px-5 absolute -right-14 top-0">
                  Enquire Now
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-4 relative">
              <div className="space-y-4">
                <div className="font-bold text-sm text-ap-desert_sand mt-10">
                  About
                </div>
                <div className="font-medium text-xs ">About astrals</div>
                <div className="font-medium text-xs ">paint journey</div>
                <div className="font-medium text-xs ">Group Companies</div>
              </div>

              <div className="space-y-4">
                <div className="font-bold text-sm text-ap-desert_sand mt-10">
                  Category
                </div>
                <div className="font-medium text-xs ">interior paints</div>
                <div className="font-medium text-xs ">exterior paints</div>
                <div className="font-medium text-xs ">undercoats</div>
                <div className="font-medium text-xs ">painting tools</div>
                <div className="font-medium text-xs ">water proofing</div>
              </div>

              <div className="space-y-4">
                <div className="font-bold text-sm text-ap-desert_sand mt-10">
                  Services
                </div>
                <div className="font-medium text-xs ">wall painting</div>
                <div className="font-medium text-xs ">water Solution</div>
                <div className="font-medium text-xs ">painting</div>
                <div className="font-medium text-xs ">painting tools</div>
                <div className="font-medium text-xs ">colour shades</div>
              </div>

              <div className="space-y-4">
                <div className="font-bold text-sm text-ap-desert_sand mt-10">
                  Downloads
                </div>
                <div className="font-bold text-sm text-ap-desert_sand mt-10">
                  Become a dealer
                </div>
                <div className="font-bold text-sm text-ap-desert_sand mt-10">
                  Blogs
                </div>
                <div className="font-bold text-sm text-ap-desert_sand mt-10">
                  Contact
                </div>
              </div>

              <div className="absolute right-0 bottom-0 flex items-center gap-x-3">
                <div className="border border-white rounded-full w-6 h-6 flex items-center justify-center">
                  <Image src={facebookIcon} alt="facebook icon" />
                </div>
                <div className="border border-white rounded-full w-6 h-6 flex items-center justify-center">
                  <Image src={twitterIcon} alt="facebook icon" />
                </div>
                <div className="border border-white rounded-full w-6 h-6 flex items-center justify-center">
                  <Image src={instagramIcon} alt="facebook icon" />
                </div>
                <div className="border border-white rounded-full w-6 h-6 flex items-center justify-center">
                  <Image src={youtubeIcon} alt="facebook icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-ap-blue text-white flex items-center justify-between px-20">
        <div className="font-medium text-xs ">Terms & Conditions</div>
        <div className="font-medium text-xs "> ALL RIGHTS RESERVED</div>
        <div className="font-medium text-xs ">Privacy Policy</div>
      </div>
    </>
  );
}
