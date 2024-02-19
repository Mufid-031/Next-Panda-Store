import Navbar from "@/components/fragments/navbar"
import Lottie from "lottie-react";
import animationData from "@/lottie/Animation - 1708272545598"

const Products = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <Navbar />
            <Lottie
                options={defaultOptions}
                height={800}
                width={800}
            />

        </>
    )
}

export default Products