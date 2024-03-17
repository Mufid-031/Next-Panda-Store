import { rupiah } from "@/currency"
import { useRouter } from "next/router";

const ProductView = ({ productsData }) => {

    const router = useRouter();

    return (
        <div className="w-full h-full flex flex-wrap gap-5 justify-center">
            {
                productsData && productsData.map((item, index) => {
                    return (
                        <div data-aos="zoom-in-up" onClick={() => router.push(`/products/${item.id}`)} key={index} className="w-full lg:w-1/4 h-[550px] shadow-lg rounded-lg text-center mt-10 bg-slate-200 overflow-hidden z-10">
                            <img className="w-full h-[380px] mx-auto mb-6" src={item.img} alt="panda" />
                            <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                            <p className="text-sm mb-5">{item.category}</p>
                            <div className="flex justify-between items-center mt-3">
                                <h4 className="text-lg font-semibold pl-7">{rupiah(item.price)}</h4>
                                <button className="bg-slate-400 hover:bg-lime-500 hover:text-slate-800 transition duration-500 rounded-md mr-7 px-7 py-1">Buy</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductView