import AuthLayout from "@/components/layout/authlayout";
import FormInput from "@/components/fragments/auth"
import Link from "next/link"
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {

    const { push, query } = useRouter();
    const callbackUrl = query?.callbackUrl || "/";
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
                callbackUrl: callbackUrl
            })

            if (!res?.error) {
                setIsLoading(false);
                setEmail("");
                setPassword("");
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError("Email or password is incorrect");
            }
        } catch (error) {
            setIsLoading(false);
            setError("Email or password is incorrect");

            console.log(error);
        }
    }


    return (
        <AuthLayout type="login">
            <form className="flex flex-col my-5 relative" onSubmit={handleLogin}>
                <FormInput type="email" name="email" placeholder="example@gmail.com" htmlFor="email" value="Email" inputValue={email} setInputValue={setEmail} />
                <FormInput type={showPassword ? "text" : "password"} name="password" placeholder="Password" htmlFor="password" value="Password" inputValue={password} setInputValue={setPassword} />
                {showPassword ? <FaEye size={20} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                <p className="text-slate-200">
                    Forgot your <span className="text-lime-500">password?</span>
                </p>
                <button className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" type="submit">
                    Login
                </button>
            </form>
        </AuthLayout>
    )
}

export default Login