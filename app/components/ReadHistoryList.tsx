import LinkButton from "./LinkButton";

interface History {
    title: string,
    id: string
}

export default function ReadHistoryList({historys}: {historys: History[]}) {
    return(
        <>
            <div className="grid grid-cols-1 gap-3">
                {historys.map((history, i) => (
                    <LinkButton classNameButton="w-full h-full text-start" key={i} link={`/comic/chapter/${history.id}`} name={history.title.length > 30 ? `${history.title.substring(0, 30)}...` : history.title} />
                ))}
            </div>
        </>
    )
}