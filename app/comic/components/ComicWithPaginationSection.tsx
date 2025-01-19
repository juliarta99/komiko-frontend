import { getComicResponse } from "@/app/libs/api";
import Header from "../../components/Header/HeaderSectionAnimeList";
import ComicList from "../../components/ComicList";
import Link from "next/link";
import Button from "../../components/Button";

export type searchParamsType = Promise<{[key: string]: string | undefined }>;

interface Props{
    searchParams?: searchParamsType;
}
export default async function ComicWithPaginationSection({ searchParams }: Props) {
    const searchParamsObj = await searchParams || {};
    const search = searchParamsObj.s;
    const page = searchParamsObj.page;

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
                title={`${search ? "Komik dengan keyword '" + search + "'" : "Baca Komik Kesukaan Anda"}`}
            />
            {comics.data.results.length === 0 &&
                <div className="font-semibold uppercase mt-2">Tidak Ditemukan</div>
            }
            <ComicList comics={comics.data.results} />
            {comics.data.pagination ? 
                <div className="flex items-center gap-2 mt-5">
                    {comics.data.pagination?.map((pagination: {pageUrl: string, pageNumber: string}, i: number) => (
                        <Link key={i} href={`${pagination.pageUrl}&page=${pagination.pageNumber}`}>
                            <Button>
                                {pagination.pageNumber}
                            </Button>
                        </Link>
                    ))}
                </div>
                :
                <div className="mt-5 flex justify-between">
                    <Link href={`${comics.data.prevPage}`}>
                        <Button disabled={comics.data.prevPage ? false : true}>Prev</Button>
                    </Link>
                    <Link href={`${comics.data.nextPage}`}>
                        <Button disabled={comics.data.nextPage ? false : true}>Next</Button>
                    </Link>
                </div>
            }
        </section>
    )
}