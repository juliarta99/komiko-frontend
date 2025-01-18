import Button from "../Button";
import CardComic from "../CardComic";
import TitleSection from "../TitleSection";

export default function PopularSection() {
    return (
        <section className="py-10">
            <div className="flex items-center justify-between">
                <TitleSection
                    name="Komik Populer"
                />
                <Button name="Lihat Semua" />
            </div>
            <div className="grid grid-cols-8 gap-5 mt-3">
                <CardComic />
                <CardComic />
                <CardComic />
                <CardComic />
                <CardComic />
                <CardComic />
                <CardComic />
                <CardComic />
            </div>
        </section>
    )
}