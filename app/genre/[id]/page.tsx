import BasicLayout from "@/app/components/Layouts/BasicLayout";

export default function GenrePage({params}: {params: {id: string}}) {
    return(
        <BasicLayout>
            <h1 className="py-24">{params.id}</h1>
        </BasicLayout>
    )
}