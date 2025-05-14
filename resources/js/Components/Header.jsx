import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import {
    FaSignInAlt,
    FaSignOutAlt,
    FaTachometerAlt,
    FaUser,
} from 'react-icons/fa';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef();
    const { auth } = usePage().props;

    // Menutup dropdown jika klik di luar
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    My Portfolio
                </Link>

                <div className="flex items-center space-x-6">
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-blue-600"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="hover:text-blue-600"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-blue-600"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* User Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-gray-600 hover:text-blue-600 focus:outline-none"
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen}
                        >
                            <FaUser className="text-xl" />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                                {auth?.user ? (
                                    <>
                                        <Link
                                            href="/dashboard"
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                        >
                                            <FaTachometerAlt className="mr-2" />
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                        >
                                            <FaSignOutAlt className="mr-2" />
                                            Logout
                                        </Link>
                                    </>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                    >
                                        <FaSignInAlt className="mr-2" />
                                        Login
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
