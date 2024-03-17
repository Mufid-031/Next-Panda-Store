import App from "@/components/layout/app";
import { useRouter } from "next/router";
import { getFirestore } from "firebase/firestore";
import app from "@/lib/firebase/init";
import { retrieveDataById } from "@/lib/firebase/service";
import { rupiah } from "@/currency";

const ProductDetails = ({ product }) => {

    const router = useRouter();

    return (
        <App>
            <section className="w-full flex justify-center items-center pb-36 bg-[#1a1a1a]">
                <div className="w-1/2 flex flex-col justify-center items-center mt-5">
                    <div className="w-1/2 h-96">
                        <img className="w-full h-full" src={product.img} alt={product.name} />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-3xl font-semibold text-slate-100 text-center mb-3 mt-3">{product.name}</h1>
                        <p className="text-lg text-slate-100 text-center mb-10">{product.category}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl text-slate-100">{rupiah(product.price)}</p>
                            <button className="bg-slate-500 hover:bg-lime-500 hover:text-slate-800 transition duration-500 rounded-lg mr-7 px-10 py-2">Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </App>
    )
}

export async function getServerSideProps({ query }) {

    const { id } = query;
    const db = getFirestore(app);

    retrieveDataById(db, "products", id);

    return {
        props: {
            product: await retrieveDataById(db, "products", id)
        }
    }

}

export default ProductDetails;