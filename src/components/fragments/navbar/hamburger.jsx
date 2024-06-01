import { signIn, signOut, useSession } from "next-auth/react"
import { CiSearch } from "react-icons/ci"
import { FaOpencart } from "react-icons/fa"

const Hamburger = (Props) => {

    const session = useSession()
    const { isOpen, setIsOpen } = Props

    return (
        <div className="flex justify-evenly w-1/3 lg:w-[10%]">
            <CiSearch size={30} className={`${"text-slate-200"} ${"hover:text-lime-500"} cursor-pointer mr-2`} />
            <FaOpencart size={30} className={`${"text-slate-200"} ${"hover:text-lime-500"} cursor-pointer mr-5`} />
            {session?.status === "authenticated" ? <button className="w-20 h-8 bg-lime-500 rounded-lg text-slate-100 hidden lg:block" onClick={() => signOut()}>Sign Out</button> : <button className="w-20 h-8 bg-lime-500 rounded-lg text-slate-100 hidden lg:block" onClick={() => signIn()}>Sign In</button>}
            <button className="w-7 h-7 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <span className={`block w-7 h-1 bg-slate-200 mb-1 origin-left transition duration-500 ${isOpen ? "rotate-[35deg] transition duration-500" : ""}`}></span>
                <span className={`block w-7 h-1 bg-slate-200 mb-1 transition duration-500 ${isOpen ? "scale-0 transition duration-500" : ""}`}></span>
                <span className={`block w-7 h-1 bg-slate-200 origin-left transition duration-500 ${isOpen ? "-rotate-[35deg] transition duration-500" : ""}`}></span>
            </button>
        </div>
    )
}

export default Hamburger