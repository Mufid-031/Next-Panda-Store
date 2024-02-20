import Navbar from "@/components/fragments/navbar"
import Lottie from "lottie-react";
import animationData from "../../public/lottie/Animation - 1708339517714.json"
import BgTop from "@/components/elements/background/bgtop";
import BgBottom from "@/components/elements/background/bgbottom";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Home = () => {

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isLg, setIsLg] = useState(false)

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setIsLg(true)
        } else {
            setIsLg(false)
        }
    }, [isLg])

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div className="w-full h-screen flex flex-col justify-center items-center relative bg-[#1a1a1a] -z-10 lg:flex-row overflow-hidden">
                <BgTop />
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="w-2/3 h-2/3 lg:w-1/2 animate-scaleUp"
                />
                <div className="w/2/3 z-10 lg:w-1/2 animate-scaleUp">
                    <h1 className="text-3xl font-semibold text-lime-500 lg:text-4xl">Welcome To</h1>
                    <h2 className="text-5xl font-bold drop-shadow-[0_0_10px_#84cc16] text-slate-50 lg:text-6xl">Next Panda Store</h2>
                </div>
                <BgBottom />
            </div>

            <div className="flex flex-col lg:flex-row flex-wrap w-full h-screen bg-lime-500 relative pt-20 lg:h-1/2 lg:pb-52">
                {
                    isLg ? <div className={`w-[90%] h-20 mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:mb-0 lg:w-[40%] lg:rounded-md lg:h-32`}>
                        <button onClick={() => setIsOpen1(!isOpen1)} className={`w-full h-full flex p-5 ${isOpen1 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen1 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What is Next Panda Store ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What is Next Panda Store ?</h1>
                            }
                            {
                                isOpen1 ? <p className="text-slate-200 p-2">panda store is a continuation website of panda store which now uses NEXT JS</p> : ""
                            }
                        </button>
                    </div> : <div className={`w-[90%] mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:mb-0 lg:w-[40%] lg:rounded-md ${isOpen1 ? "lg:h-40" : "lg:h-20"}`}>
                        <button onClick={() => setIsOpen1(!isOpen1)} className={`w-full h-full flex p-5 ${isOpen1 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen1 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What is Next Panda Store ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What is Next Panda Store ?</h1>
                            }
                            {
                                isOpen1 ? <p className="text-slate-200 p-2">panda store is a continuation website of panda store which now uses NEXT JS</p> : ""
                            }
                        </button>
                    </div>
                }
                {
                    isLg ? <div className="w-[90%] h-20 mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:w-[40%] lg:h-32 lg:rounded-md">
                        <button onClick={() => setIsOpen2(!isOpen2)} className={`w-full h-full flex p-5 ${isOpen2 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen2 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> Panda store is created using ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> Panda store is created using ?</h1>
                            }
                            {
                                isOpen2 ? <p className="text-slate-200 p-2">Next panda store is written in NEXT JS</p> : ""
                            }
                        </button>
                    </div> : <div className="w-[90%] mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:w-[40%] lg:h-20 lg:rounded-md">
                        <button onClick={() => setIsOpen2(!isOpen2)} className={`w-full h-full flex p-5 ${isOpen2 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen2 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> Panda store is created using ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> Panda store is created using ?</h1>
                            }
                            {
                                isOpen2 ? <p className="text-slate-200 p-2">Next panda store is written in NEXT JS</p> : ""
                            }
                        </button>
                    </div>
                }
                {
                    isLg ? <div className="w-[90%] h-20 mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:w-[40%] lg:h-32 lg:rounded-md">
                        <button onClick={() => setIsOpen3(!isOpen3)} className={`w-full h-full flex p-5 ${isOpen3 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen3 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What is NEXT JS ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What is NEXT JS ?</h1>
                            }
                            {
                                isOpen3 ? <p className="text-slate-200 p-2">Next.js is a React framework for building full-stack web applications.</p> : ""
                            }
                        </button>
                    </div> : <div className="w-[90%] mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:w-[40%] lg:h-20 lg:rounded-md">
                        <button onClick={() => setIsOpen3(!isOpen3)} className={`w-full h-full flex p-5 ${isOpen3 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen3 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What is NEXT JS ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What is NEXT JS ?</h1>
                            }
                            {
                                isOpen3 ? <p className="text-slate-200 p-2">Next.js is a React framework for building full-stack web applications.</p> : ""
                            }
                        </button>
                    </div>
                }
                {
                    isLg ? <div className="w-[90%] h-20 mx-auto bg-[#1a1a1a] rounded-xl lg:w-[40%] lg:h-32 lg:rounded-md">
                        <button onClick={() => setIsOpen4(!isOpen4)} className={`w-full h-full flex p-5 ${isOpen4 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen4 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What are the advantages of NEXT JS ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What are the advantages of NEXT JS ?</h1>
                            }
                            {
                                isOpen4 ? <p className="text-slate-200 p-2">Next.js is a React framework for building full-stack web applications.</p> : ""
                            }
                        </button>
                    </div> : <div className="w-[90%] mx-auto bg-[#1a1a1a] rounded-xl mb-7  lg:w-[40%] lg:h-20 lg:rounded-md">
                        <button onClick={() => setIsOpen4(!isOpen4)} className={`w-full h-full flex p-5 ${isOpen4 ? "flex-col" : "flex-row"}`}>
                            {
                                isOpen4 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What are the advantages of NEXT JS ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What are the advantages of NEXT JS ?</h1>
                            }
                            {
                                isOpen4 ? <p className="text-slate-200 p-2">Next.js is a React framework for building full-stack web applications.</p> : ""
                            }
                        </button>
                    </div>
                }
            </div>

            <div className="w-full h-screen bg-[#1a1a1a]">

            </div>
        </div>
    )
}

export default Home