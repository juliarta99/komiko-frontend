export default function BasicSkeleton({width, height, className}: {width?: string, height?:string, className?: string}) {
    return(
        <div className={`${width} ${height} bg-gray-300 animate-pulse rounded-md ${className}`}></div>
    )
}