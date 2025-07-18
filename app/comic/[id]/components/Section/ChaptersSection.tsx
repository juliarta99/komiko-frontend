"use client"

import Input from "@/app/components/Input";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChapterList from "../ChapterList";
import { useCallback, useEffect, useState } from "react";

interface ChapterProps {
    chapterSlug: string,
    chapterNum: string, 
    chapterDate: string,
    downloadLink: string
}

export default function ChaptersSection({ chapters } : {chapters: ChapterProps[]}) {
    const [searchValue, setSearchValue] = useState("");
    const [filteredChapters, setFilteredChapters] = useState(chapters);
    
    const getChapters = useCallback((value: string) => {
        if(value) {
            const filtered = chapters.filter((chapter) => {
                const chapterNumberOnly = chapter.chapterNum.toLowerCase().replace(/chapter\s*/i, '').trim();
                return chapterNumberOnly === value.toLocaleLowerCase();
            });
            setFilteredChapters(filtered);
        } else {
            setFilteredChapters(chapters);
        }
    }, [chapters]);

    useEffect(() => {
        getChapters(searchValue);
    }, [searchValue, getChapters]);

    return(
        <div className="mt-8 p-5 rounded-lg bg-gray-900">
            <div className="flex items-center gap-2 mb-3">
                <FontAwesomeIcon icon={faList} />
                <h4 className="font-semibold">Daftar Chapter</h4>
            </div>
            <Input
                type="text"
                name="search"
                id="searchChapter"
                className="w-full text-white focus:outline-none bg-gray-700"
                placeholder="Cari Chapter; Contoh: 13"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {filteredChapters.length > 0 ? 
                <ChapterList chapters={filteredChapters} />
                : <p className="mt-5 text-center font-semibold">Chapter Tidak Ditemukan!</p>
            }
        </div>
    )
}