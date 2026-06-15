import Button from "../components/Button";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-black py-24"
        >
            <div className="container mx-auto px-4">

                {/* Heading */}
                <div className="flex flex-col items-center text-center gap-4 mb-12">

                    <Button>
                        Contact Us
                    </Button>

                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-white max-w-3xl">
                        Have Any Query? Please Contact Us!
                    </h2>

                    <p className="text-[#6C7293] max-w-2xl">
                        We'd love to hear from you. Whether you have a question
                        about our services, pricing, appointments, or anything
                        else, our team is ready to answer all your questions.
                    </p>

                </div>

                {/* Form */}
                <form className="max-w-5xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-6 mb-6">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="
                                w-full
                                bg-transparent
                                border
                                border-[#6C7293]
                                px-5
                                py-4
                                text-white
                                placeholder:text-[#6C7293]
                                focus:outline-none
                                focus:border-[#EB1616]
                                transition
                            "
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="
                                w-full
                                bg-transparent
                                border
                                border-[#6C7293]
                                px-5
                                py-4
                                text-white
                                placeholder:text-[#6C7293]
                                focus:outline-none
                                focus:border-[#EB1616]
                                transition
                            "
                        />

                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        className="
                            w-full
                            bg-transparent
                            border
                            border-[#6C7293]
                            px-5
                            py-4
                            text-white
                            placeholder:text-[#6C7293]
                            focus:outline-none
                            focus:border-[#EB1616]
                            transition
                            mb-6
                        "
                    />

                    <textarea
                        rows="6"
                        placeholder="Message"
                        className="
                            w-full
                            bg-transparent
                            border
                            border-[#6C7293]
                            px-5
                            py-4
                            text-white
                            placeholder:text-[#6C7293]
                            focus:outline-none
                            focus:border-[#EB1616]
                            transition
                            resize-none
                            mb-6
                        "
                    />

                    <button
                        type="submit"
                        className="
                            w-full
                            bg-[#EB1616]
                            hover:bg-red-700
                            text-white
                            font-semibold
                            py-4
                            transition
                            cursor-pointer
                        "
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    );
}