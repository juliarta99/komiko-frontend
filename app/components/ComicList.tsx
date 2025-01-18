import CardComic from "./CardComic";

const ComicList = () => {
    const comicList = [
        {
            title: "acs",
            image: "next.svg",
            category: "Manhwa",
            chapter: "Chapter 192",
            rating: "7.00"
        },
        {
            title: "acs",
            image: "next.svg",
            category: "Manhua",
            chapter: "Chapter 192",
            rating: "7.00"
        },
        {
            title: "acs",
            image: "next.svg",
            category: "Manga",
            chapter: "Chapter 192",
            rating: "7.00"
        },
        {
            title: "acs",
            image: "next.svg",
            category: "Comic",
            chapter: "Chapter 192",
            rating: "7.00"
        },
        {
            title: "acs",
            image: "next.svg",
            category: "Manhwa",
            chapter: "Chapter 192",
            rating: "7.00"
        },
        {
            title: "acs",
            image: "next.svg",
            category: "Manhua",
            chapter: "Chapter 192",
            rating: "7.00"
        },
        {
            title: "acs",
            image: "next.svg",
            category: "Manga",
            chapter: "Chapter 192",
            rating: "7.00"
        },
        {
            title: "acs",
            image: "next.svg",
            category: "Comic",
            chapter: "Chapter 192",
            rating: "7.00"
        },
    ]
    return (
        <div className="grid grid-cols-8 gap-5 mt-3">
            {comicList.map((comic, i) => (
                <CardComic
                    key={i}
                    title={comic.title}
                    image={comic.image}
                    chapter={comic.chapter}
                    rating={comic.rating}
                    category={comic.category}
                />
            ))}
        </div>
    )
}

export default ComicList;