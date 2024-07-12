import { useEffect } from "react";

import background from "../assets/jazz-jackrabbit-background.png";
import banner from "../assets/thumb.jpg";

import NavBar from "../shared/navbar";
import SlideShow from "./SlideShow";

function JazzJackrabbit() {

    useEffect(() => {
        document.title = "Jazz Jackrabbit 2 | Battle Royale - Fan Remake";
    }, []);

    return (
        <div className="w-screen h-screen">
            <NavBar />
            <img src={background} alt="Jazz Jackrabbit 2" className="ml-40 w-screen h-screen opacity-10 fixed -z-10" />

            <div className="pt-20 px-40 flex gap-10 justify-center">
                <div id="Images">
                    <h1 className="text-white mb-2">Jazz Jackrabbit 2 Battle Royale | Fan Remake</h1>
                    <SlideShow />
                </div>

                <div id="Details" className="w-60">
                    <img src={banner} alt="Jazz Jackrabbit 2" className="w-full aspect-[14/9] object-cover mt-8" />
                    <p className="mt-3 break-words w-full text-sm text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quis minima id, soluta nam distinctio ab aspernatur maxime dolore molestias, assumenda ducimus ipsam dignissimos deleniti consequatur autem amet voluptatibus incidunt!</p>
                </div>
            </div>

        </div>
    );
}

export default JazzJackrabbit;
