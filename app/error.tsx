"use client"

import Link from "next/link"

export default function ErrorBoundry() {
    return(
        <div className="flex items-center justify-center h-screen flex-col w-full">
            <h1 className="text-center font-bold text-lg">Terjadi Kesalahan</h1>
            <Link href={"/"} className="text-center text-blue-500">Coba Akses Ulang Website</Link>
        </div>
    )
}