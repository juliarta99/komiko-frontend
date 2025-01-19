import Button from "@/app/components/Button";
import ComicList from "@/app/components/ComicList";
import Header from "@/app/components/Header/HeaderSectionAnimeList";
import { getComicResponse } from "@/app/libs/api";
import Link from "next/link";
import { notFound } from "next/navigation";

export type paramsType = Promise<{ category: string }>;
export type searchParamsType = Promise<{[key: string]: string | undefined }>;

interface Props{
    params: paramsType; 
    searchParams?: searchParamsType;
}

export default async function ComicWithPaginationSection({ params, searchParams }: Props) {
    const {category} = await params;
    const searchParamsObj = await searchParams;
    const page = searchParamsObj?.page;

    const allowedCategorys = ["manhwa", "manhua", "comic", "manga"];
    if (!allowedCategorys.includes(category)) {
        return notFound();
    }

    const endpoint = page
        ? `/comic?type=${category}&page=${page}`
        : `/comic?type=${category}`;

    const comics = await getComicResponse(endpoint);

    return (
        <section className="py-5">
            <Header
                title={`Daftar ${category.charAt(0).toUpperCase() + category.slice(1)}`}
            />
            <ComicList comics={comics.data.results} />
            <div className="mt-5 flex justify-between">
                <Link href={`${comics.data.prevPage}`}>
                    <Button disabled={comics.data.prevPage ? false : true}>Prev</Button>
                </Link>
                <Link href={`${comics.data.nextPage}`}>
                    <Button disabled={comics.data.nextPage ? false : true}>Next</Button>
                </Link>
            </div>
        </section>
    )
}