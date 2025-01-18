import ComicList from "../ComicList";
import Header from "../Header/HeaderSectionAnimeList";

export default function PopularSection() {
    return (
        <section className="py-5">
            <Header
                title="Komik Populer"
                nameButton="Lihat Semua"
                linkButton="ds"
            />
            <ComicList />
        </section>
    )
}