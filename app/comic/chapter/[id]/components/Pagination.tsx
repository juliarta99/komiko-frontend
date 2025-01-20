"use client";

import Button from "@/app/components/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface Chapter {
    title: string | null;
    url: string | null;
}

interface PaginationProps {
    prevPage?: string | null;
    nextPage?: string | null;
    chapters?: Chapter[];
    id: string;
}

export default function Pagination({ prevPage, nextPage, chapters, id }: PaginationProps) {
    const router = useRouter();
    const getChapters = chapters?.filter((item) => item.url != null);
    const [active, setActive] = useState(false);
    const [activeSelect, setActiveSelect] = useState(false);
    const [nowChapter, setNowChapter] = useState(id);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleChangeChapter = () => {
        if (nowChapter) {
            router.push(`/comic/chapter/${nowChapter}`);
        }
        setActive(false);
    };

    useEffect(() => {
        if (active || activeSelect) {
            handleChangeChapter();
        }
    }, [nowChapter]);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();
                const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
                setActiveSelect(inView);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Button
                className={`${active ? "bottom-[105px]" : "bottom-2"} !bg-green-500 !p-2 w-10 h-10 flex fixed items-center justify-center right-2 rounded-full`}
                onClick={() => {
                    setActive(!active);
                }}
            >
                <FontAwesomeIcon className="w-4 text-white" icon={active ? faEye : faEyeSlash} />
            </Button>
            <div
                ref={componentRef}
                className={`w-full px-3 ${active ? "fixed bottom-0 left-0 bg-slate-800 py-3" : ""}`}
            >
                <div className={`max-w-xl ${!active && "mt-5"} grid grid-cols-4 sm:grid-cols-3 gap-x-2 md:gap-x-10 gap-y-2 mx-auto`}>
                    <Link href={`${prevPage}`} className="block col-span-1">
                        <Button className="w-full" disabled={prevPage ? false : true}>
                            Prev
                        </Button>
                    </Link>
                    {getChapters?.length || 0 > 0 ? (
                        <select
                            name="chapters"
                            id="chapters"
                            className="w-full rounded-md text-black px-3 text-xs col-span-2 sm:col-span-1"
                            onChange={(e) => setNowChapter(e.target.value)}
                            value={nowChapter}
                        >
                            {chapters?.map(
                                (chapter, i) =>
                                    chapter.url != null && (
                                        <option key={i} value={chapter.url}>
                                            {chapter.title}
                                        </option>
                                    )
                            )}
                        </select>
                    ) : (
                        <div className="col-span-2 sm:col-span-1"></div>
                    )}
                    <Link href={`${nextPage}`} className="block col-span-1">
                        <Button className="w-full" disabled={nextPage ? false : true}>
                            Next
                        </Button>
                    </Link>
                    <div className="col-span-4 sm:col-span-3">
                        <Link href="/" className="block">
                            <Button className="w-full !bg-blue-500 !text-white">Kembali Ke Home</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${active ? "mt-28" : ""}`}></div>
        </>
    );
}