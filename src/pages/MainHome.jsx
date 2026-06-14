import { useState, useEffect } from "react";

import img1 from "../assets/carousel-1.jpg";
import img2 from "../assets/carousel-2.jpg";

export default function MainHome() {

    const slides = [
        {
            image: img1,
            title: "Luxury Haircut At Affordable Price",
        },
        {
            image: img2,
            title: "Professional Hair Care For Men",
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat duration-700"
                style={{
                    backgroundImage: `url(${slides[current].image})`,
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

                <div className="text-center max-w-4xl">

                    <h1 className="font-oswald text-white uppercase font-bold leading-tight text-5xl sm:text-6xl lg:text-7xl mb-8">
                        {slides[current].title}
                    </h1>

                    <h4 className="text-white text-lg sm:text-xl lg:text-2xl mb-4">
                        <i className="fa-solid fa-location-dot text-[#EB1616] mr-3"></i>
                        123 Street, New York, USA
                    </h4>

                    <h4 className="text-white text-lg sm:text-xl lg:text-2xl">
                        <i className="fa-solid fa-phone text-[#EB1616] mr-3"></i>
                        +012 345 67890
                    </h4>

                </div>
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white text-5xl hover:text-[#EB1616]"
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white text-5xl hover:text-[#EB1616]"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index
                            ? "bg-[#EB1616]"
                            : "bg-white"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}