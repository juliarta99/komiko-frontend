import { Suspense } from "react";
import ComicsSectionSkeleton from "../components/Skeleton/Section/ComicsSectionSkeleton";
import ComicWithPaginationSection from "./components/ComicWithPaginationSection";
import BasicLayout from "../components/Layouts/BasicLayout";

export default function ComicPage({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {

    return (
        <BasicLayout>
            <div className="container mx-auto min-h-screen py-16">
                <Suspense fallback={<ComicsSectionSkeleton count={16} />}>
                    <ComicWithPaginationSection searchParams={searchParams} />
                </Suspense>
            </div>
        </BasicLayout>
    )
}