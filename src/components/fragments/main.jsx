import Lottie from "lottie-react"
import animationData from "../../../public/lottie/Animation - 1708339517714.json"
import BgTop from "../elements/background/bgtop"
import BgBottom from "../elements/background/bgbottom"

const Main = () => {
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center relative bg-[#1a1a1a] -z-10 lg:flex-row overflow-hidden">
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
        </section>
    )
}

export default Main