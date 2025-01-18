import PopularSection from "./components/Section/PopularSection";
import OnGoingSection from "./components/Section/OnGoingSection";
import { Suspense } from "react";
import ComicsSectionSkeleton from "./components/Skeleton/Section/ComicsSectionSkeleton";
import LatestReleaseSection from "./components/Section/LatestReleaseSection";
import NewSeriesSection from "./components/Section/NewSeriesSection";
import BasicLayout from "./components/Layouts/BasicLayout";

export default function Home() {
  return (
    <BasicLayout>
      <div className="container mx-auto min-h-screen py-16">
        <Suspense fallback={<ComicsSectionSkeleton />}>
          <PopularSection />
        </Suspense>
        <Suspense fallback={<ComicsSectionSkeleton />}>
          <OnGoingSection />
        </Suspense>
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
