export default function CardComicSkeleton() {
    return (
        <div className="w-full relative">
            <div className="object-cover aspect-[11/15] w-full bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-[80%] bg-gray-300 h-3 animate-pulse rounded-sm mt-1"></div>
            <div className="w-[80%] bg-gray-300 h-3 animate-pulse rounded-sm mt-1"></div>
            <div className="w-[50%] bg-gray-300 h-3 animate-pulse rounded-sm mt-1"></div>
        </div>
    )
}