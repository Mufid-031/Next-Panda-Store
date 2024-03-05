import BgBottom from "@/components/elements/background/bgbottom";
import BgTop from "@/components/elements/background/bgtop";
import Link from "next/link";

export default function GetStarted() {

  return (
    <div className="flex flex-col w-fulL justify-center items-center bg-[#1a1a1a] relative lg:overflow-hidden">
      <BgTop />
      <div className="flex flex-col w-full h-screen justify-center items-center lg:w-1/2 text-center z-10 animate-opacition">
        <h1 className="text-3xl lg:text-5xl font-bold text-lime-500">Welcome to Next Panda Store</h1>
        <p className="text-xl lg:text-3xl font-semibold mt-3 text-slate-200">This website has been rebuilt with next js</p>
        <h3 className="text-xl lg:text-3xl font-semibold mt-3 text-slate-200">Select your option</h3>
        <div className="flex justify-evenly mt-5 text-slate-200 w-1/2 mx-auto">
          <Link className="bg-slate-500 px-5 lg:px-7 py-1 lg:py-2 rounded-md font-semibold hover:bg-lime-500 hover:text-slate-800 transition duration-500" href={"/login"}>
            Login
          </Link>
          <p className="text-3xl font-semibold text-lime-500">/</p>
          <Link className="bg-slate-500 px-3 lg:px-5 py-1 lg:py-2 rounded-md font-semibold hover:bg-lime-500 hover:text-slate-800 transition duration-500" href={"/register"}>
            Register
          </Link>
        </div>
      </div>
      <BgBottom />
    </div>
  );
}
