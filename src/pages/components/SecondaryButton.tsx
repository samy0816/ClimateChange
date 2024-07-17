import React from 'react';

const SecondaryButton: React.FC<{
    link?: string;
    text: string;
    className?: string;
    onClick?: () => void;
}> = ({link, text, className = '', onClick}) => {
    return (
        <a
            className={`inline-block rounded border border-blue-800 px-12 py-3 text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-400 ${className}`}
            href={link}
            onClick={onClick}
        >
            {text}
        </a>
    );
};

export default SecondaryButton;