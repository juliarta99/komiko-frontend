import Button from "@/app/components/Button";
import Link from "next/link";

const LinkButton = ({link, name, classNameButton, bgButton} : {link: string, name: string, classNameButton?: string, bgButton?: string}) => {
    return(
        <Link href={link} className="block">
            <Button className={`${bgButton ? bgButton : "!bg-slate-800"} !text-white hover:text-blue-500 ${classNameButton}`}>{name}</Button>
        </Link>
    )
}

export default LinkButton;