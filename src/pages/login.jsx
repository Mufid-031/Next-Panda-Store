import AuthLayout from "@/components/layout/authlayout";
import FormInput from "@/components/fragments/auth"
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {

    const { data } = useSession();
    console.log(data);

    const { push, query } = useRouter();

    const callbackUrl = query.callbackUrl || "/home";
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const form = e.target;
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
                callbackUrl
            })

            if (!res?.error) {
                setIsLoading(false);
                form.reset();
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError(res.error);
            }

        } catch (error) {
            setIsLoading(false);
            setError("Email or password is incorrect");
        }
    };


    return (
        <AuthLayout type="login">
            <form className="flex flex-col my-5 relative" onSubmit={handleLogin}>
                <FormInput type="email" placeholder="example@gmail.com" value="Email" inputValue={email} setInputValue={setEmail} />
                <FormInput type={showPassword ? "text" : "password"} placeholder="Password" value="Password" inputValue={password} setInputValue={setPassword} />
                {showPassword ? <FaEye size={20} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                <p className="text-slate-200">
                    Forgot your <span className="text-lime-500 cursor-pointer">password?</span>
                </p>
                <button className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" type="submit">
                    Login
                </button>
                <button className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" onClick={() => signIn("google")}>Login with Google</button>
            </form>
        </AuthLayout>
    )
}

export default Login