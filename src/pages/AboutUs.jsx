import Button from "../components/Button"
import about from "../assets/about.jpg"

export default function AboutUs() {
    return (
        <section id="about" className="bg-black py-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
                {/* image and box */}
                <div className="relative flex justify-center md:justify-start">
                    <div>
                        <img src={about} alt="about" className="w-[450px] h-auto" />
                    </div>
                    {/* box of experience */}
                    <div className="absolute bg-[#191C24] backdrop-blur-sm px-5 py-3 w-[220px] text-center border-l-4 border-red-600 -bottom-4 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 shadow-lg hidden lg:block">
                        <h1 className="uppercase text-[#EB1616] mb-3 text-xl font-bold">25 Years</h1>
                        <h2 className="uppercase text-white text-sm font-semibold">Experience</h2>
                    </div>
                </div>

                {/* content */}
                <div className="flex flex-col items-center gap-3 text-white pt-2">
                    {/* About Us */}
                    <Button>About Us</Button>

                    {/* Title */}
                    <div>
                        <h1 className="font-bold md:text-2xl lg:text-3xl uppercase leading-tight">
                            More Than Just A Haircut. <br /> Learn More About Us!
                        </h1>

                        {/* Text */}
                        <p className="color lg:text-[16px] text-sm leading-relaxed pt-0.5">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                            ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                            <br />
                            <br />
                            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum.
                            Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                        </p>
                    </div>

                    {/* Column */}
                    <div className="flex flex-row items-center gap-6 mt-2">
                        <div>
                            <h3 className="lg:text-[28px] text-xl uppercase font-bold text-white mb-1">Since 1990</h3>
                            <p className="color lg:text-[16px] text-sm leading-relaxed">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                            </p>
                        </div>

                        <div>
                            <h3 className="lg:text-[28px] text-xl uppercase font-bold text-white mb-1">1000+ clients</h3>
                            <p className="color lg:text-[16px] text-sm leading-relaxed">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}