"use client"

import Input from "@/app/components/Input";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import TitleWithIcon from "../TitleWithIcon";
import GenreList from "../GenreList";

interface Genre {
    label: string,
    value: string
}

export default function GenreWithSearchSection({genres} : {genres: Genre[]}) {
    const [searchValue, setSearchValue] = useState("");
    const [filteredGenres, setFilteredGenres] = useState(genres);
    
    const getGenres = (value: string) => {
        const filtered = genres.filter((genre) =>
            genre.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredGenres(filtered);
    };
    
    useEffect(() => {
        getGenres(searchValue);
    }, [searchValue]);

    return(
        <div className="p-5 rounded-lg bg-gray-900 h-max">
            <TitleWithIcon icon={faLayerGroup} title="Genre" />
            <Input
                type="text"
                name="search"
                id="searchGenre"
                className="w-full text-white focus:outline-none bg-gray-700 my-3 text-xs"
                placeholder="Cari Genre Kesukaan Anda"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            {filteredGenres.length > 0 ?
                <GenreList genres={filteredGenres} />
                : <p className="mt-5 text-center font-semibold">Genre Tidak Ditemukan!</p>    
            }
        </div>
    )
}