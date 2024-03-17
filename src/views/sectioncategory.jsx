import { useRouter } from "next/router"

const SectionCategory = ({ productsData0, productsData1, productsData2, category, rupiah }) => {

    const router = useRouter()

    return (
        <>
            <div className="w-full h-screen relative z-20 flex justify-center items-center">
                <h2 className="text-[100px] font-bold drop-shadow-[0_0_10px_#84cc16] text-slate-50">{category} Category</h2>
            </div>
            <div className="w-full h-full flex flex-wrap gap-5 justify-center">
                {
                    category === "Men's" ? productsData0 && productsData0.map((item, index) => {
                        return (
                            <div data-aos="zoom-in-up" onClick={() => router.push(`/products/${item.id}`)} key={index} className="w-full lg:w-1/4 h-[550px] shadow-lg rounded-lg text-center mt-10 bg-slate-200 overflow-hidden z-10">
                                <img className="w-full h-[380px] mx-auto mb-6" src={item.img} alt="panda" />
                                <h3 className="text-lg font-semibold mb-3">{item.name}...</h3>
                                <p className="text-sm mb-5">Category: {item.category}</p>
                                <div className="flex justify-between items-center mt-3 mb-10">
                                    <h4 className="text-lg font-semibold pl-7">{rupiah(item.price)}</h4>
                                    <button className="bg-slate-400 hover:bg-lime-500 hover:text-slate-800 transition duration-500 rounded-md mr-7 px-7 py-1">Buy</button>
                                </div>
                            </div>
                        )
                    }) : productsData1 && productsData1.map((item, index) => {
                        return (
                            <div data-aos="zoom-in-up" onClick={() => router.push(`/products/${item.id}`)} key={index} className="w-full lg:w-1/4 h-[550px] shadow-lg rounded-lg text-center mt-10 bg-slate-200 overflow-hidden z-10">
                                <img className="w-full mx-auto mb-6" src={item.img} alt="panda" />
                                <h3 className="text-lg font-semibold mb-3">{item.name}...</h3>
                                <p className="text-sm mb-5">Category: {item.category}</p>
                                <div className="flex justify-between items-center mt-3 mb-10">
                                    <h4 className="text-lg font-semibold pl-7">{rupiah(item.price)}</h4>
                                    <button className="bg-slate-400 hover:bg-lime-500 hover:text-slate-800 transition duration-500 rounded-md mr-7 px-7 py-1">Buy</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SectionCategory

