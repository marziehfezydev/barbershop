import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-[#191C24] fixed w-full top-0 left-0 z-50 anton-regular">
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

                        {/* HOME (scroll to top section in Home page) */}
                        <li>
                            <a
                                href="/#home"
                                onClick={closeMenu}
                                className="text-[#EB1616] font-bold"
                            >
                                HOME
                            </a>
                        </li>

                        <li>
                            <a
                                href="/#about"
                                onClick={closeMenu}
                                className="link"
                            >
                                ABOUT
                            </a>
                        </li>

                        <li>
                            <a
                                href="/#services"
                                onClick={closeMenu}
                                className="link"
                            >
                                SERVICE
                            </a>
                        </li>

                        <li>
                            <a
                                href="/#team"
                                onClick={closeMenu}
                                className="link"
                            >
                                TEAM
                            </a>
                        </li>

                        <li>
                            <a
                                href="/#footer"
                                onClick={closeMenu}
                                className="link"
                            >
                                CONTACT
                            </a>
                        </li>

                        {/* Appointment (REAL ROUTE) */}
                        <li className="lg:ml-4">
                            <Link
                                to="/appointment"
                                className="btn flex items-center gap-3"
                                onClick={closeMenu}
                            >
                                <span>Appointment</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
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