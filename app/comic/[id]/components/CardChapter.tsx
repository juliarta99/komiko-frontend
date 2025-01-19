import { faCalendarAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LinkButton from "@/app/components/LinkButton";

interface ChapterProps {
    slug: string,
    num: string, 
    date: string,
    downloadLink: string
}

const CardChapter = ({slug, num, date, downloadLink} : ChapterProps) => {
    return(
        <div className="p-3 rounded-md bg-gray-800">
            <div className="flex gap-3 items-center justify-between">
                <Link href={slug}>
                    <h3 className="font-semibold">{num}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <p className="text-xs">{date}</p>
                    </div>
                </Link>
                <Link href={downloadLink}>
                    <FontAwesomeIcon className="text-blue-500 text-lg" icon={faDownload} />
                </Link>
            </div>
            <LinkButton link={`/comic/chapter/${slug}`} name="Baca Sekarang" classNameButton="w-full mt-2" bgButton="!bg-gray-600" />
        </div>
    )
}

export default CardChapter;