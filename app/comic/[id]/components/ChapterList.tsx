import CardChapter from "./CardChapter";

interface ChapterProps {
    chapterSlug: string,
    chapterNum: string, 
    chapterDate: string,
    downloadLink: string
}

const ChapterList = ({chapters} : {chapters: ChapterProps[]}) => {
    return(
        <div className="grid grid-cols-4 gap-5 mt-5 max-h-[80vh] overflow-y-auto">
            {chapters.map((chapter, i) => (
                <CardChapter
                    key={i}
                    slug={chapter.chapterSlug}
                    num={chapter.chapterNum}
                    date={chapter.chapterDate}
                    downloadLink={chapter.downloadLink}
                />
            ))}
        </div>
    )
}

export default ChapterList;