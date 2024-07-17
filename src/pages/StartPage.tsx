import SplineWrapper from './components/SplineWrapper';
import PrimaryButton from "./components/PrimaryButton.tsx";
import { useEffect } from 'react';
import { addLog } from '../logging.ts';

function StartPage() {
    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "start",
            value: null,
            timestamp: new Date()
        });
    }, []);

    return (
        <div className="flex flex-col justify-between w-full h-screen">
            <SplineWrapper sceneUrl="https://prod.spline.design/dII7llt-JV3vxKBn/scene.splinecode"
                           className="absolute"/>
            <div className="relative text-center flex-grow flex flex-col items-center px-4 lg:px-16 pt-20">
                <div className="font-bold text-6xl">
                    Climate Change Simulator
                </div>
                <PrimaryButton link="/menu" text="Start" className="mt-10"/>
            </div>
        </div>
    );
}

export default StartPage;