import { Suspense } from "react";
import ComicWithPaginationSection from "./components/ComicWithPaginationSection";
import ComicsSectionSkeleton from "@/app/components/Skeleton/Section/ComicsSectionSkeleton";

export default function PageOrderBy({ params, searchParams }: { params: { order: string }, searchParams?: { [key: string]: string | undefined } }) {

    return (
        <div className="container mx-auto min-h-screen py-16">
            <Suspense fallback={<ComicsSectionSkeleton count={16} />}>
                <ComicWithPaginationSection params={params} searchParams={searchParams} />
            </Suspense>
        </div>
    )
}