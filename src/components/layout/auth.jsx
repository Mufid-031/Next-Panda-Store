import Link from "next/link"

const Auth = (Props) => {

    const { children, type } = Props

    return (
        <div className="flex w-full h-screen justify-center items-center bg-[#1a1a1a] relative overflow-hidden">
            <svg className="absolute top-0 lg:-top-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#84cc16" fill-opacity="1" d="M0,288L1440,32L1440,0L0,0Z"></path></svg>
            <div className="flex flex-col p-5 rounded-lg hover:shadow-lg z-10">
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
            <svg className="absolute bottom-0 lg:-bottom-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#84cc16" fill-opacity="1" d="M0,288L1440,32L1440,320L0,320Z"></path></svg>
        </div>
    )
}

export default Auth