const Auth = (Props) => {

    const { children, type } = Props

    return (
        <div className="flex w-full h-screen justify-center items-center bg-[#1a1a1a]">
            <div className="flex flex-col bg-slate-600 p-5 rounded-lg hover:shadow-lg hover:shadow-lime-500 hover:scale-[1.1] transition duration-500">
                {type === "login" ? <h1 className="text-4xl text-lime-500 font-bold">Login</h1> : <h1 className="text-4xl text-lime-500 font-bold">Register</h1>}
                <p className="text-xl mt-3 text-slate-200">welcome back, please enter your details</p>
                {children}
                {type === 'login' ? <p className="text-slate-200 mt-5 text-center">
                    Don&apos;t have an account?{" "}
                    <a className="text-lime-500" href="/register">
                        Register
                    </a>
                </p> : <p className="text-slate-200 mt-5 text-center">
                    Already have an account?{" "}
                    <a className="text-lime-500" href="/login">
                        Login
                    </a>
                </p>}
            </div>
        </div>
    )
}

export default Auth