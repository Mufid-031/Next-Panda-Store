import Image from "next/image"
import Link from "next/link"

const Menu = (Props) => {

    const { isOpen } = Props
    const menu = ['Home', 'Products', 'Category', 'About']

    return (
        <div className={`absolute right-0 -bottom-96 bg-[#1a1a1a] w-1/3 h-96 lg:static lg:h-7 lg:bg-transparent lg:translate-x-0 transition duration-500 ${isOpen ? "translate-x-0" : "translate-x-full transition duration-500"}`}>
            <ul className="flex flex-col pl-14 justify-between h-full text-slate-200 lg:pl-0">
                <li className="mt-10 lg:mt-0">
                    <ul className="flex flex-col justify-evenly h-1/3 lg:flex-row mt-3 lg:mt-0">
                        {
                            menu.map((item, index) => {
                                return (
                                    <li className="text-base font-semibold hover:text-lime-500 cursor-pointer mb-4 lg:mb-0" key={index}><Link href={`/${toLowerCase(item)}`}>{item}</Link></li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className="flex items-center pb-3 lg:hidden">
                    <div className="w-7 h-7 bg-slate-200 rounded-full -ml-10">
                        <Image src="" alt="" />
                    </div>
                    <h3 className="text-lime-500 text-lg font-semibold ml-2">Mufid Risqi</h3>
                </li>
            </ul>
        </div>
    )
}

export default Menu