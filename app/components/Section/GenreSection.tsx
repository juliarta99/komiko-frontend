import { getComicResponse } from "@/app/libs/api";
import GenreWithSearchSection from "./GenreWithSearchSection";

export default async function GenreSecion() {
    const genres = await getComicResponse("/genre/all");

    return(
        <GenreWithSearchSection genres={genres.data} />
    )
    
}