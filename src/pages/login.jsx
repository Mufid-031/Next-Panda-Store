import FormInput from "@/components/fragments/formInput"
import Auth from "@/components/layout/auth"
import Link from "next/link"

const Login = () => {
    return (
        <Auth type="login">
            <form className="flex flex-col my-5">
                <FormInput type="email" name="email" placeholder="example@gmail.com" htmlFor="email" value="Email" />
                <FormInput type="password" name="password" placeholder="Password" htmlFor="password" value="Password" />
                <p className="text-slate-200">
                    Forgot your <span className="text-lime-500">password?</span>
                </p>
                <button className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700"><Link href={"/home"}>Login</Link></button>
            </form>
        </Auth>
    )
}

export default Login