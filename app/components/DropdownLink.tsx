"use client"

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import { useState } from "react"

interface option{
    name: string;
    link: string;
}

export default function DropdownLink({name, options} : {name: string, options: option[]}) {
    const [active, setActive] = useState(false);

    return(
        <div className="w-full relative">
            <button 
                className="bg-none outline-none border-none flex gap-2 items-center"
                onClick={() => setActive(!active)}
            >
                <p>{name}</p>
                <FontAwesomeIcon icon={active ? faChevronUp : faChevronDown} />
            </button>
            <div className={`absolute w-max top-[140%] flex-col overflow-hidden rounded-md border-[1px] border-gray-700 dark:bg-[#0a0a0a] bg-white ${active ? "flex" : "hidden"}`}>
                {options.map((option, i) => (
                    <Link 
                        key={i}
                        href={option.link} 
                        className="py-2 px-3 hover:bg-blue-500 duration-200"
                    >
                        {option.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}