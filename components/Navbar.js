import Link from "next/link";
import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="flex justify-between py-4 mb-4 rounded border-b border-slate-200">
      <div>
        <Link href={"/"} className="font-bold uppercase ">
          <strong>Logo</strong>
        </Link>
      </div>
      <div className="sm:flex sm:gap-4 sm:justify-end">
        <div className="sm:hidden">
          <button>
            <EllipsisVerticalIcon className="size-5 text-gray-600 " />
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-4 sm:justify-end">
          <Link href={"/about"}>About</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
