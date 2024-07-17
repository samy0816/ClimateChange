import React from 'react';

const PrimaryButton: React.FC<{
    link?: string;
    text: string;
    className?: string;
    onClick?: () => void;
}> = ({link, text, className = '', onClick}) => {
    return (
        <a
            className={`inline-block rounded bg-blue-600 px-6 py-3 text-center text-white hover:bg-blue-800 focus:outline-none focus:ring active:bg-blue-700 cursor-pointer ${className}`}
            href={link}
            onClick={onClick}
        >
            {text}
        </a>
    );
};

export default PrimaryButton;