export default function ChapterPage({params}: {params: {id: string}}) {
    return(
        <h1 className="py-24">{params.id}</h1>
    )
}