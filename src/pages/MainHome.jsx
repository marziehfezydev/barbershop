import carouselImg from "../assets/carousel-1.jpg"

export default function MainHome() {

    return (

        <section className="relative min-h-screen">

            {/* Background layer*/}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${carouselImg})` }}
            ></div>

            {/* Dark layout*/}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Main content */}
            <div className="relative flex flex-col items-center gap-4 sm:gap-5 pt-36 sm:pt-44 lg:pt-52 z-10 px-4 text-center">

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                    Luxury Haircut at Affordable Price
                </h1>

                <h4 className="text-white text-lg sm:text-xl lg:text-2xl mb-2">
                    <i className="fa-solid fa-map-marker-alt text-[#EB1616] me-3"></i>
                    123 Street, New York, USA
                </h4>

                <h4 className="text-white text-lg sm:text-xl lg:text-2xl">
                    <i className="fa-solid fa-phone-alt text-[#EB1616] me-3"></i>
                    +012 345 67890
                </h4>

            </div>

        </section>
    )
}