import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ComicProps {
    title: string;
    image: string;
    category: string;
    chapter: string;
    rating: string;
}

const CardComic: React.FC<ComicProps> = ({title, image, category, chapter, rating}) => {
    const categoryClass =
        category === "Manhwa"
            ? "bg-blue-500"
            : category === "Manhua"
            ? "bg-red-500"
            : category === "Manga"
            ? "bg-green-500"
            : "bg-yellow-500";
    
    return(
        <div className="w-full relative">
            <div className={`absolute py-1 px-2 text-xs rounded-md top-1 right-1 ${categoryClass}`}>{category}</div>
            <img 
                src={image} 
                alt={title} 
                className="object-cover aspect-[11/15] bg-gray-50 rounded-md"    
            />
            <h3 className="text-base font-medium">{title}</h3>
            <p className="text-xs">{chapter}</p>
            <div className="flex items-center gap-1">
                <FontAwesomeIcon className="w-3 mt-1 text-yellow-500" icon={faStar}/>
                <p className="text-xs">{rating}</p>
            </div>
        </div>
    )
}

export default CardComic;