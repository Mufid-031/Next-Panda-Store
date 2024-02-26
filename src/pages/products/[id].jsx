import App from "@/components/layout/app"
import { useRouter } from "next/router"


const ProductDetails = ({ product }) => {

    const router = useRouter()

    console.log(router)
    return (
        <App>
            <section className="w-full flex justify-center items-center pb-36 bg-[#1a1a1a]">
                <div className="w-full flex justify-center items-center mt-20">
                    <div className="w-1/4 h-3/4 border-2 p-4 rounded-lg">
                        <img className="w-full" src={product.img} alt="" />
                    </div>
                    <div className="w-2/4 h-96 border-2 p-4 rounded-lg">
                        <h1 className="text-3xl font-semibold text-slate-100 text-center mb-10">{product.name}</h1>
                        <p className="text-lg text-slate-100 mb-14">Category: {product.category}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-4xl text-slate-100">${product.price}</p>
                            <button className="bg-slate-500 hover:bg-lime-500 hover:text-slate-800 transition duration-500 rounded-lg mr-7 px-10 py-2">Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </App>
    )
}

export async function getServerSideProps({ query }) {

    const id = query.id

    const res = await fetch("http://localhost:3000/api/id")
    const response = await res.json()

    return {
        props: {
            product: response
        }
    }
}

export default ProductDetails