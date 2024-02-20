import { useEffect, useState } from "react";
import Menu from "../elements/menu/menu";
import Hamburger from "../elements/menu/hamburger";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsScroll(true)
                if (isScroll) {
                    document.querySelector("nav").classList.remove("relative")
                    document.querySelector("nav").classList.add("fixed")
                    document.querySelector("nav").classList.add("top-0")
                    document.querySelector("nav").classList.add("right-0")
                    document.querySelector("nav").classList.add("bottom-0")
                }
            } else {
                setIsScroll(false)
                if (isScroll) {
                    document.querySelector("nav").classList.add("relative")
                    document.querySelector("nav").classList.remove("fixed")
                    document.querySelector("nav").classList.remove("top-0")
                    document.querySelector("nav").classList.remove("right-0")
                    document.querySelector("nav").classList.remove("bottom-0")
                }
            }
        })
    }, [isScroll])

    return (
        <nav className="flex w-full h-14 justify-between items-center bg-[#1a1a1a] relative lg:justify-around z-50">
            <div>
                <h3 className="text-lime-500 text-lg font-semibold pl-1">Next_Panda_Store</h3>
            </div>
            <Menu isOpen={isOpen} />
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
    )
}

export default Navbar