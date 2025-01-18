import { getComicResponse } from "@/app/libs/api";
import Header from "../../components/Header/HeaderSectionAnimeList";
import ComicList from "../../components/ComicList";
import Link from "next/link";
import Button from "../../components/Button";

export default async function ComicWithPaginationSection({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const search = searchParams?.search;
    const page = searchParams?.page;

    const endpoint = search
        ? page
            ? `/search/${search}/page/${page}`
            : `/search/${search}`
        : page
        ? `/comic?page=${page}`
        : `/comic`;

    const comics = await getComicResponse(endpoint);

    return (
        <section className="py-5">
            <Header
                title="Baca Komik Kesukaan Anda"
            />
            <ComicList comics={comics.data.results} />
            <div className="mt-5 flex justify-between">
                <Link href={`${comics.data.prevPage}`}>
                    <Button children="Prev" disabled={comics.data.prevPage ? false : true} />
                </Link>
                <Link href={`${comics.data.nextPage}`}>
                    <Button children="Next" disabled={comics.data.nextPage ? false : true} />
                </Link>
            </div>
        </section>
    )
}