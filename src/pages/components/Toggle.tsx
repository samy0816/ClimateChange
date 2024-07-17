import React from 'react';

const Toggle: React.FC<{
    handleToggle: () => void;
    active: boolean;
}> = ({handleToggle, active}) => {
    return (
        <div
            onClick={handleToggle}
            className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${active ? 'bg-blue-500' : 'bg-gray-700'}`}
        >
            <div
                id="toggle"
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`}
            />
        </div>
    );
};

export default Toggle;