import AuthLayout from "@/components/layout/authlayout";
import FormInput from "@/components/fragments/auth";
import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/lib/firebase/service";


async function addDataToFireStore(email, password) {
    try {
        const docRef = await addDoc(collection(firestore, "users"), {
            email: email,
            password: password
        });

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const Register = () => {

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");



    const handleRegister = async (e) => {
        e.preventDefault();
        const add = await addDataToFireStore(email, password1);
        if (add) {
            setEmail("");
            setPassword1("");
            setPassword2("");
            router.push("/login");
        }
    }


    return (
        <AuthLayout type="register">
            <form className="flex flex-col my-5 relative" onSubmit={handleRegister}>
                <FormInput type="text" name="email" id="email" placeholder="example@gmail.com" htmlFor="email" value="Email" inputValue={email} setInputValue={setEmail} />
                <FormInput type={showPassword ? "text" : "password"} name="password1" id="password1" placeholder="*****" htmlFor="password" value="Password" inputValue={password1} setInputValue={setPassword1} />
                {showPassword ? <FaEye size={20} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[150px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />}
                <FormInput type={showPassword1 ? "text" : "password"} name="password2" id="password2" placeholder="*****" htmlFor="password" value="Confirm Password" inputValue={password2} setInputValue={setPassword2} />
                {showPassword1 ? <FaEye size={20} className="absolute right-2 top-[247px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword1(!showPassword1)} /> : <IoMdEyeOff size={22} className="absolute right-2 top-[247px] opacity-50 hover:opacity-100 cursor-pointer" onClick={() => setShowPassword1(!showPassword1)} />}
                <button className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" type="submit">
                    Register
                </button>
            </form>
        </AuthLayout>
    )
}

export default Register;