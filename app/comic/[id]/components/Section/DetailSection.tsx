import { getComicResponse } from "@/app/libs/api";
import BackgroundDetail from "../BackgroundDetail";
import ChaptersSection from "./ChaptersSection";
import GeneralDetailSection from "./GeneralDetailSection";

export type paramsType = Promise<{ id: string }>;

interface Props{
    params: paramsType;
}
export default async function DetailSection({params} : Props) {
    const { id } = await params;
    const comic = await getComicResponse(`/comic/${id}`);
    
    return(
        <div className="min-h-screen">
            <BackgroundDetail imageSrc={comic.data.imageSrc} />
            <div className="container mx-auto pb-16 pt-32 relative z-10">
                <GeneralDetailSection 
                    title={comic.data.title}
                    synopsis={comic.data.synopsis}
                    imageSrc={comic.data.imageSrc}
                    status={comic.data.status}
                    firstChapter={comic.data.firstChapter}
                    latestChapter={comic.data.latestChapter}
                    rating={comic.data.rating}
                    type={comic.data.type}
                    released={comic.data.released}
                    author={comic.data.author}
                    artist={comic.data.artist}
                    updatedOn={comic.data.updatedOn}
                    genres={comic.data.genres}
                />
                <ChaptersSection chapters={comic.data.chapters} />
            </div>
        </div>
    )    
}