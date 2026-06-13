import Button from "../components/Button"
import BarberCard from "../components/BarberCard";
import WorkingHoursImg from "../assets/open.jpg";
import InfoRow from "../components/InfoRow"
import { barbers } from "../data/teamData";
import { workingHours } from "../data/teamData";

export default function TeamSection() {
    return (
        <section className="bg-black py-10">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Header */}

                <div className="mb-14 flex flex-col items-center">
                    <Button>Our Barber</Button>

                    <h2 className="mt-4 text-center text-4xl font-bold uppercase text-white">
                        Meet Our Barber
                    </h2>
                </div>

                {/* Team Grid */}

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {barbers.map((barber) => (
                        <BarberCard
                            key={barber.id}
                            image={barber.image}
                            name={barber.name}
                            role={barber.role}
                        />
                    ))}
                </div>

                {/* PART 2 */}

                <div className="px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">

                        {/* LEFT IMAGE */}
                        <div className="relative min-h-[420px] lg:min-h-0">
                            <img
                                src={WorkingHoursImg}
                                alt="Barber Shop"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="bg-[#191C24] text-white px-10 py-12">

                            <Button className="!bg-black ">
                                Working Hours
                            </Button>

                            <h1 className="text-2xl lg:text-3xl font-bold leading-tight mt-6 uppercase">
                                Professional Barbers
                                <br />
                                Are Waiting For You
                            </h1>

                            <div className="mt-2">
                                <div className="grid gap-4 py-6 text-[16px]">

                                    {workingHours.map((item) => (
                                        <InfoRow
                                            key={item.service}
                                            service={item.service}
                                            price={item.price}
                                            priceClassName={
                                                item.price === "09 AM - 09 PM"
                                                    ? "text-[#6C7293]"
                                                    : "text-[#EB1616]"
                                            }
                                        />
                                    ))}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}