import Button from "../components/Button"
import ServiceCard from "../components/ServiceCard"
import InfoRow from "../components/InfoRow"

import { services } from "../data/services"
import { prices } from "../data/prices"

import priceImg from '../assets/price.jpg'

export default function Services() {
    return (
        <section className="bg-black text-white">
            <div className="mx-auto max-w-7xl">

                {/* PART 1 */}

                <div className="flex flex-col items-center gap-3.5">

                    <div className="flex flex-col items-center gap-4">
                        <Button>Services</Button>

                        <h1 className="uppercase text-4xl font-bold mb-10">
                            What We Provide
                        </h1>
                    </div>

                    <div className="container w-full">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4 gap-10 place-items-center">

                            {services.map((service) => (
                                <ServiceCard
                                    key={service.title}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                />
                            ))}

                        </div>



                    </div>

                </div>

                {/* PART 2 */}

                <div className="px-4 py-16">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative overflow-hidden">

                        <div className="bg-[#191C24] text-white px-10 py-12">

                            <Button className="!bg-black">
                                Price & Plan
                            </Button>

                            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mt-6">
                                CHECK OUT OUR BARBER
                                <br />
                                SERVICES AND PRICES
                            </h1>

                            <div className="mt-2">

                                <div className="grid gap-4 py-6 text-[16px]">

                                    {prices.map((item) => (
                                        <InfoRow
                                            key={item.service}
                                            service={item.service}
                                            price={item.price}
                                        />
                                    ))}

                                </div>

                            </div>

                        </div>

                        <div className="relative min-h-[420px] lg:min-h-0">

                            <img
                                src={priceImg}
                                alt="Barber tools"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30"></div>

                        </div>

                    </div>

                </div>

            </div>
            {/* yeyyyyyyyyy finaly thanks God i did itt i made ittt yesss blossom yess u did ur best you learned it yes i did  it i got it and i made it thank you God :)) */}
        </section>


    );
}
