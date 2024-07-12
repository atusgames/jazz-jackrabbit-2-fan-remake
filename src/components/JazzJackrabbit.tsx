import { useEffect } from "react";

import background from "../assets/jazz-jackrabbit-background.png";
import banner from "../assets/thumb.jpg";

import NavBar from "../shared/navbar";
import SlideShow from "./SlideShow";
import DownloadNow from "./DownloadNow";
import SystemRequirements from "./SystemRequirements";
import ProjectInfo from "./ProjectInfo";

function JazzJackrabbit() {

    useEffect(() => {
        document.title = "Jazz Jackrabbit 2 | Battle Royale - Fan Remake";
    }, []);

    return (
        <div className="w-screen h-screen mb-10">
            <NavBar />
            <img src={background} alt="Jazz Jackrabbit 2" className="ml-40 w-screen h-screen opacity-10 fixed -z-10" />

            <div className="pt-6 px-40 flex gap-10 justify-center">
                <div id="Images" className="w-[32rem]">
                    <h1 className="text-white mb-2">Jazz Jackrabbit 2: Battle Royale | Fan Remake</h1>
                    <SlideShow />
                    <DownloadNow />
                    <div className="w-full mt-14">
                        <h2 className="text-white text-2xl mb-3">Advertencia</h2>
                        <p className="text-white break-words text-sm">
                            El juego no se encuentra hosteado en este momento, por lo que no es posible jugar online, pero se puede usar localmente (LAN). <br />
                            A su vez si te gusta <strong>Jazz Jackrabbit</strong> recomendamos fuertemente comprar el juego original en <a href="https://www.gog.com/en/game/jazz_jackrabbit_2_collection" target="_blank" rel="noreferrer" className="text-blue-500">GOG</a> para apoyar a los desarrolladores.
                        </p>
                    </div>
                    <SystemRequirements />
                </div>

                <div id="Details" className="w-60">
                    <img src={banner} alt="Jazz Jackrabbit 2" className="w-full aspect-[14/9] object-cover mt-8" />
                    <p className="mt-3 break-words w-full text-xs text-white">
                        Jazz Jackrabbit 2: Battle Royale - Fan Remake es una emocionante reinvención del clásico juego de plataformas,
                        ahora con partidas online de hasta 8 jugadores. Ten enfrentamientos freneticos con personajes icónicos como Jazz,
                        Spaz y Lori en diversos mapas llenos de acción. Disfruta de una variedad de armas, ítems especiales
                        como zanahorias de invencibilidad y un editor de mapas personalizados para una experiencia de juego única y envolvente.
                    </p>

                    <ProjectInfo />
                </div>
            </div>

        </div >
    );
}

export default JazzJackrabbit;
