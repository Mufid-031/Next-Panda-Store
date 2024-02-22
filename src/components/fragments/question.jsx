import { useState } from "react"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"

const Question = () => {

    const [isOpen1, setIsOpen1] = useState(true)
    const [isOpen2, setIsOpen2] = useState(true)
    const [isOpen3, setIsOpen3] = useState(true)
    const [isOpen4, setIsOpen4] = useState(true)

    return (
        <section className="flex flex-col lg:flex-row flex-wrap w-full bg-lime-500 relative pt-5 lg:h-1/2 lg:pt-20">
            <div className={`w-[90%] mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:mb-0 lg:w-[40%] lg:rounded-md lg:h-32`}>
                <button onClick={() => setIsOpen1(!isOpen1)} className={`w-full h-full flex p-5 ${isOpen1 ? "flex-col" : "flex-row"}`}>
                    {
                        isOpen1 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What is Next Panda Store ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What is Next Panda Store ?</h1>
                    }
                    {
                        isOpen1 ? <p className="text-slate-200 p-2">panda store is a continuation website of panda store which now uses NEXT JS</p> : ""
                    }
                </button>
            </div>
            <div className="w-[90%] mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:w-[40%] lg:h-32 lg:rounded-md">
                <button onClick={() => setIsOpen2(!isOpen2)} className={`w-full h-full flex p-5 ${isOpen2 ? "flex-col" : "flex-row"}`}>
                    {
                        isOpen2 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> Panda store is created using ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> Panda store is created using ?</h1>
                    }
                    {
                        isOpen2 ? <p className="text-slate-200 p-2">Next panda store is written in NEXT JS</p> : ""
                    }
                </button>
            </div>
            <div className="w-[90%] mx-auto bg-[#1a1a1a] rounded-xl mb-7 lg:w-[40%] lg:h-32 lg:rounded-md">
                <button onClick={() => setIsOpen3(!isOpen3)} className={`w-full h-full flex p-5 ${isOpen3 ? "flex-col" : "flex-row"}`}>
                    {
                        isOpen3 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What is NEXT JS ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What is NEXT JS ?</h1>
                    }
                    {
                        isOpen3 ? <p className="text-slate-200 p-2">Next.js is a React framework for building full-stack web applications.</p> : ""
                    }
                </button>
            </div>
            <div className="w-[90%] mx-auto bg-[#1a1a1a] rounded-xl lg:w-[40%] lg:h-32 lg:rounded-md">
                <button onClick={() => setIsOpen4(!isOpen4)} className={`w-full h-full flex p-5 ${isOpen4 ? "flex-col" : "flex-row"}`}>
                    {
                        isOpen4 ? <h1 className="text-xl font-semibold text-slate-200"><CiCircleMinus style={{ display: "inline-block" }} size={40} /> What are the advantages of NEXT JS ?</h1> : <h1 className="text-xl font-semibold text-slate-200"><CiCirclePlus style={{ display: "inline-block" }} size={40} /> What are the advantages of NEXT JS ?</h1>
                    }
                    {
                        isOpen4 ? <p className="text-slate-200 p-2">Next.js is a React framework for building full-stack web applications.</p> : ""
                    }
                </button>
            </div>
        </section>
    )
}

export default Question