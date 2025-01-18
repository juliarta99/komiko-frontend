const CardComic = () => {
    return(
        <div className="w-full relative">
            <div className="absolute py-1 px-2 text-xs rounded-md top-1 right-1 bg-blue-500">Manhwa</div>
            <img 
                src="globe.svg" 
                alt="Image" 
                className="object-cover aspect-[11/15] bg-gray-50 rounded-md"    
            />
            <h3 className="text-base font-medium">name</h3>
            <p className="text-xs">Chapterf</p>
        </div>
    )
}

export default CardComic;