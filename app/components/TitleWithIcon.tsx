import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleWithIcon = ({title, icon}: {title: string, icon: IconProp}) => {
    return(
        <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={icon} />
            <h5 className="font-semibold">{title}</h5>
        </div>
    )
}

export default TitleWithIcon;