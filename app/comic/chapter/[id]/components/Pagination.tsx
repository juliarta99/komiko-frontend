import Button from "@/app/components/Button";
import Link from "next/link";

interface Chapter{
    title: string | null,
    url: string | null
}

interface PaginationProps{
    prevPage?: string | null,
    nextPage?: string | null,
    chapters?: Chapter[]
}

export default function Pagination({prevPage, nextPage, chapters} : PaginationProps) {
    return(
        <div className={`max-w-xl mt-5 grid grid-cols-3 gap-10 mx-auto`}>
            <Link href={`${prevPage}`} className="block">
                <Button className="w-full" children="Prev" disabled={prevPage ? false : true} />
            </Link>
            <select name="chapters" id="chapters" className="w-full rounded-md">
                {chapters?.map((chapter, i) => (
                    chapter.url != null && <option key={i} value={chapter.url}>{chapter.title}</option>
                ))}
            </select>
            <Link href={`${nextPage}`} className="block">
                <Button className="w-full" children="Next" disabled={nextPage ? false : true} />
            </Link>
        </div>
    )
}