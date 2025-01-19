import { Suspense } from "react";
import ComicWithPaginationSection from "./components/ComicWithPaginationSection";
import ComicsSectionSkeleton from "@/app/components/Skeleton/Section/ComicsSectionSkeleton";
import BasicLayout from "@/app/components/Layouts/BasicLayout";
import ComicListLayout from "@/app/components/Layouts/ComicListLayout";

export type paramsType = Promise<{ category: string }>;
export type searchParamsType = Promise<{[key: string]: string | undefined }>;

interface Props{
    params: paramsType;
    searchParams?: searchParamsType;
}
export default function PageCategoryById({ params, searchParams }: Props) {

    return (
        <BasicLayout>
            <div className="container mx-auto min-h-screen py-16">
                <ComicListLayout>
                    <Suspense fallback={<ComicsSectionSkeleton count={24} />}>
                        <ComicWithPaginationSection params={params} searchParams={searchParams} />
                    </Suspense>
                </ComicListLayout>
            </div>
        </BasicLayout>
    )
}