import SearchInput from "./SearchInput";

export default function Navbar() {
    return (
        <nav className="shadow-lg fixed w-full top-0 dark:bg-[#0a0a0a] bg-white">
            <div className="container mx-auto flex justify-between py-3 items-center">
                <h1 className="font-bold text-xl">Komiko</h1>
                <SearchInput />
            </div>
        </nav>
    )
}