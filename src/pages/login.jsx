import AuthLayout from "@/components/layout/authlayout";
import FormInput from "@/components/fragments/auth"
import Link from "next/link"
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <AuthLayout type="login">
            <form className="flex flex-col my-5 relative">
                <FormInput type="email" name="email" placeholder="example@gmail.com" htmlFor="email" value="Email" />
                <FormInput type={showPassword ? "text" : "password"} name="password" placeholder="Password" htmlFor="password" value="Password" />
                {showPassword ? <FaEye size={20} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                <p className="text-slate-200">
                    Forgot your <span className="text-lime-500">password?</span>
                </p>
                <Link className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" href="/home">
                    Login
                </Link>
            </form>
        </AuthLayout>
    )
}

export default Login