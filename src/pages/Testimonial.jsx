import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


import { testimonials } from "../data/testimonials";


export default function Testimonial() {
    return (
        <section className="bg-black pb-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <div className="flex flex-col items-center gap-4 mb-14">
                    <button className="btn_2">
                        Testimonial
                    </button>

                    <h1 className="uppercase text-3xl md:text-4xl font-bold text-white text-center">
                        What Our Clients Say!
                    </h1>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="max-w-4xl mx-auto text-center">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                                />

                                <h3 className="text-white md:text-2xl text-xl font-bold uppercase">
                                    {item.name}
                                </h3>

                                <p className="text-[#EB1616] mt-2 mb-6">
                                    {item.profession}
                                </p>

                                <p className="text-[#6C7293] leading-8 text-lg">
                                    {item.text}
                                </p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}