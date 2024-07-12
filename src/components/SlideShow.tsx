import { useState } from 'react';
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from "react-icons/io";

import YoutubeVid from './YoutubeVid';

function SlideShow() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [
        { title: 'Slide 1', content: 'Slide 1 content' },
        { title: 'Slide 2', content: 'Slide 2 content' },
        { title: 'Slide 3', content: 'Slide 3 content' },
    ];

    const nextSlide = () => {
        setSlideIndex((slideIndex + 1) % slides.length);
    };

    return (
        <div className="w-[32rem] aspect-video">
            <YoutubeVid url="https://www.youtube.com/embed/yL4jmEFELbI" />
            <div className="flex justify-center items-center gap-5 py-1 bg-slate-800 bg-opacity-35 rounded-b-xl text-blue-500">
                <button className='hover:brightness-150 duration-150' onClick={() => setSlideIndex((slideIndex - 1) % slides.length)}>
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
