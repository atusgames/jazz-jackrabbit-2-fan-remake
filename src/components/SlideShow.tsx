import { useState } from 'react';

import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from "react-icons/io";

import thumb from '../assets/thumb2.jpg';
import map from '../assets/map.png';
import match from '../assets/match.jpg';
import select from '../assets/select.gif';
import ingame from '../assets/ingame.png';
import match_castle from '../assets/match_castle.png';
import match_electric from '../assets/match_electric.png';
import editor_1 from '../assets/editor_1.png';
import editor_2 from '../assets/editor_2.png';

import YoutubeVid from './YoutubeVid';

function SlideShow() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [
        <YoutubeVid url="https://www.youtube.com/embed/yL4jmEFELbI" />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={map} />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={match} />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={select} />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={ingame} />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={match_castle} />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={match_electric} />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={editor_1} />,
        <img className="w-full h-full object-contain" alt="Gameplay Image" src={editor_2} />,
    ];

    const previews = [
        thumb,
        map,
        match,
        select,
        ingame,
        match_castle,
        match_electric,
        editor_1,
        editor_2,
    ]

    const nextSlide = () => {
        const idx = (slideIndex + 1) % slides.length;
        setSlideIndex(idx);

        // Scroll to the selected element
        const element = document.getElementById(`${idx}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    const prevSlide = () => {
        const idx = (slideIndex - 1 + slides.length) % slides.length;
        setSlideIndex(idx);

        // Scroll to the selected element
        const element = document.getElementById(`${idx}`);
        element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    return (
        <div className="w-full aspect-video bg-purple-900 bg-opacity-10 rounded-b-xl">
            {/* Selected element */}
            {slides[slideIndex]}

            {/* Previews */}
            <div className="bg-slate-800 bg-opacity-35 overflow-x-scroll w-full py-3 px-5 h-14 sm:h-20 flex gap-5">
                {previews.map((_, index) => (
                    <button id={`${index}`} key={index} className={`aspect-video h-full bg-opacity-20 hover:brightness-110 ${index === slideIndex ? 'bg-blue-600 scale-110' : 'bg-blue-300'}`} onClick={() => setSlideIndex(index)}>
                        <img className='w-full h-full object-contain' src={previews[index]} />
                    </button>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-5 py-1 bg-slate-800 bg-opacity-35 rounded-b-xl text-blue-500">
                <button className='hover:brightness-150 duration-150' onClick={prevSlide}>
                    <IoMdArrowDropleftCircle />
                </button>
                <button className='hover:brightness-150 duration-150' onClick={nextSlide}>
                    <IoMdArrowDroprightCircle />
                </button>
            </div>

        </div>
    );
}

export default SlideShow;
