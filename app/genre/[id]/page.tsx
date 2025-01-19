import BasicLayout from "@/app/components/Layouts/BasicLayout";
import ComicsSectionSkeleton from "@/app/components/Skeleton/Section/ComicsSectionSkeleton";
import { Suspense } from "react";
import ComicByGenreSection from "./components/ComicByGenreSection";
import ComicListLayout from "@/app/components/Layouts/ComicListLayout";

export type paramsType = Promise<{ id: string }>;
export type searchParamsType = Promise<{[key: string]: string | undefined }>;

interface Props{
    params: paramsType;
    searchParams?: searchParamsType;
}
export default function GenrePage({ params, searchParams }: Props) {

    return (
        <BasicLayout>
            <div className="container mx-auto min-h-screen py-16">
                <ComicListLayout>
                    <Suspense fallback={<ComicsSectionSkeleton count={24} />}>
                        <ComicByGenreSection params={params} searchParams={searchParams} />
                    </Suspense>
                </ComicListLayout>
            </div>
        </BasicLayout>
    )
}