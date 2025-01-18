interface ImageProps{
    imageSrc: string,
    title: string,
}

export default function ViewImage({imageSrc, title} : ImageProps) {
    return(
        <img 
            src={imageSrc} 
            alt={title}
            className="w-full object-contain"
        />
    )
}