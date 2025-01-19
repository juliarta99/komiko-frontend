import ChapterSkeleton from "./ChapterSkeleton";

export default function ChapterListSkeleton() {
    return(
        <div className="mt-8 p-5 rounded-lg dark:bg-gray-900">
            <div className="h-8 w-32 rounded-md bg-gray-300 animate-pulse"></div>
            <div className="h-8 mt-2 w-full rounded-md bg-gray-300 animate-pulse"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {[...Array(8)].map((_, i) => (
                    <ChapterSkeleton key={i} />
                ))}
            </div>
        </div>
    )
}