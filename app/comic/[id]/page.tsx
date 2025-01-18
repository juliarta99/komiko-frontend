import { Suspense } from "react";
import DetailSection from "./components/Section/DetailSection";
import DetailSkeleton from "./components/Skeleton/DetailSkeleton";
import ComicsSectionSkeleton from "@/app/components/Skeleton/Section/ComicsSectionSkeleton";
import LatestReleaseSection from "@/app/components/Section/LatestReleaseSection";
import NewSeriesSection from "@/app/components/Section/NewSeriesSection";
import BasicLayout from "@/app/components/Layouts/BasicLayout";

export default function ComicDetailPage({params} : {params: { id: string }}) {
    return(
        <BasicLayout>
            <Suspense fallback={<DetailSkeleton />}>
                <DetailSection params={params} />
            </Suspense>
            <div className="container mx-auto">
                <Suspense fallback={<ComicsSectionSkeleton />}>
                    <LatestReleaseSection />
                </Suspense>
                <Suspense fallback={<ComicsSectionSkeleton />}>
                    <NewSeriesSection />
                </Suspense>
            </div>
        </BasicLayout>
    )
}