"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthButton";

function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between bg-gray-800 h-28 shadow-2xl">
      <div className="logo">
        <Link className="text-white ml-6 flex cursor-pointer text-2xl" href={"/"}>Home</Link>
      </div>
      <ul className="items-center flex">
        <li>
          <Link className="text-white m-3 flex bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded" href="/routes/protected">Protected Page</Link>
        </li>
        <li className="align-middle">
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
