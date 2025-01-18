import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import Input from "./Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput() {
    return (
        <div className="flex rounded-md">
            <Input 
                type="text"
                name="search"
                id="search"
                placeholder="Cari komik kesukaan anda!"
                className="rounded-l-md rounded-r-none"
            />
            <Button 
                children={<FontAwesomeIcon className="w-4 text-white" icon={faSearch}/>}
                className="rounded-l-none rounded-r-md !bg-blue-500"
            />
        </div>
    )
}