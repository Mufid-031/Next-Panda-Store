import Main from "@/components/fragments/main";
import Question from "@/components/fragments/question";
import GetWaves from "@/components/elements/getwaves/getwaves";
import About from "@/components/fragments/about/about";
import App from "@/components/layout/app";
import ContactUs from "@/components/fragments/contact";
import { useSession } from "next-auth/react";

const Home = () => {

    const {data} = useSession();

    console.log(data)

    return (
        <div className="overflow-hidden">
            <App>
                <Main />
                <Question />
                <GetWaves />
                <About />
                <ContactUs />
            </App>
        </div>
    )
}

export default Home