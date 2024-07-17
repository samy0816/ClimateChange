import Layout from "../components/Layout.tsx";
import Title from "../components/Title.tsx";
import Steps from "../components/Steps.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";
import {useEffect, useRef, useState} from "react";
import {Application} from "@splinetool/runtime";
import CanvasWrapper from "../components/CanvasWrapper.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import SubTitleRange from "../components/SubTitleRange.tsx";
import Slider from "../components/Slider.tsx";
import updateGlobalChange from "../updateModel/updateGlobalChange.tsx";
import HealthProgress from "../components/HealthProgress.tsx";
import ConditionAlert from "../components/ConditionAlert.tsx";
import { addLog } from "../../logging.ts";

function GlobalChangeEdit() {
    const [forestation, setForestation] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [agriculture, setAgriculture] = useState(0);
    const [population, setPopulation] = useState(0);
    const [meat, setMeat] = useState(0);
    const [isForestFire, setIsForestFire] = useState(false);
    const [isHurricane, setIsHurricane] = useState(false);
    const [isFlood, setIsFlood] = useState(false);
    const [isSeaLevelRise, setIsSeaLevelRise] = useState(false);
    const [temperature, setTemperature] = useState(0);
    const [earthHealth, setEarthHealth] = useState(0);
    const [zoom, setZoom] = useState(1);

    const splineRef = useRef<Application | null>(null);

    useEffect(() => {
        const canvas = document.getElementById('globalchange-canvas');
        if (canvas) {
            const spline = new Application(canvas as HTMLCanvasElement);
            spline.load('https://prod.spline.design/kFtlp3CEDlcTFaMB/scene.splinecode')
                .then(() => {
                    splineRef.current = spline;
                });
        }

        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "global change edit",
            value: null,
            timestamp: new Date()
        })
    }, []);

    const mapTemperatureToHealth = (temp: number) => {
        const minTemp = -14;
        const maxTemp = 17;
        const minHealth = 0;
        const maxHealth = 100;

        const mappedValue = ((temp - minTemp) / (maxTemp - minTemp)) * (maxHealth - minHealth) + minHealth;

        return Math.max(minHealth, Math.min(maxHealth, mappedValue));
    };

    const {updateOutcomes, updateForestationLayer, updateZoom} = updateGlobalChange(splineRef);

    useEffect(() => {
        const totalTemperature = forestation + energy + agriculture + population + meat;
        setTemperature(totalTemperature);

        const mappedHealth = mapTemperatureToHealth(totalTemperature);
        const roundedHealth = Math.round(mappedHealth);
        setEarthHealth(roundedHealth);
    }, [forestation, energy, agriculture, population, meat]);

    useEffect(() => {
        updateOutcomes(temperature, setIsForestFire, setIsFlood, setIsHurricane, setIsSeaLevelRise);

        updateForestationLayer(forestation);

        updateZoom(zoom);
    }, [forestation, temperature, updateForestationLayer, updateOutcomes, earthHealth, zoom, updateZoom]);

    // Logging
    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "slider",
            event: "change",
            name: "forestation",
            value: forestation.toString(),
            timestamp: new Date()
        });
    }, [forestation])

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "slider",
            event: "change",
            name: "renewable energy",
            value: energy.toString(),
            timestamp: new Date()
        });
    }, [energy])

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "slider",
            event: "change",
            name: "sustainable farming",
            value: agriculture.toString(),
            timestamp: new Date()
        });
    }, [agriculture])

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "slider",
            event: "change",
            name: "population control",
            value: population.toString(),
            timestamp: new Date()
        });
    }, [population])

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "slider",
            event: "change",
            name: "plant-based diet",
            value: meat.toString(),
            timestamp: new Date()
        });
    }, [meat])

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "slider",
            event: "change",
            name: "zoom",
            value: zoom.toString(),
            timestamp: new Date()
        });
    }, [zoom])

    return (
        <Layout>
            <div className="w-2/5 m-4 p-4 overflow-y-auto space-y-3 scrollbar-hide">
                <Title>Global Change</Title>
                <Steps currentStep={1}/>
                <div>
                    The UI sliders in the image allow users to experiment with the impact of different human
                    activities on global change. Each slider adjusts the level of an activity, from negative to
                    positive values, showing how increasing or decreasing each activity affects the
                    environment. This helps visualize potential outcomes of various policy and lifestyle choices
                    and understand their role in climate change.
                </div>
                <SubTitleRange start="Urbanization" end="Forestation" emojiStart="🏢" emojiEnd="🌳"/>
                <Slider value={forestation} setValue={setForestation} min={-2} max={5}/>

                <SubTitleRange start="Fossil Fuel" end="Renewable Energy" emojiStart="🚗" emojiEnd="🍀"/>
                <Slider value={energy} setValue={setEnergy} min={-3} max={3}/>

                <SubTitleRange start="Agricultural Practices" end="Sustainable Farming"/>
                <Slider value={agriculture} setValue={setAgriculture} min={-3} max={3}/>

                <SubTitleRange start="Population Growth" end="Population Control" emojiStart="👨‍👩‍👧‍👦" emojiEnd="👪"/>
                <Slider value={population} setValue={setPopulation} min={-3} max={3}/>

                <SubTitleRange start="Meat Consumption" end="Plant-Based Diet" emojiStart="🥩" emojiEnd="🥗"/>
                <Slider value={meat} setValue={setMeat} min={-3} max={3}/>

                <SubTitleRange start="Zoom closer" emojiStart="🔎"/>
                <Slider value={zoom} setValue={setZoom} min={1} max={3}/>

                <div className="flex justify-between pt-4">
                    <SecondaryButton link="/global" text="Back"/>
                    <PrimaryButton link="/menu" text="Back to Menu"/>
                </div>
            </div>

            <div className="w-3/5 fixed pl-8 top-0 -right-4 h-screen">
                <CanvasWrapper id="globalchange-canvas"/>
            </div>

            <div className="absolute bottom-0 right-0 p-4 z-100">
                <div>
                    <div className="flex flex-col justify-end content-end gap-5 mb-5">
                        {isSeaLevelRise && <ConditionAlert text="Sea-Level rose 🌊"/>}
                        {isHurricane && <ConditionAlert text="Hurricane 🌪️"/>}
                        {isFlood && <ConditionAlert text="Flood ⛈️"/>}
                        {isForestFire && <ConditionAlert text="Forest Fire 🔥"/>}
                    </div>
                    <HealthProgress health={earthHealth}/>
                </div>
            </div>
        </Layout>
    );
}

export default GlobalChangeEdit;
