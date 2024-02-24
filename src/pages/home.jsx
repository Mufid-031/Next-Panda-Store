import Main from "@/components/fragments/main";
import Question from "@/components/fragments/question";
import GetWaves from "@/components/elements/getwaves/getwaves";
import About from "@/components/fragments/about";
import App from "@/components/layout/app";

const Home = () => {

    return (
        <div className="overflow-hidden">
            <App>
                <Main />
                <Question />
                <GetWaves />
                <About />
            </App>
        </div>
    )
}

export default Home