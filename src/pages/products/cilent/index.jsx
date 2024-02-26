import App from "@/components/layout/app"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const Products = () => {

    const [productsData, setProductsData] = useState([])
    const router = useRouter()

    useEffect(() => {
        const data = fetch('../api/firebase')
            .then(res => res.json())
            .then(json => setProductsData(json))
    }, [])

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    }


    return (
        <App>
            <section className="flex flex-wrap justify-center items-center w-full gap-5 bg-[#1a1a1a] pb-20 px-20 lg:px-0 relative">
                {
                    productsData && productsData.map((item, index) => {
                        return (
                            <div onClick={() => router.push(`/products/client/${item.id}`)} key={index} className="w-full lg:w-1/4 h-[600px] shadow-lg rounded-lg text-center mt-10 bg-slate-200 overflow-hidden z-10">
                                <img className="w-full h-[430px] mx-auto mb-6" src={item.img} alt="panda" />
                                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
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

export default Products