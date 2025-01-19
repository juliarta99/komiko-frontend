import Button from "@/app/components/Button";
import ComicList from "@/app/components/ComicList";
import Header from "@/app/components/Header/HeaderSectionAnimeList";
import { getComicResponse } from "@/app/libs/api";
import Link from "next/link";
import { notFound } from "next/navigation";

export type paramsType = Promise<{ order: string }>;
export type searchParamsType = Promise<{[key: string]: string | undefined }>;

interface Props{
    params: paramsType;
    searchParams?: searchParamsType;
}

export default async function ComicWithPaginationSection({ params, searchParams }: Props) {
    const {order} = await params;
    const searchParamsObj = await searchParams;
    const page = searchParamsObj?.page;

    const allowedOrders = ["popular", "latest", "update", "ongoing"];
    if (!allowedOrders.includes(order)) {
        return notFound();
    }
    let filter = "order";
    if(order == "ongoing") {
        filter = "ongoing";
    }

    const endpoint = page
        ? `/comic?${filter}=${order}&page=${page}`
        : `/comic?${filter}=${order}`;

    const comics = await getComicResponse(endpoint);

    return (
        <section className="py-5">
            <Header
                title={`Daftar Komik ${order.charAt(0).toUpperCase() + order.slice(1)}`}
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