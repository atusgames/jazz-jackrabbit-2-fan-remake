import { FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";

function DownloadNow() {
    return (
        <>
            <div className="w-full h-20 mt-10 sm:mt-14 p-5 bg-slate-600 rounded-sm relative">
                <h2 className="text-white text-sm sm:text-base">Descarga Jazz Jackrabbit 2: Battle Royale - Fan Remake</h2>
                <FaLinux className="absolute right-4 top-4 text-white text-xl" />
                <a
                    target="_blank"
                    href="https://github.com/SantiSev/jazz-jackrabbit-2-remake/blob/dev/docs/user_manual.md"
                    className="absolute -bottom-5 right-4 bg-green-600 hover:brightness-110 duration-200 text-white text-sm sm:text-base font-bold py-2 px-4 rounded mt-5">Descargar Ahora</a>
            </div>

            {/* Buy original */}
            <div className="w-full h-20 mt-10 sm:mt-14 p-5 bg-slate-600 rounded-sm relative">
                <h2 className="text-white text-sm sm:text-base">Compra Jazz Jackrabbit 2 Collection (original)</h2>
                <FaWindows className="absolute right-4 top-4 text-white text-xl" />
                <a target="_blank"
                    href="https://www.gog.com/en/game/jazz_jackrabbit_2_collection"
                    className="absolute -bottom-5 right-4 bg-green-600 hover:brightness-110 duration-200 text-white text-sm sm:text-base font-bold py-2 px-4 rounded mt-5">Comprar Ahora</a>
            </div>
        </>
    )
}

export default DownloadNow;
