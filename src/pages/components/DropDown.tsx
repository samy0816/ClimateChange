import React, { useState, useEffect, useRef } from "react";
import HamburgerIcon from "../icons/HamburgerIcon.tsx";

const DropDown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="inline-flex items-center overflow-hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <HamburgerIcon />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute end-0 z-10 mt-2 w-32 rounded-md border shadow-lg border-gray-800 bg-black"
                    role="menu"
                >
                    <div className="p-1">
                        <a
                            href="/"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                            role="menuitem"
                        >
                            Home
                        </a>
                        <a
                            href="/menu"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-gray-300"
                            role="menuitem"
                        >
                            Menu
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDown;
