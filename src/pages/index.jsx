import FormInput from "@/components/fragments/formInput";
import Auth from "@/components/layout/auth";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center bg-[#1a1a1a]">
      <svg className="absolute top-0 lg:-top-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#84cc16" fill-opacity="1" d="M0,288L1440,32L1440,0L0,0Z"></path></svg>
      <div className="flex flex-col w-full lg:w-1/2 text-center z-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-lime-500">Welcome to Next Panda Store</h1>
        <p className="text-xl lg:text-3xl font-semibold mt-3 text-slate-200">This website has been rebuilt with next js</p>
        <h3 className="text-xl lg:text-3xl font-semibold mt-3 text-slate-200">Select your option</h3>
        <div className="flex justify-evenly mt-5 text-slate-200 w-1/2 mx-auto">
          <button className="bg-slate-500 px-5 lg:px-7 py-1 lg:py-2 rounded-md font-semibold hover:bg-lime-500 hover:text-slate-800 transition duration-500">
            <Link href="/login">Login</Link>
          </button>
          <p className="text-3xl font-semibold text-lime-500">/</p>
          <button className="bg-slate-500 px-3 lg:px-5 py-1 lg:py-2 rounded-md font-semibold hover:bg-lime-500 hover:text-slate-800 transition duration-500">
            <Link href="/register">Register</Link>
          </button>
        </div>
      </div>
      <svg className="absolute bottom-0 lg:-bottom-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#84cc16" fill-opacity="1" d="M0,288L1440,32L1440,320L0,320Z"></path></svg>
    </div>
  );
}
