"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import Input from "./Input";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import BasicSkeleton from "./Skeleton/BasicSkeleton";

function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams?.get('s') || "");
    const [active, setActive] = useState(false);

    const handleSubmitButton = () => {
        if (searchValue.trim() !== "") {
            router.push(`/comic?s=${encodeURIComponent(searchValue)}`);
        }
        setActive(false);
    }

    return(
        <div>
            <Button 
                className="!bg-blue-500 !p-2 w-10 h-10 flex justify-center items-center lg:hidden"
                onClick={() => {setActive(true)}}
            >
                <FontAwesomeIcon className="w-4 text-white" icon={faSearch}/>
            </Button>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmitButton()}} className={`${active ? "flex fixed top-0 left-0 bg-slate-800 w-full justify-center py-4" : "hidden"} lg:!static lg:!py-0 lg:flex lg:rounded-md`}>
                <Input 
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Cari komik kesukaan anda!"
                    className="rounded-l-md rounded-r-none focus:outline-none"
                    value={searchValue}
                    onChange={(e) => {setSearchValue(e.target.value)}}
                />
                <Button 
                    className="rounded-l-none rounded-r-md disabled:!bg-gray-500 !bg-blue-500"
                    disabled={searchValue.trim() === ""}
                    onClick={handleSubmitButton}
                >
                    <FontAwesomeIcon className="w-4 text-white" icon={faSearch}/>
                </Button>
                <Button 
                    type="button"
                    className="!bg-red-500 lg:hidden ml-2"
                    onClick={() => {setActive(false)}}
                >
                    <FontAwesomeIcon className="w-4 text-white" icon={faXmark}/>
                </Button>
            </form>
        </div>
    )
}

export default function SearchInput() {
    return (
        <Suspense fallback={<BasicSkeleton width="w-full" height="h-10" />}>
            <Search/>
        </Suspense>
    )
}