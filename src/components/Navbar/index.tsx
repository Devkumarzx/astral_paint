"use client";
import Image from "next/image";
import AstralLogo from "@/assets/astral_logo.svg";
import Link from "next/link";
import { navData } from "@/components/Navbar/constant";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <div className="h-100px w-full bg-ap-blue flex items-center justify-around gap-x-40 px-20">
      <Image src={AstralLogo} alt="logo image" loading="lazy" />
      <div className="flex items-center gap-x-8">
        {navData.map((nav) => (
          <Link
            key={nav.href}
            className="text-white text-sm font-semibold"
            href={nav?.href}
          >
            {nav.label}
          </Link>
        ))}
        <Button>Enquiry Now</Button>
      </div>
    </div>
  );
}
