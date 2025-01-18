import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="border-t-2 border-slate-800">
            <div className="container py-4 flex flex-col gap-2 justify-center items-center mx-auto">
                <p className="text-xs text-center max-w-2xl">Semua komik di website ini hanya preview dari komik aslinya, mungkin terdapat banyak kesalahan bahasa, nama tokoh, dan alur cerita. Untuk versi aslinya, silahkan beli komiknya jika tersedia di kotamu.</p>
                <Link href="ds" className="text-xs font-semibold text-blue-500">Pasang Iklan? Hubungi Kami</Link>
                <p className="text-xs text-center">&copy; Komiko {currentYear}</p>
            </div>
        </footer>
    )
}