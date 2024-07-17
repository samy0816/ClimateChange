import React, {Suspense, useState} from 'react';
import Spline from "@splinetool/react-spline";
import {Application} from "@splinetool/runtime";

interface SplineWrapperProps {
    className?: string;
    sceneUrl: string;
    onLoad?: (e: Application) => void;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({className, sceneUrl, onLoad}) => {
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
                className={className + " w-full h-screen bg-black"}
            >
                <Spline scene={sceneUrl} onLoad={onLoad}/>
                {hovered && (
                    <div className="absolute inset-0"/> // Performance improvement while hover: ignore the mouse
                )}
            </div>
        </Suspense>
    );
};

export default SplineWrapper;