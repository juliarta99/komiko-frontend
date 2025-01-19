import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PointDetail = ({title, icon, desc}: {title: string, icon: IconProp, desc?: string}) => {
    return(
        <div>
            <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={icon} />
                <h5 className="font-semibold">{title}</h5>
            </div>
            {desc &&
                <p className="mt-1">{desc}</p>
            }
        </div>
    )
}

export default PointDetail;