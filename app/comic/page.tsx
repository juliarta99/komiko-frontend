import { Suspense } from "react";
import ComicsSectionSkeleton from "../components/Skeleton/Section/ComicsSectionSkeleton";
import ComicWithPaginationSection from "./components/ComicWithPaginationSection";
import BasicLayout from "../components/Layouts/BasicLayout";
import ComicListLayout from "../components/Layouts/ComicListLayout";

export type searchParamsType = Promise<{[key: string]: string | undefined }>;

interface Props{
    searchParams?: searchParamsType 
}
export default function ComicPage({ searchParams }: Props) {

    return (
        <BasicLayout>
            <div className="container mx-auto min-h-screen py-16">
                <ComicListLayout>
                    <Suspense fallback={<ComicsSectionSkeleton count={12} />}>
                        <ComicWithPaginationSection searchParams={searchParams} />
                    </Suspense>
                </ComicListLayout>
            </div>
        </BasicLayout>
    )
}