import CardComicSkeleton from "../CardComicSkeleton";

export default function ComicsSectionSkeleton({count = 6}: {count?: number}) {
    return (
        <section className="py-5">
            <div className="flex items-center justify-between">
                <div className="w-14 bg-gray-300 h-4 animate-pulse rounded-sm"></div>
                <div className="w-20 bg-gray-300 h-8 animate-pulse rounded-md"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-5 mt-3">
                {[...Array(count)].map((_, i) => (
                    <CardComicSkeleton key={i} />
                ))}
            </div>
        </section>
    )
}