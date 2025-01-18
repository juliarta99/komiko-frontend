import Input from "./Input";

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
            <button></button>
        </div>
    )
}