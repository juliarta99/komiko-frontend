const BackgroundDetail = ({imageSrc} : {imageSrc: string}) => {
    return(
        <div className="w-full h-[40vh] bg-cover bg-center absolute top-0" style={{ backgroundImage: `url(${imageSrc})` }}>
            <div className="absolute top-0 w-full h-full  bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent"></div>
        </div>
    )
}

export default BackgroundDetail;