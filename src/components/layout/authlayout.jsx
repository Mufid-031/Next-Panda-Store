import Link from "next/link"
import BgBottom from "../elements/background/bgbottom"
import BgTop from "../elements/background/bgtop"

const AuthLayout = (Props) => {

    const { children, type } = Props

    return (
        <div className="flex w-full h-screen justify-center items-center bg-[#1a1a1a] relative overflow-hidden">
            <BgTop />
            <div className="flex flex-col p-5 rounded-lg hover:shadow-lg z-10 animate-opacition">
                {type === "login" ? <h1 className="text-4xl text-lime-500 font-bold">Login</h1> : <h1 className="text-4xl text-lime-500 font-bold">Register</h1>}
                <p className="text-xl mt-3 text-slate-200">welcome back, please enter your details</p>
                {children}
                {type === 'login' ? <p className="text-slate-200 mt-5 text-center">
                    Don&apos;t have an account?{" "}
                    <Link className="text-lime-500" href="/register">
                        Register
                    </Link>
                </p> : <p className="text-slate-200 mt-5 text-center">
                    Already have an account?{" "}
                    <Link className="text-lime-500" href="/login">
                        Login
                    </Link>
                </p>}
            </div>
            <BgBottom />
        </div>
    )
}

export default AuthLayout