import { Suspense } from "react";
import GenreSecion from "../Section/GenreSection";
import ReadHistorySection from "../Section/ReadHistorySection";
import BasicSkeleton from "../Skeleton/BasicSkeleton";

export default function ComicListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-1fr-300px gap-10">
            {children}
            <div className="flex flex-col gap-5">
              <Suspense fallback={<BasicSkeleton width="w-full" height="h-48" />}>
                <ReadHistorySection />
              </Suspense>
              <Suspense fallback={<BasicSkeleton width="w-full" height="h-80" />}>
                <GenreSecion />
              </Suspense>
            </div>
        </div>
    </>
  );
}
