import leftBtn from '../assets/leftBtn.png'
import rightBtn from '../assets/rightBtn.png'
import { useState, useEffect } from "react";

export default function Carousel({ children }) {

    const slides = Array.isArray(children)
        ? children
        : [children];

    const [curr, setCurr] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);

    useEffect(() => {

        const updateVisibleItems = () => {

            if (window.innerWidth >= 992) {
                setVisibleItems(4);
            }
            else if (window.innerWidth >= 768) {
                setVisibleItems(2);
            }
            else {
                setVisibleItems(1);
            }
        };

        updateVisibleItems();

        window.addEventListener("resize", updateVisibleItems);

        return () =>
            window.removeEventListener("resize", updateVisibleItems);

    }, []);

    const maxIndex = slides.length - visibleItems;

    // const prev = () => {
    //     setCurr(curr => curr <= 0 ? 0 : curr - 1);
    // };

    // const next = () => {
    //     setCurr(curr => curr >= maxIndex ? maxIndex : curr + 1);
    // };
    const prev = () => {
        setCurr(curr =>
            curr === 0 ? maxIndex : curr - 1
        );
    };

    const next = () => {
        setCurr(curr =>
            curr === maxIndex ? 0 : curr + 1
        );
    };

    return (
        <div className="position-relative overflow-hidden w-100">

            <div
                className="d-flex"
                style={{
                    transform: `translateX(-${curr * (100 / visibleItems)}%)`,
                    transition: "0.5s ease"
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            minWidth: `${100 / visibleItems}%`,
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            {/* {curr > 0 && (
                <button
                    onClick={prev}
                    className="border-0 bg-transparent p-0 shadow-none"
                >
                    <img src={leftBtn} alt="RightButton" className='img-fluid btn'/>
                </button>
            )}

            {curr < maxIndex && (
                <button
                    onClick={next}
                    className="border-0 bg-transparent p-0 shadow-none"
                >
                    <img src={rightBtn} alt="RightButton" className='img-fluid btn'/>
                </button>
            )} */}
            <button
                onClick={prev}
                className="border-0 bg-transparent p-0 shadow-none"
            >
                <img src={leftBtn} alt="RightButton" className='img-fluid btn'/>
            </button>
            <button
                onClick={next}
                className="border-0 bg-transparent p-0 shadow-none"
            >
                <img src={rightBtn} alt="RightButton" className='img-fluid btn'/>
            </button>

        </div>
    );
}