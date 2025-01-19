"use client"

import Image from "next/image";
import { useEffect } from "react"

interface Chapter{
    title: string,
    id: string
}

export default function ImageComicSection({images, chapter} : {images: string[], chapter: Chapter}) {
    useEffect(() => {
        const maxHistory = 4;
        const historys = JSON.parse(localStorage.getItem("read_historys") || "[]");

        const filteredHistorys = historys.filter((item: {id: string}) => item.id !== chapter.id);
        const updatedHistorys = [chapter, ...filteredHistorys];
        if(updatedHistorys.length > maxHistory) {
            updatedHistorys.pop();
        }
        localStorage.setItem("read_historys", JSON.stringify(updatedHistorys));
    }, [chapter]);

    return(
        <div className="max-w-xl w-full mx-auto mt-5">
            {images?.map((val, i) => (
                <Image 
                    key={i}
                    src={val} 
                    alt={chapter.title}
                    decoding="async"
                    className="w-full object-contain"
                />
            ))}
        </div>
    )
}