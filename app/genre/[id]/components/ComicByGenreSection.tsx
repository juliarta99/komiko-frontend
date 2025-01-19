import Button from "@/app/components/Button";
import ComicList from "@/app/components/ComicList";
import Header from "@/app/components/Header/HeaderSectionAnimeList";
import { getComicResponse } from "@/app/libs/api";
import Link from "next/link";

export type paramsType = Promise<{ id: string }>;
export type searchParamsType = Promise<{[key: string]: string | undefined }>;

interface Props{
    params: paramsType;
    searchParams?: searchParamsType;
}
export default async function ComicByGenreSection({ params, searchParams }: Props) {
    const {id} = await params;
    const searchParamsObj = await searchParams;
    const page = searchParamsObj?.page;

    const endpoint = page
        ? `/genre/${id}/page/${page}`
        : `/genre/${id}`;

    const comics = await getComicResponse(endpoint);

    return (
        <section className="py-5">
            <Header
                title={`Daftar Komik By Genre ${id.charAt(0).toUpperCase() + id.slice(1)}`}
            />
            <ComicList comics={comics.data.results} />
            {comics.data.pagination &&
                <div className="flex items-center gap-2 mt-5 flex-wrap">
                    {comics.data.pagination?.map((pagination: {pageUrl: string, pageNumber: string}, i: number) => (
                        <Link key={i} href={`?page=${pagination.pageNumber}`}>
                            <Button>
                                {pagination.pageNumber}
                            </Button>
                        </Link>
                    ))}
                </div>
            }
        </section>
    )
}