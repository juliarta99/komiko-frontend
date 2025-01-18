import { getComicResponse } from "@/app/libs/api";
import ComicList from "../ComicList";
import Header from "../Header/HeaderSectionAnimeList";

export default async function PopularSection() {
    const comics = await getComicResponse("/comic", "?order=popular");

    return (
        <section className="py-5">
            <Header
                title="Komik Populer"
                nameButton="Lihat Semua"
                linkButton="/comic/order/popular"
            />
            <ComicList comics={comics.data.results.slice(0, 8)} />
        </section>
    )
}