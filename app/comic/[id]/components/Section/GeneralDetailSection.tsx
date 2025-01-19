import Button from "@/app/components/Button";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import PointSection from "./PointSection";

interface ChapterProps {
    slug: string,
    title: string
}

interface GenresProps{
    genreSlug: string,
    genreName: string
}

interface GeneralDetailProps {
    title: string,
    synopsis: string,
    imageSrc: string,
    status: string,
    firstChapter: ChapterProps,
    latestChapter: ChapterProps,
    rating: string,
    type: string,
    released: string,
    author: string,
    artist: string,
    updatedOn: string,
    genres: GenresProps[],
}
export default function GeneralDetailSection({title, synopsis, imageSrc, status, firstChapter, latestChapter, rating, type, released, author, artist, updatedOn, genres} : GeneralDetailProps) {
    const categoryClass =
        type === "Manhwa"
            ? "bg-blue-500"
            : type === "Manhua"
            ? "bg-red-500"
            : type === "Manga"
            ? "bg-green-500"
            : type === "Comic"
            ? "bg-yellow-500"
            : "hidden";

    return(
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4 md:gap-10">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex justify-center mb-2 md:hidden items-center gap-4">
                    <div className={`py-1 px-2 text-xs rounded-md ${categoryClass}`}>{type}</div>
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <p>{rating}</p>
                    </div>
                </div>
                <img 
                    src={imageSrc} 
                    alt={title}
                    className="object-cover aspect-[11/15] w-full max-w-[200px] bg-gray-500 rounded-md mx-auto" 
                />
                <Button disabled={true} className="disabled:bg-white mt-2 w-full max-w-[200px] mx-auto flex flex-col">
                    <p>Status</p>
                    <p className="font-semibold">{status}</p>
                </Button>
                <div className="mt-2">
                    <Link href={firstChapter.slug}>
                        <Button className="w-full max-w-[200px] mx-auto flex flex-col !bg-blue-500 !text-white">
                            <p>Baca Chapter Awal</p>
                            <h5 className="font-semibold uppercase">{firstChapter.title}</h5>
                        </Button>
                    </Link>
                </div>
                <div className="mt-2">
                    <Link href={latestChapter.slug}>
                        <Button className="w-full max-w-[200px] mx-auto flex flex-col !bg-blue-500 !text-white">
                            <p>Baca Chapter {status == "Tamat" ? "Terakhir" : "Terbaru"}</p>
                            <h5 className="font-semibold uppercase">{latestChapter.title}</h5>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="md:mt-24 col-span-1 md:col-span-3">
                <div className="hidden md:flex items-center gap-4">
                    <div className={`py-1 px-2 text-xs rounded-md ${categoryClass}`}>{type}</div>
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <p>{rating}</p>
                    </div>
                </div>
                <h1 className="font-semibold text-xl text-center md:text-start">{title}</h1>
                <p className="text-justify mt-1">{synopsis}</p>
                <PointSection 
                    released={released}
                    author={author}
                    artist={artist}
                    updatedOn={updatedOn}
                    genres={genres}
                />
            </div>
        </div>
    )
}