import CardComic from "./CardComic";

interface Comic {
    title: string;
    imageSrc: string;
    category: "Manhwa" | "Manhua" | "Manga" | "Comic";
    chapter: string;
    rating: string;
    slug: string;
}

const ComicList = ({comics} : {comics: Comic[]}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-5 mt-3">
            {comics.map((comic, i) => (
                <CardComic
                    key={i}
                    title={comic.title}
                    imageSrc={comic.imageSrc}
                    chapter={comic.chapter}
                    rating={comic.rating}
                    category={comic.category}
                    slug={comic.slug}
                />
            ))}
        </div>
    )
}

export default ComicList;