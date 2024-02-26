import App from "@/components/layout/app"
import Image from "next/image"
import { useRouter } from "next/router"


const ProductsServer = ({ productsData }) => {

    const router = useRouter()

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    }

    console.log(router)

    return (
        <App>
            <section className="flex flex-wrap justify-center items-center w-full gap-5 bg-[#1a1a1a] pb-20 px-20 lg:px-0 relative">
                <div className="w-full lg:w-3/4 h-full relative z-20">
                    <p className="text-lime-500 text-4xl font-bold text-center absolute right-96 top-60 z-10">panda</p>
                    <h1 className="text-[100px] lg:text-[200px] font-bold text-center text-white my-40 drop-shadow-[0_0_10px_#84cc16] z-30">sneakers</h1>
                    <p className="text-lime-500 text-5xl font-bold text-center absolute bottom-44 left-64">store</p>
                    <svg className="absolute bottom-0 lg:-bottom-28 -z-10 w-[60%]" preserveAspectRatio="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="gray" d="M35,-59.6C41.7,-56.8,40.8,-39.9,43.8,-27.7C46.7,-15.4,53.5,-7.7,51.7,-1C49.9,5.6,39.6,11.2,36.8,23.9C34,36.5,38.9,56.1,34,57.4C29.1,58.7,14.6,41.6,-0.5,42.4C-15.5,43.2,-30.9,61.8,-36.5,60.9C-42,60,-37.7,39.6,-40.9,26.2C-44.1,12.8,-54.9,6.4,-60.2,-3C-65.5,-12.5,-65.2,-25,-61.8,-38.1C-58.4,-51.2,-51.9,-65,-41.1,-65.4C-30.3,-65.8,-15.2,-52.8,-0.5,-52C14.2,-51.1,28.4,-62.4,35,-59.6Z" transform="translate(100 100)" />
                    </svg>
                </div>
                {
                    productsData && productsData.map((item, index) => {
                        return (
                            <div onClick={() => router.push(`/products/${item.id}`)} key={index} className="w-full lg:w-1/4 h-[600px] shadow-lg rounded-lg text-center mt-10 bg-slate-200 overflow-hidden z-10">
                                <img className="w-full h-[430px] mx-auto mb-6" src={item.img} alt="panda" />
                                <h3 className="text-lg font-semibold mb-3">{item.name}...</h3>
                                <p className="text-sm mb-5">Category: {item.category}</p>
                                <div className="flex justify-between items-center mt-3">
                                    <h4 className="text-lg font-semibold pl-7">{rupiah(item.price)}</h4>
                                    <button className="bg-slate-400 hover:bg-lime-500 hover:text-slate-800 transition duration-500 rounded-md mr-7 px-7 py-1">Buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </App>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/firebase')
    const response = await res.json()


    return {
        props: {
            productsData: response
        }
    }
}


export default ProductsServer