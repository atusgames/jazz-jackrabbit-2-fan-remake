import { useEffect } from "react";
import NavBar from "../shared/navbar";
import background from "../assets/jazz-jackrabbit-background.png";
import SlideShow from "./SlideShow";

function JazzJackrabbit() {

    useEffect(() => {
        document.title = "Jazz Jackrabbit 2 | Battle Royale - Fan Remake";
    }, []);

    return (
        <div className="w-screen h-screen">
            <NavBar />
            <img src={background} alt="Jazz Jackrabbit 2" className="ml-40 w-screen h-screen opacity-10 fixed -z-10" />

            <div className="pt-20 px-40 flex gap-10">
                <div id="Images">
                    <h1 className="text-white">Jazz Jackrabbit 2 Battle Royale | Fan Remake</h1>
                    <SlideShow />
                </div>

                {/* <div id="Details">
                    <h1 className="text-white">Jazz Jackrabbit</h1>
                    <SlideShow />
                </div> */}
            </div>

        </div>
    );
}

export default JazzJackrabbit;
