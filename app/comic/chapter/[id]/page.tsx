import { Suspense } from "react"
import ChapterSection from "./components/Section/ChapterSection"
import ChapterSkeleton from "./components/Skeleton/ChapterSkeleton"

export type paramsType = Promise<{ id: string }>;

interface Props{
    params: paramsType;
}
export default function ChapterPage({params}: Props) {
    return(
        <div className="px-0 lg:px-5 min-h-screen py-16">
            <Suspense fallback={<ChapterSkeleton />}>
                <ChapterSection params={params} />
            </Suspense>
        </div>
    )
}