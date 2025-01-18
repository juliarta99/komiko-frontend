import { Suspense } from "react"
import ChapterSection from "./components/Section/ChapterSection"
import ChapterSkeleton from "./components/Skeleton/ChapterSkeleton"

export default function ChapterPage({params}: {params: {id: string}}) {
    return(
        <div className="container mx-auto min-h-screen py-16">
            <Suspense fallback={<ChapterSkeleton />}>
                <ChapterSection params={params} />
            </Suspense>
        </div>
    )
}