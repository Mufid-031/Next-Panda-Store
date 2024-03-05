import FormInput from "@/components/fragments/formInput"
import Auth from "@/components/layout/auth"
import Link from "next/link"


const Register = () => {


    return (
        <Auth type="register">
            <form className="flex flex-col my-5" action="">
                <FormInput type="email" name="email" placeholder="example@gmail.com" htmlFor="email" value="Email" />
                <FormInput type="password" name="password" placeholder="*****" htmlFor="password" value="Password" />
                <FormInput type="password" name="password" placeholder="*****" htmlFor="password" value="Confirm Password" />
                <Link className="bg-slate-500 p-2 rounded-md mt-5 font-bold text-lg text-center text-slate-300 hover:bg-lime-500 hover:text-slate-900 transition duration-700" href="/login">
                    Register
                </Link>
            </form>
        </Auth>
    )
}

export default Register