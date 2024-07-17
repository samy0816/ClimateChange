import SplineWrapper from "../components/SplineWrapper.tsx";
import Layout from "../components/Layout.tsx";
import Title from "../components/Title.tsx";
import Steps from "../components/Steps.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import textData from '../json/textData.json';
import { useEffect } from "react";
import { addLog } from "../../logging.ts";

function SeasonsRead() {
    const textContent = textData["SeasonsRead"];

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "seasons read",
            value: null,
            timestamp: new Date()
        })
    }, []);

    return (
        <Layout>
            <div className="w-2/5 m-4 p-4 overflow-y-auto space-y-4 scrollbar-hide">
                <Title>{textContent.title}</Title>
                <Steps currentStep={0}/>
                <div className="pt-5">
                    {textContent.text}
                </div>
                <div className="flex justify-between">
                    <SecondaryButton link="/menu" text="Back"/>
                    <PrimaryButton link="/season/edit" text="Next"/>
                </div>
            </div>

            <div className="w-3/5 fixed pl-8 top-0 right-0 h-screen">
                <SplineWrapper sceneUrl="https://prod.spline.design/lt9JIIT3K0yH4N-g/scene.splinecode"/>
            </div>
        </Layout>
    );
}

export default SeasonsRead;
