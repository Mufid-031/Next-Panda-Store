import AuthLayout from "@/components/layout/authlayout";
import FormInput from "@/components/fragments/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { postData } from "@/lib/firebase/service";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";


const Register = () => {

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = {
            id: 1,
            email: e.target.email.value,
            password: e.target.password1.value
        }
        const { result, error } = await postData("users", data.id, data);

        if (result) {
            router.push('/login');
        }
    }

    return (
        <AuthLayout type="register">
            <form className="flex flex-col my-5 relative" onSubmit={(e) => { handleRegister(e) }}>
                <FormInput type="text" name="email" id="email" placeholder="example@gmail.com" htmlFor="email" value="Email" />
                <FormInput type={showPassword ? "text" : "password"} name="password1" id="password1" placeholder="*****" htmlFor="password" value="Password" />
                {showPassword ? <FaEye size={20} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                <FormInput type={showPassword1 ? "text" : "password"} name="password2" id="password2" placeholder="*****" htmlFor="password" value="Confirm Password" />
                {showPassword1 ? <FaEye size={20} className="absolute right-2 top-[247px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword1(!showPassword1)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[247px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword1(!showPassword1)} />}
                <Link className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" href="/login" type="submit">
                    Register
                </Link>
            </form>
        </AuthLayout>
    )
}

export default Register;