import SplineWrapper from './components/SplineWrapper';
import ArticleCard from "./components/ArticleCard.tsx";
import GlobalChange from "./images/GlobalChange.gif";
import SeasonCycle from "./images/SeasonCycle.gif";
import Timelapse from "./images/Timelapse.gif";
import EarthQuiz from "./images/EarthQuiz.gif";
import { addLog, isLogging, startLogging, stopLogging } from './../logging';
import { useEffect, useState } from 'react';

function StartPage() {
    const [isLoggingState, setIsLoggingState] = useState(isLogging);

    const handleStartLogging = () => {
        setIsLoggingState(true);
        startLogging();
    }

    const handleStopLogging = () => {
        setIsLoggingState(false);
        stopLogging();
    }

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "menu",
            value: null,
            timestamp: new Date()
        });
        }, []
    );

    return (
        <div className="relative w-full h-full">
            <SplineWrapper sceneUrl="https://prod.spline.design/Uflm9F0jDdQKSioj/scene.splinecode"
                           className="absolute"/>
            <div className="relative flex-grow flex flex-col items-center pt-20">
                <div className="font-bold text-4xl">
                    Select Mode
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 my-8 align-middle">
                    <ArticleCard link="/global" title="Global change" text="Learn more about the global change"
                                 imageUrl={GlobalChange}
                    />
                    <ArticleCard link="/season" title="Season cycle" text="Learn more about the season cycle"
                                 imageUrl={SeasonCycle}
                    />
                    <ArticleCard link="/tectonics" title="Plate Tectonics" text="Learn more about the plate tectonics on earth"
                                 imageUrl={Timelapse}
                    />
                    <ArticleCard link="/quiz" title="Quiz" text="Start the quiz to test your knowledge"
                                 imageUrl={EarthQuiz}
                    />
                </div>
            </div>
            <div className="fixed bottom-0 right-0 p-4 z-100">
                {isLoggingState 
                    ? 
                    <button className="btn btn-neutral" onClick={handleStopLogging}>Stop Logging ⏹️</button> 
                    : 
                    <button className="btn btn-neutral" onClick={handleStartLogging}>Start Logging ⏺️</button>}
            </div>
        </div>
    );
}

export default StartPage;
