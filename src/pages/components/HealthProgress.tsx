import React, {useEffect, useState} from "react";
import definitions from "../json/definitions.json";

interface HealthProgressProps {
    health: number;
}

interface CustomCSSProperties extends React.CSSProperties {
    "--value"?: number;
}

const HealthProgress: React.FC<HealthProgressProps> = ({health}) => {
    const [healthColor, setHealthColor] = useState('green');
    const toolTipEarth = definitions.find(item => item.term === "Earth")?.definition;

    useEffect(() => {
        if (health >= 75) {
            setHealthColor('text-green-500');
        } else if (health >= 50) {
            setHealthColor('text-yellow-500');
        } else if (health >= 25) {
            setHealthColor('text-orange-500');
        } else {
            setHealthColor('text-red-500');
        }
    }, [health]);

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center text-base">
                <div className={`tooltip tooltip-left ${healthColor}`} data-tip={toolTipEarth}>
                    Earth ⓘ
                </div>
            </div>
            <div className={`radial-progress ${healthColor}`} style={{"--value": health} as CustomCSSProperties}>
                {health}%
            </div>
        </div>
    );
}

export default HealthProgress;
