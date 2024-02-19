import { useState } from "react";
import Menu from "../elements/menu/menu";
import Hamburger from "../elements/menu/hamburger";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex w-full h-14 justify-between items-center bg-[#1a1a1a] relative lg:justify-around">
            <div>
                <h3 className="text-lime-500 text-lg font-semibold pl-1">Next_Panda_Store</h3>
            </div>
            <Menu isOpen={isOpen} />
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
    )
}

export default Navbar