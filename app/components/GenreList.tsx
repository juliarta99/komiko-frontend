import { Key } from "react";
import LinkButton from "./LinkButton";

interface Genre {
    label: string,
    value: string
}

export default function GenreList({genres}: {genres: Genre[]}) {
    return(
        <>
            <div className="grid grid-cols-2 gap-3">
                {genres.map((genre: Genre, i: Key) => (
                    <LinkButton classNameButton="w-full h-full" key={i} link={`/genre/${genre.value}`} name={genre.label} />
                ))}
            </div>
        </>
    )
}