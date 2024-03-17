import App from "@/components/layout/app"
import Image from "next/image"
import Shoes from "../../../public/shoes4.png"
import { useRouter } from "next/router"
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { rupiah } from "@/currency"
import ProductView from "@/views/productview/productview"


const ProductsServer = ({ productsData }) => {

    const router = useRouter()

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <App>
            <section className="flex flex-wrap justify-center items-center w-full gap-5 bg-[#1a1a1a] pb-20 px-20 lg:px-0 relative">
                <div className="w-full lg:w-3/4 h-full -ml-20 lg:ml-0 relative z-20">
                    <p className="text-lime-500 text-2xl lg:text-4xl font-bold text-center absolute -right-0 top-44 lg:right-80 lg:top-60 z-10 animate-slideTop">panda</p>
                    <h1 className="text-[100px] lg:text-[200px] font-bold text-start lg:text-center text-white my-40 drop-shadow-[0_0_10px_#84cc16] z-30 animate-scaleUp">sneakers</h1>
                    <p className="text-lime-500 text-2xl lg:text-4xl font-bold text-center absolute top-72 left-10 lg:top-96 lg:left-64 animate-slideBottom">store</p>
                    <Image className="absolute -z-10 top-28 drop-shadow-[0_0_10px_#fff] animate-scaleUp" width={500} height={500} src={Shoes} alt="" />
                    {/* <Lottie className="absolute top-60 -right-32 lg:top-72 lg:right-10 w-1/3 lg:w-1/5 animate-slideTop" animationData={animationData} loop={true} /> */}
                </div>
                <div className="w-full h-full flex flex-wrap gap-5 justify-center">
                    <ProductView productsData={productsData} />
                </div>
            </section>
        </App>
    )
}



export async function getServerSideProps() {
    const res = await fetch(`${process.env.PATHNAME}/api/firebase`)
    const response = await res.json()


    return {
        props: {
            productsData: response,
        }
    }
}

export default ProductsServer