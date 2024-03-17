import FormInput from "@/components/fragments/formInput";
import Auth from "@/components/layout/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = async (event) => {
        setError(null);
        event.preventDefault()
        console.log(email, passwordOne, passwordTwo)
        if (passwordOne === passwordTwo) {
            await createUserWithEmailAndPassword(email, passwordOne)
                .then(authUser => {
                    console.log(authUser);
                    event.terget.reset()
                })
                .catch(error => {
                    console.log(error.message)
                });
        } else {
            setError("Passwords do not match");
        }

    }


    return (
        <Auth type="register">
            <form className="flex flex-col my-5" onSubmit={(event) => handleRegister(event)}>
                <FormInput type="text" onChange={(event) => setEmail(event.target.value)} name="email" id="email" placeholder="example@gmail.com" htmlFor="email" value="Email" />
                <FormInput type="password" onChange={setPasswordOne} name="password1" id="password1" placeholder="*****" htmlFor="password" value="Password" />
                <FormInput type="password" onChange={(event) => setPasswordTwo(event.target.value)} name="password2" id="password2" placeholder="*****" htmlFor="password" value="Confirm Password" />
                <Link className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" type="submit" href={`${error === null ? "/register" : "/register"}`}>
                    Register
                </Link>
            </form>
        </Auth>
    )
}

export default Register;