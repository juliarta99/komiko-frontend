import Link from "next/link";
import Button from "../Button";
import TitleSection from "../TitleSection";

interface HeaderProps {
    title: string;
    nameButton: string;
    linkButton: string;
}

const Header: React.FC<HeaderProps> = ({title, nameButton, linkButton}) => {
    return(
        <div className="flex items-center justify-between">
            <TitleSection
                name={title}
            />
            <Link href={linkButton}>
                <Button name={nameButton} />
            </Link>
        </div>
    )
}

export default Header;