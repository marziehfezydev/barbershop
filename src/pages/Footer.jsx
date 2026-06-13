import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#191C24] text-[#6C7293] py-16 ">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* Contact */}
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">
                        GET IN TOUCH
                    </h2>

                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="bg-[#EB1616] p-3 text-white">
                                <FaMapMarkerAlt />
                            </span>
                            <span>123 Street</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="bg-[#EB1616] p-3 text-white">
                                <FaPhone />
                            </span>
                            <span>+012 345 67890</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="bg-[#EB1616] p-3 text-white">
                                <FaEnvelope />
                            </span>
                            <span>blossomfly06@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">
                        QUICK LINKS
                    </h2>

                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-[#EB1616] transition">
                                About Us
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[#EB1616] transition">
                                Contact Us
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[#EB1616] transition">
                                Our Services
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[#EB1616] transition">
                                Terms & Condition
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-[#EB1616] transition">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">
                        NEWSLETTER
                    </h2>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-5 py-3 bg-white text-black focus:outline-none"
                        />

                        <button className="bg-[#EB1616] text-white px-5 py-3 font-semibold">
                            SignUp
                        </button>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <a href="#" className="bg-black p-4 hover:bg-[#EB1616] transition">
                            <FaTwitter />
                        </a>

                        <a href="#" className="bg-black p-4 hover:bg-[#EB1616] transition">
                            <FaFacebookF />
                        </a>

                        <a href="#" className="bg-black p-4 hover:bg-[#EB1616] transition">
                            <FaYoutube />
                        </a>

                        <a href="#" className="bg-black p-4 hover:bg-[#EB1616] transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}