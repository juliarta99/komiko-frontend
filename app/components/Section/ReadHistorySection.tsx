"use client"

import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import TitleWithIcon from "../TitleWithIcon";
import ReadHistoryList from "../ReadHistoryList";

export default function ReadHistorySection() { 
    const [historys, setHistorys] = useState([]);   
    useEffect(() => {
        const historys = JSON.parse(localStorage.getItem("read_historys") || "[]");
        setHistorys(historys);
    }, []);

    return(
        <>
            {historys.length > 0 &&
                <div className="p-5 rounded-lg bg-gray-900 h-max flex flex-col gap-3">
                    <TitleWithIcon icon={faClockRotateLeft} title="Terkhir Dibaca" />
                    <ReadHistoryList historys={historys} />
                </div>
            }
        </>
    )
}