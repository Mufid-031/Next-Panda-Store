import App from "@/components/layout/app"
import { useRouter } from "next/router"


const ProductsServer = ({ productsData }) => {

    const router = useRouter()

    return (
        <App>
            <section className="flex flex-wrap justify-center items-center w-full gap-5 bg-[#1a1a1a] pb-20 px-20 lg:px-0 relative">
                {
                    productsData && productsData.map((item, index) => {
                        return (
                            <div onClick={() => router.push(`/products/${item.id}`)} key={index} className="w-full lg:w-1/4 h-[500px] shadow-lg rounded-lg text-center mt-10 bg-slate-200 overflow-hidden z-10">
                                <img className="w-full h-[300px] mx-auto mb-6" src={item.image} alt="panda" />
                                <h3 className="text-lg font-semibold mb-3">{item.title.substring(0, 20)}...</h3>
                                <p className="text-sm mb-5">{item.description.substring(0, 100)}...</p>
                                <div className="flex justify-between items-center mt-3">
                                    <h4 className="text-lg font-semibold pl-7">${item.price}</h4>
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
    const res = await fetch('http://localhost:3000/api/products')
    const response = await res.json()


    return {
        props: {
            productsData: response
        }
    }

}


export default ProductsServer