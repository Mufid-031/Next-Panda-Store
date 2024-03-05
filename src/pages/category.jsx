import SectionCategory from "@/components/fragments/sectioncategory";
import App from "@/components/layout/app";


const Category = ({ productsData0, productsData1, productsData2 }) => {

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    }

    return (
        <App>
            <section className="flex flex-wrap justify-center items-center w-full gap-5 bg-[#1a1a1a] pb-20 px-20 lg:px-0 relative">
                <SectionCategory category="Men's" productsData0={productsData0} rupiah={rupiah} />
                <SectionCategory category="Women's" productsData1={productsData1} rupiah={rupiah} />
                {/* <SectionCategory category="Kid's" productsData2={productsData2} /> */}
            </section>
        </App>
    )
}

export default Category

export async function getServerSideProps() {


    const res0 = await fetch(`http://localhost:3000/api/men`)
    const response0 = await res0.json()
    const res1 = await fetch(`http://localhost:3000/api/firebase`)
    const response1 = await res1.json()
    // const res2 = await fetch(`http://localhost:3000/api/${category[2]}`)
    // const response2 = await res2.json()

    return {
        props: {
            productsData0: response0,
            productsData1: response1,
            // productsData2: response2
        }
    }
}