import { Suspense } from "react";
import ComicWithPaginationSection from "./components/ComicWithPaginationSection";
import ComicsSectionSkeleton from "@/app/components/Skeleton/Section/ComicsSectionSkeleton";
import BasicLayout from "@/app/components/Layouts/BasicLayout";
import ComicListLayout from "@/app/components/Layouts/ComicListLayout";

type PageProps =  { 
    params: { category: string }; 
    searchParams?: { [key: string]: string | undefined }; 
}

export default function PageCategoryById({ params, searchParams }: PageProps) {

    return (
        <BasicLayout>
            <div className="container mx-auto min-h-screen py-16">
                <ComicListLayout>
                    <Suspense fallback={<ComicsSectionSkeleton count={12} />}>
                        <ComicWithPaginationSection params={params} searchParams={searchParams} />
                    </Suspense>
                </ComicListLayout>
            </div>
        </BasicLayout>
    )
}