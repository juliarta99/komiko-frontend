import LinkButton from "../LinkButton";

export default function PromoIklanSection() {
    return(
        <div className="p-5 rounded-lg bg-red-800 h-max">
            <h1 className="font-semibold text-center mb-4">
                Banyak Space Nganggur nih!!
                <br />
                Buruan Pasang Iklanmu!
            </h1>
            <LinkButton link="" name="Hubungi Admin" bgButton="!bg-green-500" classNameButton="w-full" />
        </div>
    )
}