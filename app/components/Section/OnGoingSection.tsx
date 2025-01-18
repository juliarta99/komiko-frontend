import { getComicResponse } from "@/app/libs/api";
import Header from "../Header/HeaderSectionAnimeList";
import ComicList from "../ComicList";

export default async function OnGoingSection() {
    const comics = await getComicResponse("/comic", "?status=ongoing");

    return (
        <section className="py-5">
            <Header
                title="Komik On Going"
                nameButton="Lihat Semua"
                linkButton="/comic/order/ongoing"
            />
            <ComicList comics={comics.data.results.slice(0, 8)} />
        </section>
    )
}