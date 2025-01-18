import Link from "next/link";
import SearchInput from "./SearchInput";
import DropdownLink from "./DropdownLink";

export default function Navbar({isFixed = true} : {isFixed?: boolean}) {
    const optionsOrder = [
        {
            name: "Terpopuler",
            link: "/comic/order/popular"
        },
        {
            name: "On Going",
            link: "/comic/order/ongoing"
        },
        {
            name: "Rilisan Terbaru",
            link: "/comic/order/update"
        },
        {
            name: "Seri Baru",
            link: "/comic/order/latest"
        },
    ]

    const optionsCategory = [
        {
            name: "Manhwa",
            link: "/category/manhwa"
        },
        {
            name: "Manga",
            link: "/category/manga"
        },
        {
            name: "Manhua",
            link: "/category/manhua"
        },
        {
            name: "Comic",
            link: "/category/comic"
        },
    ]

    return (
        <nav className={`shadow-lg ${isFixed ? "fixed" : "relative"} w-full top-0 dark:bg-[#0a0a0a] bg-white z-[9999]`}>
            <div className="container mx-auto flex justify-between py-3 items-center">
                <Link href={"/"} className="font-bold text-xl">Komiko</Link>
                <ul className="flex gap-4">
                    <li>
                        <Link className="hover:text-blue-300 duration-300" href={"/comic"}>Semua</Link>
                    </li>
                    <li>
                        <DropdownLink name="Berdasarkan" options={optionsOrder} />
                    </li>
                    <li>
                        <DropdownLink name="Kategori" options={optionsCategory} />
                    </li>
                </ul>
                <SearchInput />
            </div>
        </nav>
    )
}