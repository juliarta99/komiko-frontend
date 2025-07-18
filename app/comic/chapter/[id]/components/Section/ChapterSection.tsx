import { getComicResponse } from "@/app/libs/api";
import Pagination from "../Pagination";
import ImageComicSection from "./ImageComicSection";

export type paramsType = Promise<{ id: string }>;

interface Props{
    params: paramsType;
}
export default async function ChapterSection({params} : Props) {
    const { id } = await params;
    const chapter = await getComicResponse(`/comic/chapter/${id}`);
    const chapterData = {
        title: chapter.data.title,
        id: id
    }
    return(
        <>
            <div className="px-3">
                <h1 className="text-center text-xl font-semibold">{chapter.data.title}</h1>
            </div>
            <ImageComicSection images={chapter.data.images} chapter={chapterData} />
            <Pagination prevPage={chapter.data.prevChapter} id={id} nextPage={chapter.data.nextChapter} chapters={chapter.data.chapters} />
        </>
    )
}