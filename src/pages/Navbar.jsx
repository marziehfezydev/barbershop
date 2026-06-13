import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#191C24] fixed w-full top-0 left-0 z-50 anton-regular ">
            <nav className="container mx-auto flex items-center justify-between h-20 sm:h-24 px-5">

                {/* Logo */}
                <div className="text-[#EB1616] uppercase flex items-center gap-2 text-2xl sm:text-4xl font-bold">
                    <i className="fa-solid fa-scissors"></i>
                    <p>Haircut</p>
                </div>

                {/* Menu */}
                <div
                    className={`
                        flex items-center justify-center
                        absolute lg:static
                        top-0
                        ${isOpen ? "left-0" : "-left-full"}
                        w-full lg:w-auto
                        min-h-screen lg:min-h-fit
                        bg-[#191C24]/50 sm:bg-transparent
                        backdrop-blur-sm
                        duration-300
                    `}
                >
                    <ul className="flex flex-col lg:flex-row items-center gap-8 text-xl">

                        <li>
                            <a
                                href="#"
                                className="text-[#EB1616] font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                HOME
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="link "
                                onClick={() => setIsOpen(false)}
                            >
                                ABOUT
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="link"
                                onClick={() => setIsOpen(false)}
                            >
                                SERVICE
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="link"
                                onClick={() => setIsOpen(false)}
                            >
                                PAGES
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="link"
                                onClick={() => setIsOpen(false)}
                            >
                                CONTACT
                            </a>
                        </li>

                        <li className="lg:ml-4">
                            <button className="btn flex items-center gap-3">
                                <span>Appointment</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-2xl z-50"
                >
                    <i
                        className={
                            isOpen
                                ? "fa-solid fa-xmark text-[#EB1616]"
                                : "fa-solid fa-bars text-[#EB1616]"
                        }
                    ></i>
                </button>

            </nav>
        </header>
    );
}