import Button from "@/app/components/Button";
import Link from "next/link";

const LinkButton = ({link, name, classNameButton} : {link: string, name: string, classNameButton?: string}) => {
    return(
        <Link href={link} className="block">
            <Button className={`!bg-slate-800 !text-white hover:text-blue-500 ${classNameButton}`}>{name}</Button>
        </Link>
    )
}

export default LinkButton;