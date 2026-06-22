import Button from "../components/Button"
export default function Appointment() {
    return (
        <section id="appointment" className="bg-black py-20">
            <div className="container mx-auto px-4">

                <div className="max-w-5xl mx-auto bg-[#111111] rounded-3xl p-8 md:p-12">

                    <div className="flex flex-col items-center gap-3 mb-10">
                        <Button>Appointment</Button>

                        <h2 className="text-4xl font-bold text-white mb-3">
                            Book An Appointment
                        </h2>

                        <p className="text-[#6C7293]">
                            Schedule your next haircut with our professional barbers.
                        </p>
                    </div>

                    <form className="grid md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-[#1A1A1A] text-white p-4 rounded-lg outline-none border border-transparent focus:border-[#EB1616] placeholder:text-white"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="bg-[#1A1A1A] text-white p-4 rounded-lg outline-none border border-transparent focus:border-[#EB1616] placeholder:text-white"
                        />

                        <input
                            type="date"
                            className="bg-[#1A1A1A] text-white p-4 rounded-lg outline-none border border-transparent focus:border-[#EB1616] placeholder:text-white"
                        />

                        <input
                            type="time"
                            className="bg-[#1A1A1A] text-white p-4 rounded-lg outline-none border border-transparent focus:border-[#EB1616] placeholder:text-white"
                        />

                        <select
                            className="bg-[#1A1A1A] text-white p-4 rounded-lg outline-none border border-transparent focus:border-[#EB1616] placeholder:text-white"
                        >
                            <option>Hair Cut</option>
                            <option>Beard Trim</option>
                            <option>Hair Wash</option>
                            <option>Hair Coloring</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Number Of People"
                            className="bg-[#1A1A1A] text-white p-4 rounded-lg outline-none border border-transparent focus:border-[#EB1616] placeholder:text-white"
                        />

                        <textarea
                            rows="5"
                            placeholder="Additional Notes"
                            className="md:col-span-2 bg-[#1A1A1A] text-white p-4 rounded-lg outline-none border border-transparent focus:border-[#EB1616]"
                        ></textarea>

                        <div className="md:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#EB1616] hover:bg-red-700 transition px-10 py-4 rounded-full text-white font-semibold"
                            >
                                Book Now
                            </button>
                        </div>

                    </form>

                </div>

            </div>
        </section>
    );
}