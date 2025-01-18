import { getComicResponse } from "@/app/libs/api";
import Header from "../Header/HeaderSectionAnimeList";
import ComicList from "../ComicList";

export default async function LatestReleaseSection() {
    const comics = await getComicResponse("/comic", "?order=update");

    return (
        <section className="py-5">
            <Header
                title="Rilisan Terbaru"
                nameButton="Lihat Semua"
                linkButton="ds"
            />
            <ComicList comics={comics.data.results.slice(0,8)} />
        </section>
    )
}