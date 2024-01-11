"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setpass] = useState("");
  const router = useRouter()
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName,
      password: pass,
      redirect: false,
      callbackUrl: "/",
    });
    if (result?.ok) {
      router.push("/")
    } else {toast.error("Invalid Credentials")}
  };

  return (
    <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="username">
              Username
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              id="username"
              type="text"
              name="username"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setpass(e.target.value)}
              id="password"
              type="password"
              name="password"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mt-6 flex items-center justify-between"></div>
          <div className="mt-6">
            <button
              type="button"
              onClick={onSubmit}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
            >
              Sign In
            </button>
            <Toaster />
          </div>
          <div className="mt-6 text-center"></div>
        </form>
      </div>
    </div>
  );
};
export default Login;
