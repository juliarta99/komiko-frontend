import ChapterListSkeleton from "./ChapterListSkeleton";

export default function DetailSkeleton() {
    return(
        <div className="min-h-screen">
            <div className="container mx-auto pb-16 pt-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4 md:gap-10">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="bg-gray-300 animate-pulse rounded-md h-8 w-full max-w-[200px] mx-auto mb-2 md:hidden"></div>
                        <div className="object-cover aspect-[11/15] w-full max-w-[200px] mx-auto bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="bg-gray-300 animate-pulse rounded-md h-12 w-full max-w-[200px] mx-auto mt-2"></div>
                        <div className="bg-gray-300 animate-pulse rounded-md w-full max-w-[200px] mx-auto mt-2 h-12"></div>
                        <div className="bg-gray-300 animate-pulse rounded-md w-full max-w-[200px] mx-auto mt-2 h-12"></div>
                    </div>
                    <div className="md:mt-24 col-span-1 md:col-span-3">
                        <div className="items-center gap-4 hidden md:flex">
                            <div className="bg-gray-300 animate-pulse rounded-md w-24 h-6"></div>
                            <div className="bg-gray-300 animate-pulse rounded-md w-20 h-6"></div>
                        </div>
                        <div className="bg-gray-300 animate-pulse rounded-md w-full h-8 mt-3"></div>
                        <div className="bg-gray-300 animate-pulse rounded-md w-full h-40 mt-2"></div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-5 mb-8">
                            {[...Array(4)].map((_, i) => (
                                <div key={i}>
                                    <div className="bg-gray-300 animate-pulse rounded-md w-full h-10"></div>
                                    <div className="bg-gray-300 animate-pulse rounded-md w-full h-8 mt-2"></div>
                                </div>
                            ))}
                            <div className="col-span-2 md:col-span-4">
                                <div className="bg-gray-300 animate-pulse rounded-md w-30 h-10"></div>
                                <div className="flex flex-wrap gap-3 mt-2">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="h-8 w-20 bg-gray-300 animate-pulse rounded-md"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ChapterListSkeleton />
            </div>
        </div>
    )
}