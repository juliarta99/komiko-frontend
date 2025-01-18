"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import Input from "./Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(searchParams?.get('s') || "");

    const handleSubmitButton = () => {
        if (searchValue.trim() !== "") {
            router.push(`/comic?s=${encodeURIComponent(searchValue)}`);
        }
    }

    return (
        <div className="flex rounded-md">
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
                children={<FontAwesomeIcon className="w-4 text-white" icon={faSearch}/>}
                className="rounded-l-none rounded-r-md disabled:!bg-gray-500 !bg-blue-500"
                disabled={searchValue.trim() === ""}
                onClick={handleSubmitButton}
            />
        </div>
    )
}