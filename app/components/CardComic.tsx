import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ComicProps {
    title: string;
    imageSrc: string;
    category: string;
    chapter: string;
    rating: string;
}

const CardComic: React.FC<ComicProps> = ({title, imageSrc, category, chapter, rating}) => {
    const categoryClass =
        category === "Manhwa"
            ? "bg-blue-500"
            : category === "Manhua"
            ? "bg-red-500"
            : category === "Manga"
            ? "bg-green-500"
            : "bg-yellow-500";
    
    return(
        <Link href="" className="w-full relative block">
            <div className={`absolute py-1 px-2 text-xs rounded-md top-1 right-1 ${categoryClass}`}>{category}</div>
            <img 
                src={imageSrc} 
                alt={title} 
                className="object-cover aspect-[11/15] w-full bg-gray-500 rounded-md"    
            />
            <h3 className="text-xs mt-1 font-medium h-9">{title.length > 20 ? `${title.substring(0, 25)}...` : title}</h3>
            <p className="text-xs">{chapter}</p>
            <div className="flex items-center gap-1">
                <FontAwesomeIcon className="w-3 mt-1 text-yellow-500" icon={faStar}/>
                <p className="text-xs">{rating}</p>
            </div>
        </Link>
    )
}

export default CardComic;