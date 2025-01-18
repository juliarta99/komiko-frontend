import { getComicResponse } from "@/app/libs/api";
import ViewImage from "./ViewImage";
import Pagination from "../Pagination";
import { Key } from "react";

export default async function ChapterSection({params} : {params: { id: string }}) {
    const { id } = params;
    const chapter = await getComicResponse(`/comic/chapter/${id}`);
    return(
        <>
            <h1 className="text-center text-xl font-semibold">{chapter.data.title}</h1>
            <div className="max-w-xl w-full mx-auto mt-5">
                {chapter.data.images?.map((val: string, i: Key | null | undefined) => (
                    <ViewImage key={i} imageSrc={val} title={chapter.data.title} />
                ))}
            </div>
            <Pagination prevPage={chapter.data.prevChapter} nextPage={chapter.data.nextChapter} chapters={chapter.data.chapters} />
        </>
    )
}