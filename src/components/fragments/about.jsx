import Lottie from "lottie-react"
import animationData1 from "../../../public/lottie/Animation - 1708442799036.json"
import animationData2 from "../../../public/lottie/Animation - 1708444452575.json"
import animationData3 from "../../../public/lottie/Animation - 1708445510181.json"
import Instagram from "../elements/icon/instagram"
import Twitter from "../elements/icon/twitter"
import Facebook from "../elements/icon/facebook"
import Github from "../elements/icon/github"


const About = () => {
    return (
        <section className="w-full bg-[#1a1a1a] pb-40">
            <main className="w-full flex flex-wrap items-center bg-[#1a1a1a] mb-10 relative">
                <div className="w-full lg:w-1/3 mb-16 lg:mb-0 ml-10 lg:ml-20 text-slate-50 text-xl font-semibold">
                    <h3 className="text-3xl lg:text-4xl mb-10 text-lime-500">How NEXT JS was created ?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores iste voluptatem saepe minus perspiciatis ad dolorum repudiandae, deleniti nostrum illum. Id sed odit qui porro vel quasi. Voluptate, sint? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit quo, itaque totam ducimus modi velit voluptas</p>
                </div>
                <Lottie
                    animationData={animationData1}
                    loop={true}
                    className="w-2/3 h-2/3 lg:w-1/4 mx-auto z-10 animate-twinkle"
                />
                <div className="absolute top-52 lg:top-0 lg:right-[12%] flex justify-center w-full h-[70%] lg:w-[40%] lg:h-[90%]">
                    <Lottie
                        animationData={animationData2}
                        loop={true}
                        className="w-28 h-28 animate-scaleUp absolute top-20 lg:top-0 right-10 lg:right-0"
                        onClick={() => window.open("https://react.dev/")}
                    />
                    <Lottie
                        animationData={animationData3}
                        loop={true}
                        className="w-28 h-28 animate-scaleUp absolute bottom-0 left-0 lg:left-7"
                    />
                </div>
            </main>
            <div className="w-full flex flex-wrap pl-10 lg:pl-20 bg-[#1a1a1a] relative">
                <div className="w-full lg:w-1/2 text-slate-50">
                    <h1 className="text-3xl">About Panda Store</h1>
                    <p className="mt-5 w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem ratione laborum nihil illum quas mollitia excepturi dicta. Culpa beatae cumque odit sequi quia? Tempora culpa officiis suscipit nam fugit.</p>
                </div>
                <div className="w-full lg:w-1/2 text-slate-50 mt-10 lg:mt-0">
                    <h1 className="text-3xl">Follow Us</h1>
                    <p className="mt-5 w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam sunt voluptates dolor corrupti veritatis, id recusandae magni sapiente dolorum eum soluta blanditiis libero quisquam est molestiae corporis. Blanditiis, fugit!</p>
                    <div className="flex mt-5 gap-5">
                        <Instagram />
                        <Twitter />
                        <Facebook />
                        <Github />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About