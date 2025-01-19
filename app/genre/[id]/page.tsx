import BasicLayout from "@/app/components/Layouts/BasicLayout";
import ComicsSectionSkeleton from "@/app/components/Skeleton/Section/ComicsSectionSkeleton";
import { Suspense } from "react";
import ComicByGenreSection from "./components/ComicByGenreSection";
import ComicListLayout from "@/app/components/Layouts/ComicListLayout";

export default function GenrePage({ params, searchParams }: { params: {id: string}, searchParams?: { [key: string]: string | undefined } }) {

    return (
        <BasicLayout>
            <div className="container mx-auto min-h-screen py-16">
                <ComicListLayout>
                    <Suspense fallback={<ComicsSectionSkeleton count={16} />}>
                        <ComicByGenreSection params={params} searchParams={searchParams} />
                    </Suspense>
                </ComicListLayout>
            </div>
        </BasicLayout>
    )
}