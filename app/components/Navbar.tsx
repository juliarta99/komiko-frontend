import Link from "next/link";
import SearchInput from "./SearchInput";

export default function Navbar() {
    return (
        <nav className="shadow-lg fixed w-full top-0 dark:bg-[#0a0a0a] bg-white z-[9999]">
            <div className="container mx-auto flex justify-between py-3 items-center">
                <Link href={"/"} className="font-bold text-xl">Komiko</Link>
                <ul className="flex gap-4">
                    <li>
                        <Link className="hover:text-blue-300 duration-300" href={"/comic"}>Comic</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-300 duration-300" href={""}>Genres</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-300 duration-300" href={""}>Category</Link>
                    </li>
                </ul>
                <SearchInput />
            </div>
        </nav>
    )
}