"use client"

import Input from "@/app/components/Input";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChapterList from "../ChapterList";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface ChapterProps {
    chapterSlug: string,
    chapterNum: string, 
    chapterDate: string,
    downloadLink: string
}

export default function ChaptersSection({chapters} : {chapters: ChapterProps[]}) {
    const [searchValue, setSearchValue] = useState("");
    const [filteredChapters, setFilteredChapters] = useState(chapters);
    
    const debouncedSearch = useDebouncedCallback((value) => {
        const filtered = chapters.filter((chapter) =>
            chapter.chapterNum.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredChapters(filtered);
    }, 500);
    
    useEffect(() => {
        debouncedSearch(searchValue);
    }, [searchValue, debouncedSearch]);

    return(
        <div className="mt-8 p-5 rounded-lg dark:bg-gray-900">
            <div className="flex items-center gap-2 mb-3">
                <FontAwesomeIcon icon={faList} />
                <h4 className="font-semibold">Daftar Chapter</h4>
            </div>
            <Input
                type="text"
                name="search"
                id="searchChapter"
                className="w-full text-white focus:outline-none dark:bg-gray-700"
                placeholder="Cari Chapter; Contoh: 13"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <ChapterList chapters={filteredChapters} />
        </div>
    )
}