"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex m-4 flex-col align-middle">
        <div className="text-white mt-2 text-xs flex">{session?.user?.name}</div>
        <button
          className="text-white flex bg-red-600 pt-4 pb-4 pr-5 pl-5 hover:bg-red-700 transition-all rounded"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <br />
      </div>
    );
  }
  return (
    <>
      <button
        className="text-white m-3 flex bg-red-600 pt-4 pb-4 pr-5 pl-5 hover:bg-red-700 transition-all rounded"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
}
