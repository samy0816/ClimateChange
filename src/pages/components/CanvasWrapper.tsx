import React, {Suspense, useState} from 'react';

interface CanvasWrapperProps {
    id: string;
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ id }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full h-screen"
            >
                <canvas id={id}/>
                {hovered && (
                    <div className="absolute inset-0"/> // Performance improvement while hover: ignore the mouse
                )}
            </div>
        </Suspense>
    );
};

export default CanvasWrapper;