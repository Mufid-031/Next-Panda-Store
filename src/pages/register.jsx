import AuthLayout from "@/components/layout/authlayout";
import FormInput from "@/components/fragments/auth";
import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";


const Register = () => {

    const { push } = useRouter();

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const data = {
            fullname: fullname,
            email: email,
            phone: phone,
            password: password
        }

        const res = await fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

        if (res.status === 200) {
            setEmail("");
            setPassword("");
            setIsLoading(false);
            setTimeout(() => {
                push("/login");
            }, 2000);
        } else {
            setError(error?.message);
            setIsLoading(false);
        }
    }


    return (
        <AuthLayout type="register">
            <form className="flex flex-col my-5 relative" onSubmit={handleRegister}>
                <FormInput type="text" id="fullname" placeholder="jon doe" value="FullName" inputValue={fullname} setInputValue={setFullname} />
                <FormInput type="text" id="email" placeholder="example@gmail.com" value="Email" inputValue={email} setInputValue={setEmail} />
                <FormInput type="text" id="phone" placeholder="08xxxxxxx" value="Phone" inputValue={phone} setInputValue={setPhone} />
                <FormInput type={showPassword ? "text" : "password"} id="password1" placeholder="*****" value="Password" inputValue={password} setInputValue={setPassword} />
                {showPassword ? <FaEye size={20} className="absolute right-2 top-[340px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[340px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                <button className={`bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700 ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`} type="submit">
                    {isLoading ? "Loading..." : "Register"}
                </button>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
        </AuthLayout>
    )
}

export default Register;