import BgBottom from "@/components/elements/background/bgbottom"
import BgTop from "@/components/elements/background/bgtop"
import App from "@/components/layout/app"
import { useEffect, useState } from "react"


const Products = () => {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProductsData(json))
    }, [])


    return (
        <App>
            <div className="flex flex-wrap justify-center items-center w-full gap-5 bg-[#1a1a1a] pb-20 px-20 lg:px-0 relative">
                <BgTop />
                {
                    productsData && productsData.map((item, index) => {
                        return (
                            <div key={index} className="w-full lg:w-1/4 h-[500px] shadow-lg rounded-lg text-center mt-10 bg-slate-300 overflow-hidden z-10">
                                <img className="w-full h-[300px] mx-auto mb-6" src={item.image} alt="panda" />
                                <h3 className="text-lg font-semibold mb-3">{item.title.substring(0, 20) + '...'}</h3>
                                <p className="text-sm mb-5">{item.description.substring(0, 100)}</p>
                                <div className="flex justify-between items-center mt-3">
                                    <h4 className="text-lg font-semibold pl-7">${item.price}</h4>
                                    <button className="bg-slate-500 hover:bg-lime-500 hover:text-slate-800 transition duration-500 rounded-lg mr-7 px-5 py-1">Buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </App>
    )
}

export default Products