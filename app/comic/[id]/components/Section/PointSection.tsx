import { faBrush, faCalendar, faClockRotateLeft, faLayerGroup, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import PointDetail from "../PointDetail";
import LinkButton from "../../../../components/LinkButton";

interface GenresProps{
    genreSlug: string,
    genreName: string
}

interface PointProps{
    released: string,
    author: string,
    artist: string,
    updatedOn: string,
    genres: GenresProps[],
}

const PointSection = ({released, author, artist, updatedOn, genres} : PointProps) => {
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-5 mb-8">
            <PointDetail title="Tahun Terbit" icon={faCalendar} desc={released} />
            <PointDetail title="Pengarang" icon={faPenFancy} desc={author} />
            <PointDetail title="Ilustrator" icon={faBrush} desc={artist} />
            <PointDetail title="Rilisan Terakhir" icon={faClockRotateLeft} desc={updatedOn} />
            <div className="col-span-2 lg:col-span-4">
                <PointDetail title="Genre" icon={faLayerGroup} />
                <div className="flex flex-wrap gap-3 mt-2">
                    {genres.map((genre, i) => (
                        <LinkButton key={i} link={`/genre/${genre.genreSlug}`} name={genre.genreName} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PointSection;