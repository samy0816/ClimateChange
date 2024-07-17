import React from "react";

const Steps: React.FC<{currentStep?: number}> = ({currentStep = 0}) => {
    return (
        <ul className="steps w-full">
            <li data-content="📖" className={`step ${currentStep >= 0 ? 'step-info' : ''}`}>Read</li>
            <li data-content="🌍" className={`step ${currentStep >= 1 ? 'step-info' : ''}`}>Try yourself</li>
        </ul>
    );
}

export default Steps;