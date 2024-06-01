import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = (Props) => {
  const { isOpen } = Props;
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className={`absolute right-0 -bottom-96 bg-[#1a1a1a] w-1/3 h-96 lg:static lg:h-7 lg:bg-transparent lg:translate-x-0 transition duration-500 ${isOpen ? "translate-x-0" : "translate-x-full transition duration-500"}`}>
      <ul className="flex flex-col pl-14 justify-between h-full lg:pl-0">
        <li className="mt-10 lg:mt-0">
          <ul className={`flex flex-col justify-evenly h-1/3 lg:flex-row mt-3 lg:mt-0`}>
            <li className={`text-base font-semibold ${pathname === "/home" ? "text-lime-500" : "text-slate-200"} hover:text-lime-500 cursor-pointer mb-4 lg:mb-0`}>
              <Link href="/home">Home</Link>
            </li>
            <li className={`text-base font-semibold ${pathname === "/products" ? "text-lime-500" : "text-slate-200"} hover:text-lime-500 cursor-pointer mb-4 lg:mb-0`}>
              <Link href="/products">Products</Link>
            </li>
            <li className={`text-base font-semibold ${pathname === "/category" ? "text-lime-500" : "text-slate-200"} hover:text-lime-500 cursor-pointer mb-4 lg:mb-0`}>
              <Link href="/category">Category</Link>
            </li>
            <li className={`text-base font-semibold ${pathname === "/about" ? "text-lime-500" : "text-slate-200"} hover:text-lime-500 cursor-pointer mb-4 lg:mb-0`}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </li>
        <li className="flex items-center flex-wrap pb-3 lg:hidden">
          <div className="w-7 h-7 bg-slate-200 rounded-full -ml-10">
            <Image src="" alt="" />
          </div>
          <h3 className="text-lime-500 text-lg font-semibold ml-2">Mufid Risqi</h3>
          <button className="w-20 h-8 bg-lime-500 rounded-lg text-slate-100 block lg:hidden" onClick={session?.data ? () => signOut() : () => signIn()}>{session?.data ? "Logout" : "Login"}</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
