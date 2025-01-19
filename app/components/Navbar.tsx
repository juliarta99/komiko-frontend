"use client"

import Link from "next/link";
import SearchInput from "./SearchInput";
import DropdownLink from "./DropdownLink";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

    const [active, setActive] = useState(false);

    return (
        <nav className={`shadow-lg ${isFixed ? "fixed" : "relative"} w-full top-0 bg-[#0a0a0a] z-[9999]`}>
            <div className="container mx-auto flex justify-between py-3 items-center">
                <Link href={"/"} className="font-bold text-xl">Komiko</Link>
                <ul className={`${active ? "fixed flex flex-col w-full bg-slate-800 top-0 left-0 p-[1rem]" : "hidden"} md:!static md:!p-0 md:!flex-row md:flex md:!bg-transparent gap-4 md:justify-center md:items-center`}>
                    <Button 
                        children={<FontAwesomeIcon className="w-4 text-white" icon={faXmark}/>}
                        className="!bg-red-500 !p-2 w-10 h-10 flex items-center justify-center md:hidden absolute top-[1rem] right-[1rem]"
                        onClick={() => {setActive(false)}}
                    />
                    <li className="mr-[1.5rem] lg:mr-0">
                        <Link className="hover:text-blue-300 duration-300" href={"/comic"}>Semua</Link>
                    </li>
                    <li>
                        <DropdownLink name="Berdasarkan" options={optionsOrder} />
                    </li>
                    <li>
                        <DropdownLink name="Kategori" options={optionsCategory} />
                    </li>
                </ul>
                <div className="flex items-center gap-2">
                    <SearchInput />
                    <Button onClick={() => setActive(!active)} className="!p-2 w-10 h-10 flex md:hidden items-center justify-center">
                        <FontAwesomeIcon icon={active ? faXmark : faBars} />
                    </Button>
                </div>
            </div>
        </nav>
    )
}